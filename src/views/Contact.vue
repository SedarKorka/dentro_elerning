<template>
  <div class="about">















    <!--Breadcrumb start-->
    <div class="ed_pagetitle">
        <div class="ed_img_overlay"></div>
        <div class="container">
            <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-6">
                <div class="page_title">
                <h2>Contact Us</h2>
                </div>
            </div>
            <div class="col-lg-6 col-md-8 col-sm-6">
                <ul class="breadcrumb">
 


              <li><router-link to="/">Home</router-link></li>
              <li><i class="fa fa-angle-double-left" aria-hidden="true"></i></li>
              <li><router-link to="/contact-us">Contact us</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  






    <!--Section fourteen Contact form start-->
<div class="ed_transprentbg ed_toppadder80 ed_bottompadder80">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ed_heading_top">
					<h3>Send us a message</h3>
				</div>
			</div>
			<div class="ed_contact_form ed_toppadder60">
				<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="form-group">
					<input type="text" id="uname" class="form-control"  placeholder="Your Name">
				</div>
				<div class="form-group">
					<input type="email" id="umail" class="form-control"  placeholder="Your Email">
				</div>
				<div class="form-group">
					<input type="text" id="sub" class="form-control"  placeholder="Subject">
				</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
				<div class="form-group">
					<textarea id="msg" class="form-control" rows="7" placeholder="Message"></textarea>
				</div>
				<button id="ed_submit" class="btn ed_btn ed_orange pull-right">send</button>
				<p id="err"></p>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Section fourteen Contact form start-->
<!--Section fifteen Contact form start-->
<div class="ed_event_single_contact_address ed_toppadder70 ed_bottompadder70">
	<div class="container">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ed_heading_top ed_bottompadder70">
					<h3>Contact & Find</h3>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="row">
					<div class="ed_event_single_address_info ed_toppadder50 ed_bottompadder50">
						<h4 class="ed_bottompadder30">contact info</h4>
						<p class="ed_bottompadder40 ed_toppadder10">You can always reach us via following contact details. We will give our best to reach you as possible.</p>
						<p>Phone: <span>1-220-090-080</span></p>
						<p>Email: <a href="#">info@edutionschool.gov.co.uk</a></p>
						<p>Website: <a href="#">http://www.edutionschool.gov.co.uk</a></p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="row">
					<div class="ed_event_single_address_map">
						<div id="map"></div>
					</div>
				</div>
			</div>
	</div>
</div>
<!--Section fifteen Contact form start-->



























    <!--Breadcrumb end-->
    








</div>
</template>

<script> 
export default ({
  mounted() {
     document.title = 'Contact | maxibas'
  },
})
</script>
