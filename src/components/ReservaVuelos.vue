<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Reservas de Vuelos </p>
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
            text: "Reservas de Vuelo",
            href: "#",
            to: "reservaVuelos"
          },
          {
            text: "Asientos Reservados",
            href: "#",
            to: "asientosReservados"
          },
          {
            text: "",
            href: "#",
            to: ""
          },
                
            ]
        }
    }
}
</script>
   
   
<style></style>