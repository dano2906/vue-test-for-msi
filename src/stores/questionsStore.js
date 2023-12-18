import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('answers', () => {
  const answers = ref({})

  const setAnswer = (questionId,answer) => {
    answers.value[questionId] = Number(answer)
  }

  return { answers,setAnswer }
})
