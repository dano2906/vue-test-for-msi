<template>
    <div role="group" class="flex items-center justify-center">
        <button v-for="(value, index) in [1,2,3,4,5]" :key="index" class="py-2 px-3 border border-green-300 text-lg text-center font-semibold bg-green-100  first:rounded-l-lg last:rounded-r-lg" :class="answers[props.questionId] === value ? 'bg-red-500':''" @click="selectAnswer(props.questionId,value)">{{ value }}</button>
    </div>
</template>

<script setup>
    const props = defineProps({
        questionId:String
    })

    import {useAnswerStore} from "@/stores/questionsStore"

    const { answers,setAnswer } = useAnswerStore()

    function selectAnswer(questionId,value){
        setAnswer(questionId,value)
    }
</script>
