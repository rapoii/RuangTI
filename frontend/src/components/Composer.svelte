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
  <!-- Document Attachment Chip (.neo-badge) -->
  {#if attachedDoc}
    <div class="mb-2 flex items-center gap-2 px-3 py-1.5 neo-badge bg-neutral-100 text-black w-fit font-mono text-xs">
      <svg class="w-3.5 h-3.5 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span class="font-bold truncate max-w-[200px] sm:max-w-xs">{attachedDoc.filename}</span>
      <span class="text-[10px] text-neutral-500">({Math.round(attachedDoc.size / 1024)} KB)</span>
      <button
        type="button"
        onclick={removeAttachedDoc}
        class="ml-1 text-neutral-500 hover:text-black font-bold p-0.5"
        title="Hapus lampiran"
      >
        ✕
      </button>
    </div>
  {/if}

  <!-- Composer Box (Neobrutalism .neo-input FLAT) -->
  <div class="neo-input bg-white p-2.5 sm:p-3 transition-all flex flex-col gap-2">
    <!-- Text Area -->
    <textarea
      bind:value={inputMessage}
      onkeydown={handleKeyDown}
      placeholder="Ada yang bisa saya bantu hari ini?"
      rows="1"
      class="w-full bg-transparent resize-none text-base text-black placeholder:text-neutral-400 focus:outline-none leading-normal px-1 py-3 font-medium"
    ></textarea>

    <!-- Bottom Controls -->
    <div class="flex items-center justify-between pt-1.5 border-t border-neutral-200">
      <!-- Left: Thinking Selector & File Upload -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <ThinkingSelector {selectedModelId} onSelect={onSelectModel} />

        <!-- Upload Button (.neo-btn) -->
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
          class="neo-btn w-8 h-8 bg-white hover:bg-neutral-50 text-black flex items-center justify-center text-xs disabled:opacity-50"
          title="Lampirkan Dokumen (Word, PPTX, PDF, Teks)"
        >
          {#if isUploading}
            <svg class="w-3.5 h-3.5 animate-spin text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10"></path>
            </svg>
          {:else}
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          {/if}
        </button>
      </div>

      <!-- Right: Send / Stop Button (.neo-btn) -->
      <div>
        {#if isStreaming}
          <button
            type="button"
            onclick={onStop}
            class="neo-btn h-8 px-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-1.5 shrink-0"
          >
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="2"></rect>
            </svg>
            <span>Stop</span>
          </button>
        {:else}
          <button
            type="button"
            onclick={submit}
            disabled={!inputMessage.trim()}
            class="neo-btn h-8 px-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-black flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
          >
            <span>Kirim</span>
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
