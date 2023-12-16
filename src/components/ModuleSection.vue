<template>
    <div class="w-full h-full flex flex-col items-center justify-start">
        <ul class="flex flex-col items-start justify-center gap-y-2">
            <QuestionTag v-for="({question,id}, index) in displayQuestions" :key="index" :statement="question" :id="id"/>
        </ul>
        <ul class="flex items-center justify-center gap-x-2">
            <li v-for="(page, index) in availablePages" :key="index" @click="changePage(page)">
                <span class="text-green-600 cursor-pointer font-semibold" :class="page === currentPage ? 'text-3xl':'text-lg'">{{ page }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref,computed } from "vue";
    import QuestionTag from "./QuestionTag.vue";
    import data from "@/data/questions.json"
    
    const questions = ref(data)
    const currentPage = ref(1)
    const availablePages = computed(()=>{
        const pages = new Set();
        questions.value.forEach((q)=>{
            pages.add(q.module_id)
        })
        return pages
    })
    const displayQuestions = computed(()=> (
        questions.value.filter((q)=>q.module_id === currentPage.value)
    ))
    const changePage = (page) => {
        currentPage.value = page
    }
</script>
