<template>
    <div>
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

<style>
</style>