// import {port} from '../server/app'
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:8080');

// import * as Vue from 'vue'
// import * as VueRouter from 'vue-router'

import { board } from '../vue/board' 
import { connection } from '../vue/connection' 
import { lobby } from '../vue/lobby' 

const routes = [
  { path: '/', component: connection },
  { path: '/login', component: connection },
  { path: '/board/:gameroomid', component: board, props: true },
  { path: '/lobby', component: lobby },
]

const router = new VueRouter({
  routes
})

let app = new Vue({
    el: '#app',
		router,
		sockets:{
      isLoggedIn(isOnGame: boolean){
        if(!isOnGame){
            this.$router.push({path: '/login'});  
        }
      }
		}
});