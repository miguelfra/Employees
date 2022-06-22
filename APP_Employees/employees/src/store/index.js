import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: []
  },
  getters: {
  },
  mutations: {
    GetEmployees(state, data){ 
      state.employees = data;
    }
  },
  actions: {
   async ActionGetEmployees (context){
     const res = await fetch('http://localhost:3000/api/employees');
     const data = await res.json()
    context.commit('GetEmployees', data);
     console.log(data);
    },

    async ActionNewEmployees(context,employee) {
     await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        body: JSON.stringify(employee),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      window.location.href = '/';
    }

  },
  modules: {
  }
})
