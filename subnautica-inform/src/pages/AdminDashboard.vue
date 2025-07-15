<template>
    <div>
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
        <main style="margin-top: 80px;">
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

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 43, 54, 0.9);
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 98%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

header img {
    height: 50px;
}

nav ul {
    list-style: none;
    display: flex;
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
</style>