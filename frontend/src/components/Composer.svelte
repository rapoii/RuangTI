<script lang="ts">
  import ThinkingSelector from './ThinkingSelector.svelte';
  import type { ThinkingOption, UploadedDoc } from '../lib/types';

  interface Props {
    selectedModelId: string;
    isStreaming: boolean;
    onSelectModel: (opt: ThinkingOption) => void;
    onSend: (message: string, docContext?: string) => void;
    onStop: () => void;
  }

  let { selectedModelId, isStreaming, onSelectModel, onSend, onStop }: Props = $props();

  let inputMessage = $state('');
  let attachedDoc = $state<UploadedDoc | null>(null);
  let isUploading = $state(false);
  let fileInputRef = $state<HTMLInputElement | null>(null);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    const trimmed = inputMessage.trim();
    if (!trimmed || isStreaming) return;

    const docContext = attachedDoc ? `Nama file: ${attachedDoc.filename}\nIsi teks: ${attachedDoc.text}` : undefined;
    onSend(trimmed, docContext);

    inputMessage = '';
    // Pertahankan doc atau reset? Reset setelah kirim
    attachedDoc = null;
  }

  async function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];
    isUploading = true;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        alert('Gagal mengunggah file: ' + errText);
        return;
      }

      const data = await res.json();
      attachedDoc = {
        filename: data.filename,
        size: data.size,
        text: data.text,
      };
    } catch (err: any) {
      alert('Error upload: ' + err.message);
    } finally {
      isUploading = false;
      if (fileInputRef) {
        fileInputRef.value = '';
      }
    }
  }

  function removeAttachedDoc() {
    attachedDoc = null;
  }
</script>

<div class="w-full max-w-4xl mx-auto px-3 sm:px-6">
  <!-- Document Attachment Chip -->
  {#if attachedDoc}
    <div class="mb-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border shadow-2xs w-fit">
      <svg class="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span class="text-xs font-medium text-text-primary truncate max-w-[200px] sm:max-w-xs">{attachedDoc.filename}</span>
      <span class="text-[10px] text-text-tertiary">({Math.round(attachedDoc.size / 1024)} KB)</span>
      <button
        type="button"
        onclick={removeAttachedDoc}
        class="ml-1 text-text-tertiary hover:text-red-500 transition-colors p-0.5 rounded-full"
        title="Hapus lampiran"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  {/if}

  <!-- Composer Box -->
  <div class="bg-surface border border-border focus-within:border-accent/60 rounded-2xl p-2.5 sm:p-3 shadow-sm transition-all flex flex-col gap-2">
    <!-- Text Area -->
    <textarea
      bind:value={inputMessage}
      onkeydown={handleKeyDown}
      placeholder="Tanyakan konsep, rumus matematis, atau studi kasus Teknik Industri..."
      rows="2"
      class="w-full bg-transparent resize-none text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary focus:outline-hidden leading-relaxed px-1"
    ></textarea>

    <!-- Bottom Controls -->
    <div class="flex items-center justify-between pt-1 border-t border-border/40">
      <!-- Left: Thinking Selector & File Upload -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <ThinkingSelector {selectedModelId} onSelect={onSelectModel} />

        <!-- Upload Button -->
        <input
          type="file"
          bind:this={fileInputRef}
          onchange={handleFileChange}
          accept=".pdf,.docx,.pptx,.txt,.md,.csv,.json"
          class="hidden"
        />
        <button
          type="button"
          onclick={() => fileInputRef?.click()}
          disabled={isUploading || isStreaming}
          class="p-1.5 text-text-secondary hover:text-text-primary hover:bg-canvas-subtle rounded-md transition-colors disabled:opacity-50"
          title="Lampirkan Dokumen (Word, PPTX, PDF, Teks)"
        >
          {#if isUploading}
            <svg class="w-4 h-4 animate-spin text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10"></path>
            </svg>
          {:else}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          {/if}
        </button>
      </div>

      <!-- Right: Send / Stop Button -->
      <div>
        {#if isStreaming}
          <button
            type="button"
            onclick={onStop}
            class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-surface text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="2"></rect>
            </svg>
            <span>Stop</span>
          </button>
        {:else}
          <button
            type="button"
            onclick={submit}
            disabled={!inputMessage.trim()}
            class="px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-surface text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>Kirim</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
