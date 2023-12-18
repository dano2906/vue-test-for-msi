<script setup>
    import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
    <MainLayout>
        <template #header>
            <h1>Header</h1>
        </template>
        <template #content>
            <h2>About page</h2>
        </template>
        <template #footer>
            <h4>Footer</h4>
        </template>
    </MainLayout>
</template>