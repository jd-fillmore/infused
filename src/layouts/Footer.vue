<template>
	<footer>
    <div class="container">
		<div class="row">
			<div class="col-lg-4">
				<p class="title">About</p>
				<p>Infused Agency is a Niagara web design, website development, SEO and digital strategy company. We help local and non-local businesses build their credibility online, as well as help bring in more sales.</p>
				<p class="title">Areas Served</p>
				<p><g-link to="/niagara-falls-web-design">Niagara Falls</g-link>, St. Catharines, <g-link to="/welland-web-design">Welland</g-link>, Thorold, Port Colborne, <g-link to="/fort-erie-web-design">Fort Erie</g-link>, <g-link to="/grimsby-web-design">Grimsby</g-link>, Niagara-on-the-Lake, Pelham, Wainfleet, Vineland, <g-link to="/beamsville-web-design">Beamsville</g-link>.</p>
			</div>
			<div class="col-lg-4">
				<p class="title">Office</p>
				<p>73 Alexandra Blvd,
				<br>St. Catharines, ON
				<br>L2P 1K2</p>
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
