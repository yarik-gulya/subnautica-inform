<template>
    <div class="contact-section">
        <h2>Контактна інформація</h2>
        <p>Якщо у вас є запитання, будь ласка, напишіть нам на електронну пошту: info@subnautica-inform.com</p>
        <p>Ми завжди раді допомогти!</p>
        <p>Також ви можете зв'язатися з нами через соціальні мережі</p>
        <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
        </ul>
        <h3>Приєднуйтесь до нашої спільноти</h3>
        <ul>
            <li><a href="">Discord</a></li>
            <li><a href="">Reddit</a></li>
            <li><a href="">GitHub</a></li>
        </ul>
    </div>
</template>

<script>

</script>

<style>
.contact-section {
    background: linear-gradient(to top, #232946 0%, #395886 100%);
    color: #E0E8F0;
    text-align: center;
    padding-bottom: 40px;
}

.contact-section h2 {
    margin-top: 0;
    background-color: orangered;
    padding: 20px;
    color: #E0E8F0;
}

.contact-section p {
    font-size: 18px;
    margin-bottom: 20px;
}

.contact-section h3 {
    font-size: 24px;
    margin: 30px;
    color: #00BFCB;
}

.contact-section ul {
    list-style: none;
    padding: 0;
    margin: 0 auto 30px;
}

.contact-section li {
    margin-bottom: 10px;
    margin: 20px 0;
}

.contact-section a {
    display: inline-block;
    background: rgba(0, 47, 59, 0.8);
    border-radius: 12px;
    padding: 12px 24px;
    color: inherit;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.contact-section a:hover {
    color: #FFD166;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}
</style>