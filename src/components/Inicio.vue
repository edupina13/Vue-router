<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>INICIO</p>
   <b-button :to="{ name: 'reservaVuelos'}" style="background-color: #4B38C1 ; color: #fff;">Reservas de Vuelos</b-button>
<b-button :to="{ name: 'vuelosDisponibles'}" style="background-color: #38C178 ; color: #fff;">Vuelos Disponibles</b-button>
<b-button :to="{ name: 'vuelosCancelados'}" style="background-color: #9E350E ; color: #fff;">Vuelos Cancelados</b-button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [   ],
    };
  },
};
</script>

<style>
</style>