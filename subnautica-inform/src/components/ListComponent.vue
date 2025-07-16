<template>
    <div>
        <h2>Каталог</h2>
        <p>Що ви хочете знайти?</p>
        <div>
            <router-link to="/catalog/flora" active-class="active-link">
                <img src="" alt="">
                <h3>Флора</h3>
                <p>Тут ви можете знайти інформацію про рослини.</p>
            </router-link>
        </div>
        <div>
            <router-link to="">
                <img src="" alt="">
                <h3>Фауна</h3>
                <p>Тут інформація про тварин.</p>
            </router-link>
        </div>
        <div>
            <router-link to="">
                <img src="" alt="">
                <h3>Ресурси</h3>
                <p>А тут - інформація про ресурси.</p>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    components: {
        
    },
}
</script>

<style scoped>

</style>