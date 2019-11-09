import Vue from 'vue'
import Router from 'vue-router'

import Top from '../pages/Top'
import Lesson1 from '../pages/Lesson1'
import Lesson2 from '../pages/Lesson2'
import Exercises1 from '../pages/Exercises1'
import Exercises2 from '../pages/Exercises2'
import Answer1 from '../pages/Answer1'
import Answer2 from '../pages/Answer2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/lesson1',
      name: 'lesson1',
      component: Lesson1
    },
    {
      path: '/Lesson2',
      name: 'lesson2',
      component: Lesson2
    },
    {
      path: '/Exercises1',
      name: 'exercises1',
      component: Exercises1
    },
    {
      path: '/Exercises2',
      name: 'exercises2',
      component: Exercises2
    },
    {
      path: '/Answer1',
      name: 'answer1',
      component: Answer1
    },
    {
      path: '/Answer2',
      name: 'answer2',
      component: Answer2
    }
  ]
})
