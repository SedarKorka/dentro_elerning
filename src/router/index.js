import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Author from '../views/Author.vue'

import MyAccount from '../views/dashboard/MyAccount.vue'
import CreateCourse from '../views/dashboard/CreateCourse.vue'
import MyCourse from '../views/dashboard/MyCourse.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
   },
   {
     path: '/sign-up',
     name: 'SignUp',
     component: SignUp
   },
   {
     path: '/log-in',
     name: 'LogIn',
     component: LogIn
   },
   {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path:'/instructors/:id',
    name:'Author',
    component: Author
  },
  {
    path: '/courses/:slug',
    name: 'Course',
    component: Course
  },
  {
    path:'/contact-us',
    name:'Contact',
    component: Contact
  }
  ,
   {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/dashboard/add-new-course',
    name: 'CreateCourse',
    component: CreateCourse
  },
  {
    path: '/dashboard/my-list-course',
    name: 'MyCourse',
    component: MyCourse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
