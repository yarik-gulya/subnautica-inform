<template>
    <div class="cards-wrapper">
        <div class="info-card">
            <img :src="image" :alt="alt">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <p>{{ area }}</p>
        </div>
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
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px;
}

.info-card {
  background: rgba(24, 34, 56, 0.95);
  width: 300px;
  height: 400px;
  border-radius: 12px;
  padding: 20px;
  color: #AEEFFF;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.info-card img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.info-card h2 {
  font-size: 20px;
  color: #00BFCB;
  margin-bottom: 8px;
}

.info-card p {
  font-size: 14px;
  color: #E0E8F0;
  margin-bottom: 6px;
}
</style>