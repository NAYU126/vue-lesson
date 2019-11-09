<template>
  <div>
    <div class="contents">
      <section>
        <h1>Excrcises1</h1>

        <section class="sec">
          <h2>Q1. v-modelをつかってデータバインディングさせてください。</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>Q2. ボタンを押すたびにカウントアップさせてください。<br />3未満なら「3より小さい」、3〜5であれば「3より大きく5より小さい」、6以上であれば「大きすぎます」という文言を表示させてください。</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>Q3. axios、v-forをつかってJSONデータを取得し、テーブルに表示させてください。</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->
            <!--  ① axiosが使えるようにscript内のaxiosのコメントアウトを外す。
                  ② created内にaxiosを書いてください。
                  ③ staticフォルダーのtodo.jsonからデータを取得してください。
            -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>Q4. リストから○円以下の商品検索して○件のみ表示させる機能を実装してください。</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->
            <!-- staticフォルダーのlist.jsonからデータを取得してください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'answer',
  data () {
    return {
    }
  },
  // created () {

  // },
  methods: {
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
h1 {
  margin-bottom: 30px;
  padding: 10px 0;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
h2 {
  font-size: 18px;
  text-align: left;
}
.search {
  text-align: left;
  margin-bottom: 10px;
}
.search input {
  padding: 6px 12px;
  font-size: 14px;
}
.contents {
  width: 800px;
  margin: 0 auto;
}
.sec {
  margin-bottom: 30px;
}
.sec__contents {
  text-align: left;
}
table {
  width: 100%;
  border: 1px solid #ddd;
  border-spacing: 0;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  vertical-align: top;
  border: 1px solid #ddd;
  border-bottom-width: 2px;
}
thead:first-child > tr:first-child > th,
thead:first-child > tr:first-child > td {
  border-top: 0;
}
thead > tr > th:first-child,
thead > tr > td:first-child {
  border-left: 0;
}
thead > tr > th:last-child,
thead > tr > td:last-child {
  border-right: 0;
}
tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
thead > th:last-child {
  border-right: 0;
}
tbody > tr > td {
  border-left: 0;
  border-bottom: 0;
}
.red {
  color: red;
}
.link-list {
  display: flex;
  justify-content: space-between
}

</style>
