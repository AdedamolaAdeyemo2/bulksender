<template>
  <div class="q-pa-md">
    <q-toolbar>
   <q-space />
    <q-btn class="text-primary q-mt-lg q-mb-sm" to="new-contact">Add New Contact</q-btn>
   </q-toolbar>
    <q-table
      title="Contacts"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: 'ID',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',//row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'first_name', align: 'center', label: 'First Name', field: 'fname', sortable: true },
  { name: 'phone_number', label: 'Phone Number', field: 'number', sortable: true },
  { name: 'date_added', label: 'Date Added', field: 'date', sortable: true },
  
 ]

const rows = [
  {
    id: 1,
    fname: 'Ade',
    number: '08011223344',
    date: 'Thursday, February 16th, 2023'
  },
 ]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
