<template>
        <div class="info-card">
            <img :src="image" :alt="alt">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <p>{{ area }}</p>
        </div>
</template>

<script>
export default {
    props: {
        name: String,
        image: String,
        description: String,
        area: Array,
        alt: {
            type: String,
            default: 'Informative image'
        }
    }
}
</script>

<style scoped>
.info-card {
    background: rgba(24, 34, 56, 0.95);
    border-radius: 12px;
    padding: 30px 20px;
    max-width: 400px;
    margin: 40px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    color: #AEEFFF;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
}

.info-card img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.info-card h2 {
    font-size: 28px;
    color: #00BFCB;
    margin-bottom: 10px;
}

.info-card p {
    font-size: 16px;
    margin-bottom: 8px;
    color: #E0E8F0;
}
</style>