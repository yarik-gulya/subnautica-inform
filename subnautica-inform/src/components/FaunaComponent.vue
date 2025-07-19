<template>
    <div>
        <h2>Фауна</h2>
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
import InformCard from './InformCard.vue'
import SearchComponent from './SearchComponent.vue'

export default {
    components: {
        InformCard,
        SearchComponent
    },
    setup() {
        const objects = ref([
            {
                id: 1,
                name: "Піскун",
                description: "Поведінка боязка. Зазвичай вони з'являються групами і іноді вистрибують з води. Можливе сканування. Швидше, ніж гравець.",
                area: "Безпечні мілини, Великий риф, Основний ізоляційний комплекс, Маунтін-айленд, Ліс грибів (Східний), Дюни, Зона аварії, Рідкісний риф, Столові гори",
                image: ""
            },
            {
                id: 2,
                name: 'Реджинальд',
                description: 'Поведінка боязка. Дивна риба, плавці якої зрощені з хвостом.',
                area: 'Великий риф, Траві плато, Рідкісний риф, Печери Шипомет, Лост-рівер',
                image: ''
            },
            {
                id: 3,
                name: 'Личинка лави',
                description: 'Він всмоктується на поверхню автомобіля, висмоктуючи енергію. Небезпечний для Циклоп у великих кількостях.',
                area: 'Неактивна лавова зона',
                image: ''
            },
            {
                id: 4,
                name: 'Гіпнотизер',
                description: 'Оманлива поведінка. Заманює персонажа через гіпноз і, коли відстань зведена до мінімуму, атакує. Ви можете відірватися за допомогою кнопки ходьби і миші.',
                area: "Ліс грибів, Печери ламінарії, Зона клубнекуща",
                image: ''
            },
            {
                id: 5,
                name: 'Краб кальмароський',
                description: 'Агресивна поведінка. Завдає шкоди Моль і Екзокостюм. Здатний вивільняти хвилю EMP, яка вимикає всі пристрої та може висмоктувати енергію з транспортних засобів.',
                area: 'Зона кривавих водоростей, Глибини великого рифу',
                image: ''
            },
            {
                id: 6,
                name: 'Левиафан-жнець',
                description: 'Надзвичайно агресивний. Загроза для всієї фауни планети і недбалий гравець. Може знищити костюм КРАБ, Моль і навіть Циклоп хапаючи їх зубами і наростами.',
                area: 'Зона аварії, Дюни, Гори, Зона клубнелуковицы (на кордоні з Мертва зона)',
                image: ''
            },
        ])

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