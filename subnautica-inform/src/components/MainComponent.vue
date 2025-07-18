<template>
    <div>
      <section>
        <h2>Головна сторінка</h2>
        <p>Ласкаво просимо до Subnautica Inform!</p>
        <p>Тут ви знайдете всю необхідну інформацію про гру Subnautica!</p>
      </section>
      <section>
        <video poster="../images/image_for_trailer.jpg" src="../assets/Subnautica Teaser Trailer.mp4" controls autoplay loop muted></video>
        <p>Дивіться наш трейлер, щоб дізнатися більше про гру!</p>
        <p id="trailer-description">Цей трейлер 2018 року від студії Unknown Worlds Entertainment
           показує: крах корабля 'Аврора', дослідження океану, будівництво
            та технології, небезпеку і таємниці, що ховаються в глибинах.</p>
      </section>
    </div>
</template>

<script>
export default {
  name: 'MainComponent'
}
</script>

<style scoped>
h2 {
  margin-top: 0;
  color: #E0E8F0;
  text-align: center;
  background-color: orangered;
  padding: 20px;
}
p{
  color: #E0E8F0;
  text-align: center;
  margin-bottom: 0;
  padding: 10px;
}
video{
  height: 400px;
  width: auto;
  border-radius: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

#trailer-description {
  margin: 10px 400px; 
  font-size: 16px;
  box-sizing: content-box;
  display: inline-block;
}
</style>