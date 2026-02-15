<template>
    <div class="pdf-wrapper">
        <div class="pdf-header">
            <span class="pdf-title">📄 PDF Doc</span>
            <div class="zoom-indicator">Zoom: {{ scale * 100 }}%</div>
            <a :href="src" download class="download-btn">Download</a>
        </div>

        <div class="pdf-content">
            <ClientOnly>
                <component :is="PdfEmbed" :source="src" :scale="scale" />
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'

const props = defineProps({
    src: String,
    scale: {
        type: Number,
        default: 1.5 // Defaulting to 150% for better readability
    }
})

const PdfEmbed = shallowRef(null)

onMounted(async () => {
    const module = await import('vue-pdf-embed')
    PdfEmbed.value = module.default
})
</script>

<style scoped>
/* Previous styles... */
.zoom-indicator {
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg-alt);
    padding: 2px 8px;
    border-radius: 4px;
}

.pdf-wrapper {
    width: 40vw;
}

.pdf-content {
    max-height: 800px;
    overflow-y: auto;
    padding: 20px;
    background: #313338;
    display: flex;
    justify-content: center;
    zoom: 3;

}

:deep(canvas) {
    /* This ensures the zoomed PDF doesn't overflow its container horizontally */
    max-width: 100%;
    height: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}
</style>