<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <g-link class="nav__link navbar-brand" to="/"><g-image alt="infused agency" src="~/img/logo.jpg" class="img-fluid" /></g-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/work">Work</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/web-design">Web Design</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/seo">SEO</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/about">About</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/about">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav__link nav-link" to="/contact">Contact</g-link>
          </li>
        </ul>
      </div>
    </nav>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped lang="scss">
@import "../scss/_base.scss";
.navbar {
  background: $white;
  opacity: .95;
  padding-bottom: 0px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
  @include bp-tablet-sm {
    padding: .5rem 1rem;
  }
  .nav-link, .navbar-brand {
    color: $dark-grey !important;
    font-size: 16px;
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
  .navbar-brand {
    margin-top: -10px;
    @include bp-tablet-sm {
      margin-top: 0px;
      padding-left: 0px !important;
    }
  }
  .nav-link {
    border-bottom: $white solid 3px;
    padding-bottom: 20px;
    &:hover, &:focus {
      color: $primary !important;
      text-decoration: none;
      border-bottom: $primary solid 3px;
      padding-bottom: 20px;
    }
  }
  .navbar-brand {
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>