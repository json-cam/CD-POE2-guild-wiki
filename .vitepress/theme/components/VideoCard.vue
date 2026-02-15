<script setup>
const props = defineProps({
    id: String,      // The YouTube Video ID (e.g., dQw4w9WgXcQ)
    title: String    // Optional title to show above the video
})

// Helper to build the embed URL
const embedUrl = `https://www.youtube-nocookie.com/embed/${props.id}`
</script>

<template>
    <div class="video-container">
        <h4 v-if="title" class="video-title">{{ title }}</h4>
        <div class="video-responsive">
            <iframe :src="embedUrl" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<style scoped>
.video-container {
    margin: 24px 0;
}

.video-title {
    margin-bottom: 12px !important;
    color: var(--vp-c-text-1);
}

.video-responsive {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid var(--vp-c-divider);
}

.video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>