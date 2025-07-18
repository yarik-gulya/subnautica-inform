<!-- Додано клас для body для кращого фону -->
<template>
    <div id="body">
        <header>
            <img src="../images/Subnautica_logo.png" alt="Subnautica Logo">
            <nav>
                <ul>
                    <li><router-link to="/main">Головна</router-link></li>
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><router-link to="/contacts">Контакти</router-link></li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard',
    components: {
        
    },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(24, 34, 56, 0.95);
    padding: 20px;
    box-shadow: 0 2px 12px rgba(20, 30, 60, 0.5);
}

header img {
    height: 50px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    gap: 40px;
    margin: 0;
    padding: 0;
}

nav ul li {
    color: #AEEFFF;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
}

nav ul li:hover {
    color: #FFD166;
}

nav ul li a {
    text-decoration: none;
    color: inherit;
}

#body{
    margin: 0;
    padding: 0;
}

main{
    background-size: cover;
    background: linear-gradient(to top, #232946 0%, #395886 100%);
}
</style>