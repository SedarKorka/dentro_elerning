<template>
   <div class="about">



 

    <!--Breadcrumb start-->
      <div class="ed_pagetitle">
      <div class="ed_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="page_title">
                <h2>Educo Student</h2>
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
			<div class="ed_dashboard_tab">
				<div class="tab-content">
					<div class="tab-pane active" id="dashboard">
						<div class="ed_dashboard_tab_info">
						<h1>hello, <span>student</span></h1>
						<h1>welcome to dashboard</h1>
						<p>Hi <strong>Andre House</strong>, here you have to see and update your profile, subscribed courses, activities, notifications and other things. All the above updates can be modified from the left panel provided.</p>
						</div>
					</div>
					<div class="tab-pane" id="courses">
						<div class="ed_dashboard_inner_tab">
							<div role="tabpanel">
								<!-- Nav tabs -->
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active"><a href="#my" aria-controls="my" role="tab" data-toggle="tab">my courses</a></li>
									<li role="presentation"><a href="#result" aria-controls="result" role="tab" data-toggle="tab">result</a></li>
									<li role="presentation"><a href="#status" aria-controls="status" role="tab" data-toggle="tab">status</a></li>
									<li role="presentation"><a href="#instructing" aria-controls="instructing" role="tab" data-toggle="tab">instructing courses</a></li>
								</ul>
					
								<!-- Tab panes -->
								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active" id="my">
									<div class="ed_inner_dashboard_info">
									<h2>you have 4 subscribed courses</h2>
										<div class="row">
											<div class="ed_mostrecomeded_course_slider">
												<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 ed_bottompadder20"
                         v-for="course in courses"
                         v-bind:key="course.id"
                        >
                          <CourseItem :course = "course" />
													
												</div>
                        
											</div>
										</div>
									</div>
									</div>
									<div role="tabpanel" class="tab-pane" id="result">
										<div class="ed_dashboard_inner_tab">
											<h2>result details</h2>
											<p>Nam id ligula tristique, porta dolor ac, pretium leo. Maecenas scelerisque vulputate dapibus. Quisque sodales tincidunt sapien, eu consequat erat tempus et. Nullam ipsum est, interdum quis posuere sed, imperdiet quis nisi. Proin quis justo est. Vestibulum imperdiet leo sit amet tortor suscipit, id cursus ligula pharetra. Uctus ac eros a, faucibus iaculis quam. Nam non iaculis justo. Donec maximus varius velit.</p>
										</div>
									</div>
									<div role="tabpanel" class="tab-pane" id="status">
										<div class="ed_dashboard_inner_tab">
											<h2>some recent status about this course</h2>
											<p>Sed ultricies posuere magna elementum laoreet. Suspendisse elementum sagittis nisl, id pellentesque purus auctor finibus. Donec elementum quam est, a condimentum diam tempor ac. Sed quis magna lobortis, pulvinar est at, commodo mauris. Nunc in mollis erat. Integer aliquet orci non auctor pretium. Pellentesque eu nisl augue. Curabitur vitae est ut sem luctus tristique. Suspendisse euismod sapien facilisis tellus aliquam pellentesque.</p>
										</div>
									</div>
									<div role="tabpanel" class="tab-pane" id="instructing">
										<div class="ed_dashboard_inner_tab">
											<h2>you have not created any course</h2>
											<p>Sed ultricies posuere magna elementum laoreet. Suspendisse elementum sagittis nisl, id pellentesque purus auctor finibus. Donec elementum quam est, a condimentum diam tempor ac. Sed quis magna lobortis, pulvinar est at, commodo mauris. Nunc in mollis erat. Integer aliquet orci non auctor pretium. Pellentesque eu nisl augue. Curabitur vitae est ut sem luctus tristique. Suspendisse euismod sapien facilisis tellus aliquam pellentesque.</p>
										</div>
									</div>
								</div>
					
							</div><!--tab End-->
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
import CourseItem from '@/components/CourseItem.vue'

export default {
  data(){
      return {
        courses:[]
      }
    },
    components:{
      CourseItem
    },
    mounted() {

     axios
      .get('activities/get_active_courses/')
      .then(response=>{
       console.log(response.data)
       this.courses = response.data

        
      })


      
     document.title = 'My Account | macibas'
  },
    
    methods: {
        async logout() {
            console.log('logout')

            await axios
              .post('token/logout/')
              .then(() => {
                console.log('Logged out')
              })
              .catch(error => {
                console.log(error)
              })

            axios.defaults.headers.common['Authorization'] = ""

            localStorage.removeItem('token')

            this.$store.commit('removeToken')

            this.$router.push('/')
        }
         
    }
}
</script>