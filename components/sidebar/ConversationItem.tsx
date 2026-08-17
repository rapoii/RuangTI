"use client";

import React, { useState } from "react";
import { Conversation } from "@/lib/types";
import { Dropdown } from "@/components/ui/DropdownMenu";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { MoreHorizontal, Pin, Edit3, Trash2, PinOff, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onSelect: () => void;
  onRename: (newTitle: string) => void;
  onTogglePin: () => void;
  onDelete: () => void;
  isCollapsed?: boolean;
}

export function ConversationItem({
  conversation,
  isActive,
  onSelect,
  onRename,
  onTogglePin,
  onDelete,
  isCollapsed,
}: ConversationItemProps) {
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(conversation.title);

  const menuItems = [
    {
      id: "pin",
      label: conversation.pinned ? "Lepas Sematan" : "Sematkan",
      icon: conversation.pinned ? <PinOff className="w-3.5 h-3.5" /> : <Pin className="w-3.5 h-3.5" />,
    },
    {
      id: "rename",
      label: "Ubah Nama",
      icon: <Edit3 className="w-3.5 h-3.5" />,
    },
    {
      id: "delete",
      label: "Hapus Percakapan",
      icon: <Trash2 className="w-3.5 h-3.5" />,
      danger: true,
    },
  ];

  const handleMenuSelect = (actionId: string) => {
    if (actionId === "pin") {
      onTogglePin();
    } else if (actionId === "rename") {
      setTitleInput(conversation.title);
      setIsRenameOpen(true);
    } else if (actionId === "delete") {
      setIsDeleteOpen(true);
    }
  };

  const handleSaveRename = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (titleInput.trim()) {
      onRename(titleInput.trim());
      setIsRenameOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={onSelect}
        className={cn(
          "group relative flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm cursor-pointer transition-all duration-150 select-none",
          isActive
            ? "bg-surface font-medium text-text-primary shadow-sm border border-border"
            : "text-text-secondary hover:text-text-primary hover:bg-surface/50 border border-transparent"
        )}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
          {conversation.pinned ? (
            <Pin className="w-3.5 h-3.5 text-accent shrink-0 fill-accent/20" />
          ) : (
            <MessageSquare className="w-3.5 h-3.5 text-text-tertiary shrink-0 group-hover:text-text-secondary transition-colors" />
          )}
          <span className="truncate">{conversation.title}</span>
        </div>

        {/* 3-Dots Action Button */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "transition-opacity duration-150 shrink-0",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 focus-within:opacity-100"
          )}
        >
          <Dropdown
            trigger={
              <button
                type="button"
                className="w-6 h-6 rounded-md flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-surface-active transition-colors"
                aria-label={`Opsi untuk ${conversation.title}`}
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            }
            items={menuItems}
            onSelect={handleMenuSelect}
            align="right"
            widthClass="w-48"
          />
        </div>
      </div>

      {/* Rename Dialog */}
      <Dialog
        isOpen={isRenameOpen}
        onClose={() => setIsRenameOpen(false)}
        title="Ubah Nama Percakapan"
        description="Beri judul yang memudahkan Anda mengingat topik percakapan ini."
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setIsRenameOpen(false)}>
              Batal
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleSaveRename()}>
              Simpan Perubahan
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveRename} className="mt-2">
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-xl bg-canvas border border-border text-text-primary focus:border-accent outline-none transition-colors"
            placeholder="Masukkan judul percakapan..."
            autoFocus
          />
        </form>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        title="Hapus Percakapan?"
        description="Tindakan ini permanen dan akan menghapus seluruh riwayat pesan di dalam percakapan ini dari penyimpanan lokal browser Anda."
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setIsDeleteOpen(false)}>
              Batal
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                onDelete();
                setIsDeleteOpen(false);
              }}
            >
              Hapus Sekarang
            </Button>
          </>
        }
      />
    </>
  );
}
