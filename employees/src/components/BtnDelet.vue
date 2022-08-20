<template>
  <button  @click="deletTask(id.id)" type="button" class="btn btn-danger">Delete</button>
</template>

<script>
export default {
props: {id: Object},

methods: {
  async deletTask(id) {
      await fetch(`http://localhost:3000/api/employees/${id}`, {method: 'DELETE'})
     window.location.href = "/"
    
  }

}

}
</script>

