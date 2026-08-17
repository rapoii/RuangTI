import React from "react";
import { Conversation, TimeBucket } from "@/lib/types";
import { groupConversationsByTime } from "@/lib/utils";
import { ConversationItem } from "./ConversationItem";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelectConversation: (id: string) => void;
  onRenameConversation: (id: string, newTitle: string) => void;
  onTogglePinConversation: (id: string) => void;
  onDeleteConversation: (id: string) => void;
  isCollapsed?: boolean;
}

const BUCKET_ORDER: TimeBucket[] = [
  "Hari ini",
  "Kemarin",
  "7 hari terakhir",
  "Lebih lama",
];

export function ConversationList({
  conversations,
  activeId,
  onSelectConversation,
  onRenameConversation,
  onTogglePinConversation,
  onDeleteConversation,
  isCollapsed,
}: ConversationListProps) {
  if (conversations.length === 0) {
    return (
      <div className="py-8 text-center text-xs text-text-secondary">
        {!isCollapsed && "Tidak ada percakapan"}
      </div>
    );
  }

  const grouped = groupConversationsByTime(conversations);

  return (
    <div className="space-y-4">
      {BUCKET_ORDER.map((bucket) => {
        const items = grouped[bucket];
        if (!items || items.length === 0) return null;

        return (
          <div key={bucket} className="space-y-1">
            {!isCollapsed && (
              <h4 className="px-2 text-[11px] font-semibold text-text-secondary/70 uppercase tracking-wider select-none">
                {bucket}
              </h4>
            )}
            <div className="space-y-0.5">
              {items.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={conv.id === activeId}
                  onSelect={() => onSelectConversation(conv.id)}
                  onRename={(newTitle) => onRenameConversation(conv.id, newTitle)}
                  onTogglePin={() => onTogglePinConversation(conv.id)}
                  onDelete={() => onDeleteConversation(conv.id)}
                  isCollapsed={isCollapsed}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
