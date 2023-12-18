import { ref,watchEffect } from 'vue'
import {useStorage} from "@vueuse/core"
import { defineStore } from 'pinia'

export const useAnswerStore = defineStore('answers', () => {
  const answers = ref({})
  const storage = useStorage("answers",answers,localStorage)

  const setAnswer = (questionId,answer) => {
    answers.value[questionId] = Number(answer)
    storage.value = answers.value
  }

  watchEffect(()=>{
    answers.value = storage.value
  })

  return { answers,setAnswer }
})
