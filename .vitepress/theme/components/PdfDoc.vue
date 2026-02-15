<template>
    <div class="pdf-container">
        <ClientOnly>
            <VuePdfEmbed :source="src" />
        </ClientOnly>
    </div>
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
defineProps({
    src: String
})
</script>

<style scoped>
.pdf-container {
    width: 125%;
    max-height: 800px;
    margin-top: 1em;
    zoom: 1;
    overflow-y: auto;
    border: 1px solid var(--vp-c-divider);
    background: #525659;
    /* Standard PDF dark grey background */
    border-radius: 8px;
}
</style>