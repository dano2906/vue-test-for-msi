<template>
    <li class="w-full p-2 bg-green-100 flex flex-col md:flex-row items-center justify-between gap-x-2">
        <span>{{ props.statement }}</span>
        <AnswerButtonGroup :questionId="props.id"/>
    </li>
</template>

<script setup>
    const props = defineProps({
        statement:String,
        id:Number
    })

    import AnswerButtonGroup from './AnswerButtonGroup.vue';
    
</script>
