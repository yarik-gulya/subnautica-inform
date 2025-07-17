<template>
    <div>
        <router-link to="/catalog">Назад до каталогу</router-link>
        <div>
            <h2>Пошук</h2>
            <p>Введіть запит для пошуку:</p>
            <input type="text" v-model="searchQuery" placeholder="Що шукаєте на глибинах?" />
        </div>
        <h2>Флора</h2>
        <InformCard
            v-for="object in filteredObjects"
            :key="object.id"
            :name="object.name"
            :image="object.image"
            :description="object.description"
            :area="object.area"
        />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import InformCard from './InformCard.vue';


export default {
    components: {
        InformCard
    },
    setup() {
        const searchQuery = ref('');

        const objects = ref([
            {
                id: 1,
                name: "Киснева рослина",
                description: "Підводна рослина із біолюмінесцентною бульбашкою — дає близько 30 од. кисню, після активації. Перезарядка ≈40 сек.",
                area: ["Арктичний водоростевий ліс", "Печери Арктичного водоростя", "Підводні лілії", "Вигнуті мости", "Термічні шпилі"],
                image: "https://static.wikia.nocookie.net/subnautica/images/.../Oxygen_Plant.png"
            },
            {
                id: 2,
                name: "Папороть хижаків (Preston's Plant)",
                description: "Наземна рослина з ягодами, вирощується в теплиці Marguerit. Плоди — їжа для Snow Stalker; листя — сировина.",
                area: ["Теплиця Маргеріт (східний Арктичний регіон)"],
                image: "https://static.wikia.nocookie.net/subnautica/images/.../Preston%27s_Plant.png"
            },
            {
                id: 3,
                name: "Кислий гриб",
                description: "Флора-гриб, що при нарізці виділяє кислоту (завдає шкоди). Використовується для створення батарей. Біоріактор +210 енергії.",
                area: ["Зона з аваріями", "Дюни", "Трав'яні плато", "Ліс грибів", "Мілководдя", "Втрачені ріки"],
                image: "https://static.wikia.nocookie.net/subnautica/images/.../Acid_Mushroom.png"
            },
            {
                id: 4,
                name: "Гілка-павутиння (Creepvine)",
                description: "Морська ліана з семенами та зразками. Дає насіння для мастильної олії та кремнієвої гуми. Расте заново після збирання.",
                area: ["Водоростевий ліс"],
                image: "https://static.wikia.nocookie.net/subnautica/images/.../Creepvine.png"
            },
            {
                id: 5,
                name: "Глибокий гриб",
                description: "Гриб із дуже високою кислотністю; використовується для виготовлення соляної кислоти. Біомаса для біореактора.",
                area: ["Крово-червона зона водоростей", "Неактивна зона лави", "Втрачена ріка", "Тунелі краболапів"],
                image: "https://static.wikia.nocookie.net/subnautica/images/.../Deep_Shroom.png"
            }
        ]);
        const filteredObjects = computed(function () {
            return objects.value.filter(function (object) {
                return object.name.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        });
        return {
            searchQuery,
            objects,
            filteredObjects,
        };
    }
}
</script>

<style scoped></style>