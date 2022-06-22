<template>
  <div class="container">
    <h1 class="pb-3">Employees</h1>
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in employees" :key="employee.id">
      <td>{{employee.name}}</td>
      <td>{{employee.salary}}</td>
      <td> <BtnEdit :id="employee" /> <BtnDelet :id="employee"/></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import BtnDelet from '../components/BtnDelet.vue'
import BtnEdit from '../components/BtnEdit.vue'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
 components: {BtnDelet, BtnEdit},

methods: {
   ...mapActions(['ActionGetEmployees']),
},

created(){
  this.ActionGetEmployees()
},

computed: {
  ...mapState(['employees'])
}

}
</script>
