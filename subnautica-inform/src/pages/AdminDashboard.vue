<template>
    <div id="body">
        
        <header>
            <img src="../images/Subnautica_logo.png" alt="Subnautica Logo">
            <nav>
                <ul>
                    <li><router-link to="/admin/main">Головна</router-link></li>
                    <li><router-link to="/admin/search">Пошук</router-link></li>
                    <li><router-link to="/admin/contacts">Контакти</router-link></li>
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
    background: rgba(0, 43, 54, 0.9);
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
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
    color: #E0E8F0;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
}

nav ul li:hover {
    color: #FFA400;
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
    background: linear-gradient(to top, #0f2027 0%, #2c5364 100%);
}
</style>