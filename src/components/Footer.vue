<template>
    <!--Newsletter Section six start-->
    <div>
<div class="ed_newsletter_section">
<div class="ed_img_overlay"></div>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12">
				<div class="row">
					<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
						<div class="ed_newsletter_section_heading">
							<h4>Let us inform you about everything important directly.</h4>
						</div>
					</div>
					<div class="col-lg-5 col-md-5 col-sm-6 col-xs-6 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-3">
						<div class="row">
							<div class="ed_newsletter_section_form">
								<h5 class="text-center is-danger"
                                                    v-for="error in errors"
                                                    v-bind:key="error"
                                                >
                                                    {{ error }}
                                 </h5>
								<form class="form" v-on:submit.prevent="submitNewletter()">
									<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
										<input class="form-control" type="text" placeholder="Newsletter Email" v-model="newletter.email" />
									</div>
									<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
										<button class="btn ed_btn ed_green">confirm</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
	</div>
</div>
<!--Newsletter Section six end-->
<!--Footer Top section start-->
<div class="ed_footer_wrapper">
	<div class="ed_footer_top">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="widget text-widget">
						<p><a href="index.html"><img src="images/footer/F_Logo.png" alt="Footer Logo" /></a></p>
						<p>Edution is an outstanding PSD template targeting educational institutions, helping them establish strong identity on the internet without any real developing knowledge.
						</p>
						<div class="ed_sociallink">
						<ul>
							<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
							<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
							<li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
						</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="widget text-widget">
						<h4 class="widget-title">find us</h4>
						<p><i class="fa fa-safari"></i>Wimbledon Street 42a, 45290 Wimbledon, <br/>United Kingdom</p>
						<p><i class="fa fa-envelope-o"></i><a href="#">info@edutionschool.gov.co.uk</a> <a href="#">public@edutionschool.gov.co.uk</a></p>
						<p><i class="fa fa-phone"></i> 1-220-090-080</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<div class="widget text-widget">
						<h4 class="widget-title">social media</h4>
						<p><strong>@education </strong> How many students do you learn monthly? Open <a href=""> http://t.co/KFDdzLSD9</a><br/>2 days ago</p>
						
						<p><strong>@educationUK </strong> Web Design that works. Have a look at this masterpiece. <a href="">http://t.co/9j8DH93zrO</a><br/>5 days ago</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Footer Top section end-->
<!--Footer Bottom section start-->
<div class="ed_footer_bottom">
	<div class="container">
		<div class="col-lg-12 col-md-12 col-sm-12">
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div class="ed_copy_right">
					<p>&copy; Copyright 2017, All Rights Reserved, <a href="#">KidsCamp</a></p>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div class="ed_footer_menu">
						<ul>
							<li><a href="index.html">home</a></li>
							<li><a href="private_policy.html">private policy</a></li>
							<li><a href="about.html">about</a></li>
							<li><a href="contact.html">contact us</a></li>
						</ul>
				</div>
			</div>
		</div>
		</div>
	</div>
</div>
<!--Footer Bottom section end-->
</div>

</template>
<script>
 
import axios from 'axios'

export default{
	data(){
		return{
			newletter:
			{
				email:''
			},
			errors:[]
		}
	},
	methods:{
		submitNewletter(){
			this.errors=[]

			if(this.newletter.email === ''){
                    this.errors.push('The email must be filled out')
                }

            if(!this.errors.length){
                    
                    axios
                        .post(`activities/add_new-letters/`,this.newletter )
                        .then(response => {
                            this.newletter.email = '' 
                        
                            this.$emit('submitNewletter',response.data)
                            console.log("Add successfully")

                            
                        })
                        .catch(error =>{
                            console.log(error)
                            console.log("not Add successfully")
                            
                        })
                }
                
		}
	}
}


</script>