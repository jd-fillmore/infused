<template>
  <!-- <footer>
    <div class="container">
		<div class="row">
			<div class="col-lg-4">
				<p class="title">About</p>
				<p>Infused Agency is a web design, development and SEO focusing on contractors, landscapers, home renovation, remodeling, architecture, design and other construction businesses. Working alongside our clients, we lead web design and SEO strategy projects from concept to launch. We make sure that the websites and online strategies work together to create meaningful experiences.</p>
			</div>
			<div class="col-lg-4">
				<p class="title">Office</p>
				<p>73 Alexandra Blvd,
				<br>St. Catharines, ON
				<br>L2P 1K2</p>
				<br>
				<iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d93142.7550670103!2d-79.27766084445031!3d43.152595639854674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!1s0x89d3507111975161%3A0x18a1198be6280a70!3m2!1d43.152617!2d-79.207621!5e0!3m2!1sen!2sca!4v1518328754191" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="col-lg-4">
				<p class="title">Contact</p>
				<i class="fas fa-phone"></i><a href="tel:(905) 933 - 3115">(905) 933 - 3115</a>
				<br>
				<i class="far fa-envelope"></i><a href="mailto:hello@infused.agency">hello@infused.agency</a>
				<br>
				<a href="https://www.facebook.com/Infused-Agency-332480650571551/" target="_blank"></a><i class="fas facebook"></i>
				<a href="https://www.instagram.com/infusedagency/" target="_blank"></a><i class="fas instagram"></i>

			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<p>&copy; 2018 Infused. All Rights Reserved.</p>
			</div>
		</div>
	</div>
  </footer> -->
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "../scss/_base.scss";
footer {
  background: $light-grey;
  padding-top: 150px;
  padding-bottom: 150px;
  p {
    &.title {
      font-weight: bold;
    }
  }
}

</style>
