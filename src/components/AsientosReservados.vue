<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Asientos Reservados</p>
    </div>
    
</template>
   
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Reservas de vuelos",
                    href: "#",
                    to: 'reservavuelos'
                },
                {
                    text: "Asientos Rersevados",
                    href: "#",
                    to: "asientosreservados"
                }
            ]
        }
    }
}
</script>
   
   
<style></style>