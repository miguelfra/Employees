<template>
  <div class="card mx-auto" style="width: 50%" v-if="modo">
    <div class="card-body bg-dark text-white">
      <form @submit.prevent="newEmployee()">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            v-model="employee.name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name Employee"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Salary</label>
          <input
           v-model="employee.salary"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Salary Employee"
          />
          
        </div>
        <button type="submit" class="btn btn-success">{{action}}</button>
      </form>
    </div>
  </div>

  <div class="card edit mx-auto" style="width: 50%" v-else>
      <div class="card-body bg-dark text-white">
        <form @submit.prevent="EditEmployee()">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              v-model="employeeId.name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Salary</label>
            <input
            v-model="employeeId.salary"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              
            />
            
          </div>
          <button type="submit" class="btn btn-success">{{action}}</button>
        </form>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    action: String,
    employeeId: Object
  },
  data: () => ({
    employee: {
      name: '',
      salary: null
    },
    modo: true,
  }),

  methods: {
    ...mapActions(['ActionNewEmployees']), 

    newEmployee(){
       this.ActionNewEmployees(this.employee);
       console.log(this.employee);
    },
    async EditEmployee(){
         await fetch(`http://localhost:3000/api/employees/${this.employeeId.id}`, {
         method: 'PUT',
         body: JSON.stringify(this.employeeId),
         headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'
         }
       });
         console.log(this.employeeId)
       window.location.href = "/"
    },
    
    TypeForm(){
      if (this.action === 'Edit Employee') {
        this.modo = false
      } else {
        this.modo = true
      }
    }
  },

  mounted(){
    this.TypeForm()
  }
}
</script>

<style scoped>
 input{
font-weight: bold;
}
label{
  text-transform: uppercase;
  font-weight: bold;

}
</style>

