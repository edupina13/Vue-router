<template>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <p>Vuelos Disponibles</p>
      
  
      <!-- <b-link :to="{name:'inicio'}">Siguiente</b-link> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
        {
            text: "Inicio",
            href: "#",
            to: "inicio"
          },
          {
            text: "Vuelos Disponibles",
            href: "#",
            to: "vuelosDisponibles"
          },
          {
            text: "Lineas de Vuelo",
            href: "#",
            to: "lineasDeVuelo"
          },
          {
            text: "",
            href: "#",
            to: ""
          },

         ],
      };
    },
  };
  </script>
  
  <style>
  </style>