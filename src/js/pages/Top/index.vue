<template>
  <div class="category">
    <ul class="categoryList">
      <li>
        <router-link to="lesson1">Lesson1</router-link>
      </li>
      <li>
        <router-link to="lesson2">Lesson2</router-link>
      </li>
    </ul>
    <ul class="categoryList">
      <li>
        <router-link to="exercises1">Exercises1</router-link>
      </li>
      <li>
        <router-link to="exercises2">Exercises2</router-link>
      </li>
    </ul>
    <ul class="categoryList">
      <li>
        <router-link to="answer1">Answer1</router-link>
      </li>
      <li>
        <router-link to="answer2">Answer2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style>
.category {
  display: flex;
}
.categoryList {
  width: 33.33333%;
  margin: 0 2% 0 0;
  padding: 0;
  list-style-type: none;
}
.categoryList li {
  margin-bottom: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 8px gray;
}
.categoryList li a {
  width: 100%;
  display: block;
  padding: 10px;
  color: #000;
  text-decoration: none;
  box-sizing: border-box;
}
.categoryList li a:hover {
  opacity: .6;
}
</style>
