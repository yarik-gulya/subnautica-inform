<template>
    <div class="search-container">
        <h2>Пошук</h2>
        <p>Введіть запит для пошуку:</p>
        <input type="text" v-model="searchQuery" placeholder="Що шукаєте на глибинах?" />
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
    props: {
        objects: {
            type: Array,
            required: true
        }
    },
    emits: ['filtered'],
    setup(props, { emit }) {
        const searchQuery = ref('')

        const filteredObjects = computed(() => {
            return props.objects.filter(obj =>
                obj.name.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        });


        watch(filteredObjects, (newVal) => {
            emit('filtered', newVal)
        }, { immediate: true })

        return {
            searchQuery,
        }
    },
}
</script>

<style scoped>
.search-container {
    background: rgba(24, 34, 56, 0.9);
    padding: 40px 20px;
    max-width: 600px;
    margin: 0px auto 40px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(20, 30, 60, 0.5);
    text-align: center;
    color: #AEEFFF;
}

.search-container h2 {
    font-size: 32px;
    margin-bottom: 10px;
    color: #AEEFFF;
}

.search-container p {
    font-size: 18px;
    margin-bottom: 20px;
}

.search-container input[type="text"] {
    width: 80%;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    background-color: #2a3b5c;
    color: #ffffff;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.search-container input[type="text"]::placeholder {
    color: #88bbcc;
}

.search-container input[type="text"]:focus {
    outline: none;
    background-color: #314b73;
    box-shadow: 0 0 8px #00bfcbd0;
}
</style>