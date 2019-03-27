<template>
  <div class="layout">
    <div>
      <b-navbar class="fixed-top" toggleable="lg" type="light">
        <b-navbar-brand><g-link class="nav__link navbar-brand" to="/"><g-image alt="infused agency" src="~/img/logo.jpg" class="img-fluid" /></g-link></b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/work"><g-link class="nav__link" to="/work">Work</g-link></b-nav-item>
            <b-nav-item to="/web-design"><g-link class="nav__link" to="/web-design">Web Design</g-link></b-nav-item>
            <b-nav-item to="/seo"><g-link class="nav__link" to="/seo">SEO</g-link></b-nav-item>
            <b-nav-item to="/about"><g-link class="nav__link" to="/about">About</g-link></b-nav-item>
            <b-nav-item to="/blog"><g-link class="nav__link" to="/blog">Blog</g-link></b-nav-item>
            <b-nav-item to="/contact"><g-link class="nav__link" to="/contact">Contact</g-link></b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
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
.navbar-toggler {
  border: none;
}
.navbar {
  background: $white;
  opacity: .95;
  padding-bottom: 0px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
  @include bp-tablet-sm {
    padding: .5rem 1rem;
  }
  .nav__link, .navbar-brand {
    color: $dark-grey !important;
    font-size: 16px;
    &:hover, &:focus {
      text-decoration: none;
    }
  }
  .nav__link {
    padding-right: 20px !important;
    padding-left: 20px !important;
    &:hover, &:focus {
      color: $primary !important;
    }
  }
  .navbar-brand {
    margin-top: -5px;
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
    @include bp-tablet {
      border-bottom: none !important;
    }
  }
}
</style>