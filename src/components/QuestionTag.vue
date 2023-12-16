<template>
    <li class="w-full p-2 bg-green-100 flex flex-col md:flex-row items-center justify-between gap-x-2">
        <span>{{ props.statement }}</span>
        <AnswerButtonGroup @select-answer="(value)=>selectAnswer(id,value)"/>
    </li>
</template>

<script setup>
    import AnswerButtonGroup from './AnswerButtonGroup.vue';
    const props = defineProps({
        statement:String,
        id:Number
    })
    //save in global state
    function selectAnswer(questionId,value){
        console.log(questionId,value)
    }
</script>
