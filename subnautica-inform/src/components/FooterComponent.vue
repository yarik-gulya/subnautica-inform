<template>
    <footer>
  <div class="container">
    <div class="footer-links">
      <router-link to="about">Про сайт</router-link>
      <router-link to="contact">Контакти</router-link>
      <router-link to="privacy">Політика</router-link>
    </div>
    <p>© 2025 Subnautica-Inform. Усі права захищено.</p>
  </div>
</footer>
</template>

<style scoped>
footer {
  background: rgb(39, 2, 99);
  color: #E0E8F0;
  text-align: center;
  padding: 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.container .footer-links{
    display: flex;  
    justify-content: center;
    gap: 50px;
}

.container .footer-links a{
    color: #E0E8F0;
    text-decoration: none;
    transition: color 0.3s ease;
}
.container .footer-links a:hover {
    color: #FFA400;
}

p {
  margin-top: 30px;
}
</style>