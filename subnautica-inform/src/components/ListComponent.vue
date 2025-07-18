<template>
    <div id="list-component">
        <h2>Каталог</h2>
        <p>Що ви хочете знайти?</p>
        <div class="catalog-item">
            <router-link to="/catalog/flora" active-class="active-link">
                <img src="" alt="">
                <h3>Флора</h3>
                <p>Тут ви можете знайти інформацію про рослини.</p>
            </router-link>
        </div>
        <div class="catalog-item">
            <router-link to="/catalog/fauna" active-class="active-link">
                <img src="" alt="">
                <h3>Фауна</h3>
                <p>Тут інформація про тварин.</p>
            </router-link>
        </div>
        <div class="catalog-item">
            <router-link to="/catalog/materials" active-class="active-link">
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
#list-component {
    padding-bottom: 20px;
    text-align: center;
    background: linear-gradient(to top, #232946 0%, #395886 100%);
    color: #E0E8F0;
}

.catalog-item {
    margin: 20px;
    border-radius: 20px;
}

h2 {
    margin-top: 0;
    color: #E0E8F0;
    text-align: center;
    background-color: orangered;
    padding: 20px;
}

p {
    font-size: 18px;
    margin-bottom: 30px;
}

a {
    display: block;
    background: rgba(0, 47, 59, 0.8);
    border-radius: 12px;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s, box-shadow 0.3s;
}

a:hover {
    color: #FFD166;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

h3 {
    font-size: 24px;
    margin: 10px 0;
    color: #00BFCB;
}

.active-link {
    border: 2px solid #FFA400;
    background: rgba(0, 79, 90, 0.9);
}
</style>