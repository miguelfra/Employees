<template>

   <router-link :to="`editEmployee/${id.id}`">
     <button type="button" class="btn btn-warning text-white">Edit</button>
   </router-link>
</template>

<script>
export default {
  props: {id: Object},
  
}
</script>


