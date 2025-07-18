<template>
    <div>
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

<style scoped></style>