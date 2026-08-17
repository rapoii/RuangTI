import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Conversation, TimeBucket } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupConversationsByTime(
  conversations: Conversation[]
): Record<TimeBucket, Conversation[]> {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterdayStart = todayStart - 24 * 60 * 60 * 1000;
  const last7DaysStart = todayStart - 7 * 24 * 60 * 60 * 1000;

  const grouped: Record<TimeBucket, Conversation[]> = {
    "Hari ini": [],
    "Kemarin": [],
    "7 hari terakhir": [],
    "Lebih lama": [],
  };

  // Sort: Pinned first, then updatedAt desc
  const sorted = [...conversations].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.updatedAt - a.updatedAt;
  });

  for (const conv of sorted) {
    const time = conv.updatedAt || conv.createdAt;
    if (time >= todayStart) {
      grouped["Hari ini"].push(conv);
    } else if (time >= yesterdayStart) {
      grouped["Kemarin"].push(conv);
    } else if (time >= last7DaysStart) {
      grouped["7 hari terakhir"].push(conv);
    } else {
      grouped["Lebih lama"].push(conv);
    }
  }

  return grouped;
}

export function generateTitleFromMessage(content: string): string {
  const cleaned = content.trim().replace(/\n+/g, " ");
  if (cleaned.length <= 36) {
    return cleaned;
  }
  return cleaned.slice(0, 36).trim() + "...";
}
