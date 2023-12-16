<script setup>
    import MainLayout from "@/layouts/MainLayout.vue";
    import ModuleSection from "@/components/ModuleSection.vue"
</script>

<template>
    <MainLayout>
        <template #header>
            <h1>Header</h1>
        </template>
        <template #aside>
            <h2 >Aside</h2>
        </template>
        <template #content>
            <ModuleSection />
        </template>
        <template #footer>
            <h4>Footer</h4>
        </template>
    </MainLayout>
</template>