<template>
  <Form action="Edit Employee" :employeeId="employeeId"/>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
 components: { Form },
 data: () => ({
  employeeId: {}
 }),
  methods: {
     async GetEditEmployee(){
      const res = await fetch(`http://localhost:3000/api/employees/${this.$route.params.id}`);
      const data = await res.json();
      this.employeeId = data;
    }
  },

  mounted(){
    this.GetEditEmployee()
  }
}
</script>
