<template>
    <div>
        <h2>Флора</h2>
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
import InformCard from './InformCard.vue';


export default {
    components: {
        InformCard,
        SearchComponent
    },
    setup() {
        const objects = ref([
            {
                id: 1,
                name: "Киснева рослина",
                description: "Підводна рослина із біолюмінесцентною бульбашкою — дає близько 30 од. кисню, після активації. Перезарядка ≈40 сек.",
                area: ["Арктичний водоростевий ліс", "Печери Арктичного водоростя", "Підводні лілії", "Вигнуті мости", "Термічні шпилі"],
                image: ""
            },
            {
                id: 2,
                name: "Папороть хижаків (Preston's Plant)",
                description: "Наземна рослина з ягодами, вирощується в теплиці Marguerit. Плоди — їжа для Snow Stalker; листя — сировина.",
                area: ["Теплиця Маргеріт (східний Арктичний регіон)"],
                image: ""
            },
            {
                id: 3,
                name: "Кислий гриб",
                description: "Флора-гриб, що при нарізці виділяє кислоту (завдає шкоди). Використовується для створення батарей. Біоріактор +210 енергії.",
                area: ["Зона з аваріями", "Дюни", "Трав'яні плато", "Ліс грибів", "Мілководдя", "Втрачені ріки"],
                image: ""
            },
            {
                id: 4,
                name: "Водорость (Creepvine)",
                description: "Морська ліана з семенами та зразками. Дає насіння для мастильної олії та гуми. Расте заново після збирання.",
                area: ["Водоростевий ліс"],
                image: ""
            },
            {
                id: 5,
                name: "Глибокий гриб",
                description: "Гриб із дуже високою кислотністю; використовується для виготовлення соляної кислоти. Біомаса для біореактора.",
                area: ["Крово-червона зона водоростей", "Неактивна зона лави", "Втрачена ріка", "Тунелі краболапів"],
                image: ""
            }
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

<style scoped></style>