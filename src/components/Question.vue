<template>
    <li>
        <span>{{ props.statement }}</span>
    </li>
</template>

<script setup>
    const props = defineProps({
        statement:String
    })
</script>
