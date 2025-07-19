<template>
    <div>
        <h2>Ресурси</h2>
        <SearchComponent :objects="objects" @filtered="handleFiltered" />
        <div class="card-container">
            <InformCard v-for="object in filteredObjects" :key="object.id" :name="object.name" :image="object.image"
                :description="object.description" :area="object.area" />
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 0;
    color: #E0E8F0;
    text-align: center;
    background-color: orangered;
    padding: 20px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>

<script>
import { ref } from 'vue';
import SearchComponent from './SearchComponent.vue'
import InformCard from './InformCard.vue'

export default {
    components: {
        InformCard,
        SearchComponent
    },
    setup() {
        const objects = ref([
            {
                id: 1,
                name: 'Титан',
                description: 'Вапняковий виступ, Металобрухт',
                area: 'Морський ліс, Безпечні мілини, Ліс грибів, Рідкісний риф, Гори, Дюни, Траві плато, Підводні острови, Неактивна лавова зона, Великий риф, Печери',
                image: ''
            },
            {
                id: 2,
                name: 'Літій',
                description: 'Виступ шиферу, Морське дно, Поверхня суші',
                area: 'Ліс грибів, Печери медуз грибів, Плавучий острів, Траві плато, Маунтін-айленд',
                image: ''
            },
            {
                id: 3,
                name: 'Кристал настурана',
                description: 'Морське дно',
                area: 'Гори, печери, Зона кривавих водоростей',
                image: ''
            },
            {
                id: 4,
                name: 'Кіаніт',
                description: 'Морське дно',
                area: 'Неактивна лавова зона',
                image: ''
            },
            {
                id: 5,
                name: 'Зуб Сталкера',
                description: 'Сталкер (При волочінні з ним металобрухту. Ймовірність втрати зуба ~10%)',
                area: 'Морський ліс, Зона аварії',
                image: ''
            },
            {
                id: 6,
                name: 'Іонний куб',
                description: 'Бази прибульців, Попередник системи ППО, Інопланетні кеші',
                area: 'Рідкісний риф, Зона кривавих водоростей, Дюни, Лост-рівер, Неактивна лавова зона, Активна лавова зона',
                image: ''
            },
        ]);
        const filteredObjects = ref(objects.value);
        function handleFiltered(data) {
            filteredObjects.value = data
        }
        return {
            objects,
            filteredObjects,
            handleFiltered
        };
    }
}
</script>