import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'

    },
      {
        path: '/formulario',
        name:'formulario',
        component: () => import('../components/Formulario.vue')
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },

        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/reservaVuelos',
                name: 'reservaVuelos',
                component: () => import('../components/ReservaVuelos.vue')
            },
            {
                path: '/asientosReservados',
                name: 'asientosReservados',
                component: () => import('../components/AsientosReservados.vue')
            },
            {
                path: '/vuelosDisponibles',
                name: 'vuelosDisponibles',
                component: () => import('../components/VuelosDisponibles.vue')
            },
            {
                path: '/lineasDeVuelo',
                name: 'lineasDeVuelo',
                component: () => import('../components/LineasDeVuelo.vue')
            },
            {
                path: '/vuelosCancelados',
                name: 'vuelosCancelados',
                component: () => import('../components/VuelosCancelados.vue')
            },
            {
                path: '/proximosVuelos',
                name: 'proximosVuelos',
                component: () => import('../components/ProximosVuelos.vue')
            }
    
        ]
    },
]

const router = new VueRouter({ routes })
export default router;
