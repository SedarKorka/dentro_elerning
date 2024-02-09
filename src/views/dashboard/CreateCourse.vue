<template>
   <div class="about">















    <!--Breadcrumb start-->
      <div class="ed_pagetitle">
      <div class="ed_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="page_title">
                <h2>Create course</h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-8 col-sm-6">
              <ul class="breadcrumb">
                <li><a href="index.html">home</a></li>
                <li><i class="fa fa-chevron-left"></i></li>
                <li><a href="dashboard.html">Educo Student</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <!--Breadcrumb end-->
    <!--single student detail start-->
    <div class="ed_dashboard_wrapper">
        <div class="container">
            <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div class="ed_sidebar_wrapper">
                            <div class="ed_profile_img">
                            <img src="http://placehold.it/263X263" alt="Dashboard Image" />
                            </div>
                            <h3>andre house</h3>
                            <div className="ed_tabs_left">
                                <ul class="nav nav-tabs">
                                    <li> <router-link to="/dashboard/my-account" class="button is-info">dashboard</router-link></li>
                                    <li><router-link to="/dashboard/my-list-course">My Course</router-link></li>
                                    <li><router-link to="/dashboard/add-new-course">Create New Courset</router-link></li>
                                    <li><a href="#" @click="logout()">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ed_heading_top">
                                    <h3>Create course</h3>
                                </div>
                            </div>
                            <div class="ed_contact_form ed_toppadder60">
                                <div class="row ml-5 mr-5 p-5">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" id="uname" class="form-control"  v-model="form.title" placeholder="Title">
                                        </div>
                                        <div class="form-group">
                                        <textarea id="msg" class="form-control" rows="4" v-model="form.short_description" placeholder="Short description"></textarea>
                                        </div>
                                        <div class="select is-multiple">
                                            <select  v-model="form.categories" multiple size="10">
                                                <option
                                                v-for="category in categories"
                                                v-bind:key="category.id"
                                                v-bind:value="category.id"
                                                >
                                                {{ category.title }}

                                                </option>


                                            </select>
                                        </div>
                                        <div class="form-group">
                                        <textarea id="msg" class="form-control" rows="7" v-model="form.long_description" placeholder="Long description"></textarea>
                                        </div>
                                            <button id="ed_submit" class="btn ed_btn ed_orange pull-right" @click="submitForm('draft')">Save as draft</button>
                                            <button id="ed_submit" class="btn ed_btn ed_orange pull-right" @click="submitForm('review')">Submit for review</button>
                                        <p id="err"></p>
                                    </div> 
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="ed_time_executor ed_toppadder40">
                                            <ul>
                                                <li><a href="course_lesson.html">Lessons</a> <span>Locked</span></li>

                                                <li
                                                    v-for="(lesson, index) in form.lessons"
                                                    v-bind:key="index"
                                                >
                                                <div class="form-group">
                                                        <input type="text" 
                                                        id="uname" class="form-control"  
                                                        v-model="lesson.title" 
                                                        placeholder="Title"  
                                                        :name="`form.lessons[${index}][title]`">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Short description</label>
                                                        <textarea class="textarea" v-model="lesson.short_description" :name="`form.lessons[${index}][short_description]`"></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Long description</label>
                                                        <textarea class="textarea" v-model="lesson.long_description" :name="`form.lessons[${index}][long_description]`"></textarea>
                                                    </div>
                                                </li>
                                                <hr/>
                                                <li><button class="button is-primary" @click="addLesson()">Add Lesson</button></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <!--single student detail end-->


  </div>
</template>

<script> 
import axios from 'axios'
export default({
    data() {
        return{
            form:{
                title:'',
                short_description:'',
                long_description:'',
                categories:[],
                status:'',
                lessons:[]

            }, 
            categories:[],
        }

        },
        mounted(){
            this.getCategories()

        },
        methods:{
            getCategories(){
                console.log('Categories')
                axios
                    .get('courses/get_categories/')
                    .then(response=>{
                        console.log(response.data)
                        this.categories = response.data
                    })

            },
            submitForm(status){
                console.log('Submit form')
                console.log(this.form)

                this.form.status = status

                axios
                   .post('courses/create/', this.form)
                   .then(response => {
                        console.log(response.data)
                   })
                   .catch(error => {
                        console.log('error:', error)
                   })
            },
            addLesson() {
                console.log('addLesson')
                    this.form.lessons.push({
                        title: '',
                        short_description: '',
                        long_description: ''
                    })
                }
        }
      
})
</script>
