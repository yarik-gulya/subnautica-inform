<template>
    <div>
        <h2>Пошук</h2>
        <p>Введіть запит для пошуку:</p>
        <input type="text" v-model="searchQuery" @input="performSearch" />
        <ul>
            <li v-for="item in searchResults" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>

</script>

<style>

</style>