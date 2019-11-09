<template lang="html">
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__list">
        <router-link to="lesson1">Lesson1</router-link>
        <router-link to="lesson2">Lesson2</router-link>
      </div>
      <div class="footer__list">
        <router-link to="exercises1">Exercises1</router-link>
        <router-link to="exercises2">Exercises2</router-link>
      </div>
      <div class="footer__list">
        <router-link to="answer1">Answer1</router-link>
        <router-link to="answer2">Answer2</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style>
.footer {
  padding: 30px 0;
  border-top: 1px solid #dedede;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
}
.footer__list {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.footer__list a {
  margin-bottom: 10px;
}
</style>
