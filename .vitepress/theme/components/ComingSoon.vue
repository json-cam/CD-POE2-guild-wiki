<template>
    <div class="coming-soon">
        <h1>⚔️ Content Under Construction</h1>
        <p>The Exiles are currently gathering data for this section.</p>
        <div class="status-bar">
            <div class="progress" style="width: 65%"></div>
        </div>
        <p class="small">Check back after the next patch!</p>
        <a href="/" class="back-home">Return to Library</a>
    </div>
</template>

<style scoped>
.coming-soon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 24px;
    text-align: center;
}

.status-bar {
    width: 300px;
    height: 12px;
    background: var(--vp-c-bg-mute);
    border-radius: 6px;
    margin: 20px 0;
    overflow: hidden;
    border: 1px solid var(--vp-c-divider);
}

.progress {
    height: 100%;
    background: var(--vp-c-brand);
    box-shadow: 0 0 10px var(--vp-c-brand);
}

.back-home {
    margin-top: 30px;
    color: var(--vp-c-brand);
    text-decoration: none;
    font-weight: bold;
}

.back-home:hover {
    text-decoration: underline;
}
</style>