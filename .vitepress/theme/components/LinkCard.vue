<script setup>
defineProps({
    title: String,
    desc: String,
    link: String,
    icon: { type: String, default: '📝' }
})
</script>

<template>
    <a :href="link" target="_blank" class="link-card">
        <div class="card-icon">{{ icon }}</div>
        <div class="card-content">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-desc">{{ desc }}</p>
        </div>
        <div class="card-arrow">→</div>
    </a>
</template>

<style scoped>
.link-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    margin: 12px 0;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    text-decoration: none !important;
    transition: all 0.2s ease;
}

.link-card:hover {
    border-color: var(--vp-c-brand);
    background: var(--vp-c-bg-mute);
    transform: translateY(-2px);
}

.card-icon {
    font-size: 1.5rem;
    background: var(--vp-c-bg-alt);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}

.card-content {
    flex: 1;
}

.card-title {
    margin: 0 !important;
    color: var(--vp-c-text-1);
    font-size: 1rem;
}

.card-desc {
    margin: 4px 0 0 !important;
    color: var(--vp-c-text-2);
    font-size: 0.85rem;
    line-height: 1.4;
}

.card-arrow {
    color: var(--vp-c-brand);
    font-weight: bold;
    opacity: 0.5;
}

.link-card:hover .card-arrow {
    opacity: 1;
}
</style>