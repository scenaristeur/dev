<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Dev</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown text="Lang" right>
          <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item> -->
          <b-dropdown-item @click="localeChange('en')">EN</b-dropdown-item>
          <b-dropdown-item @click="localeChange('fr')">FR</b-dropdown-item>
          <b-dropdown-item @click="localeChange('ja')">JA</b-dropdown-item>
          <b-dropdown-item @click="localeChange('de')">DE</b-dropdown-item>
          <b-dropdown-item @click="localeChange('es')">ES</b-dropdown-item>
          <b-dropdown-item @click="localeChange('ru')">RU</b-dropdown-item>
          <b-dropdown-item to="/translation">Translate to your language</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <small><i>v0.0.1c</i></small>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
    localeChange(loc){
      this.$i18n.locale = loc
    },
  }
}
</script>

<style>

</style>
