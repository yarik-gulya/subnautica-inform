<template>
    <div>
        <img :src="image" alt="">
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
        area: String,
        plants: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
</style>