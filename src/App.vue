<script setup>
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="myNav">
      <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
      <b-collapse id="navbar-nav" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item>
            <b-link :to="{ name: 'inicio'}" class="nav-link-custom">Inicio</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link :to="{ name: 'main'}" class="nav-link-custom">Main</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link :to="{ name: 'tercero'}" class="nav-link-custom">Tercero</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <b-sidebar id="sidebar" b-sidebar shadow visible no-close-on-route-change no-header-close>
            <div class="px-3 py-2">
              <b-nav vertical class="pt-5">
                <b-navbar-nav class="ml-auto">
                  <b-nav-item>
                    <b-link :to="{ name: 'inicio'}" class="nav-link-custom">Inicio</b-link>
                  </b-nav-item>
                  <b-nav-item>
                    <b-link :to="{ name: 'main'}" class="nav-link-custom">Main</b-link>
                  </b-nav-item>
                  <b-nav-item>
                    <b-link :to="{ name:'tercero'}" class="nav-link-custom">Tercero</b-link>
                  </b-nav-item>
                  <b-nav-item>
                    <b-link :to="{ name:'formulario'}" class="nav-link-custom">Formulario</b-link>
                  </b-nav-item>
                </b-navbar-nav>
              </b-nav>
            </div>
          </b-sidebar>
        </b-col>

        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.myNav {
  background-color: rgb(white, white);
  font-family: Arial, Helvetica, sans-serif;
  border-color: rgb(2, 3, 78);
}

.nav-link-custom {
  color: #5084E6;
}

.nav-link-custom:hover {
  color: #f8f9fa;
}
</style>
