<template>
  <div>
    <div class="contents">
      <section>
        <h1>Lesson2</h1>
        <section class="sec">
          <h2>1. コンポーネントでUI部品を作る</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>2. propsとは</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>3. Vuexとは</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section class="sec">
          <h2>4. Vue Routerとは</h2>
          <div class="sec__contents">
            <!-- ここにかいてください。 -->

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
  name: 'lesson1',
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'りんご',
          price: '100'
        },
        {
          id: 2,
          name: 'いちご',
          price: '200'
        },
        {
          id: 3,
          name: 'もも',
          price: '500'
        }
      ]
    }
  },
  created () {
    // ここにかいてください。

    // ここにかいてください。
  },
  methods: {
    // ここにかいてください。

    // ここにかいてください。
  },
  computed: {
    // ここにかいてください。

    // ここにかいてください。
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
.search {
  text-align: left;
  margin-bottom: 10px;
}
.search input {
  padding: 6px 12px;
  font-size: 14px;
}
.red {
  color: red;
}
.link {
  text-align: right;
}
</style>
