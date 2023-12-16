<template>
    <div role="group" class="flex items-center justify-center">
        <button v-for="(value, index) in [1,2,3,4,5]" :key="index" class="py-2 px-3 border border-green-300 text-lg text-center font-semibold bg-green-100 active:bg-red-300 first:rounded-l-lg last:rounded-r-lg" @click="$emit('select-answer',value)">{{ value }}</button>
    </div>
</template>

<script setup>

</script>
