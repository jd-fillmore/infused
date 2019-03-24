<template>
	<footer>
    <div class="container">
		<div class="row">
			<div class="col-lg-4">
				<p class="title">About</p>
				<p>Infused Agency is a web design, development and SEO focusing on contractors, landscapers, home renovation, remodeling, architecture, design and other construction businesses.</p>
			</div>
			<div class="col-lg-4">
				<p class="title">Office</p>
				<p>73 Alexandra Blvd,
				<br>St. Catharines, ON
				<br>L2P 1K2</p>
				<br>
				<iframe aria-label="map" src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d93142.7550670103!2d-79.27766084445031!3d43.152595639854674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!1s0x89d3507111975161%3A0x18a1198be6280a70!3m2!1d43.152617!2d-79.207621!5e0!3m2!1sen!2sca!4v1518328754191" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="col-lg-4">
				<p class="title">Contact</p>
				<i class="fas fa-phone"></i><a href="tel:(905) 933 - 3115">(905) 933 - 3115</a>
				<br>
				<i class="far fa-envelope"></i><a href="mailto:hello@infused.agency">hello@infused.agency</a>
			</div>
		</div>
		<div class="row copy">
			<div class="col-lg-12">
				<p>&copy; 2019 Infused. All Rights Reserved.</p>
			</div>
		</div>
	</div>
  </footer>
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
  padding-top: 100px;
	padding-bottom: 100px;
	@include bp-tablet {
		padding-top: 40px;
		padding-bottom: 40px;
	}
  p {
    &.title {
      font-weight: bold;
    }
	}
	.copy {
		@include bp-tablet {
			margin-top: 20px;
		}
	}
	a {
		color: $dark-blue;
	}
}

</style>
