<template>
  <div class="q-pa-md">
    <q-toolbar>
   <q-space />
    <q-btn class="text-primary q-mt-lg q-mb-sm" to="new-campaign">Add New Campaign</q-btn>
   </q-toolbar>
    <q-table
      title="Campaigns"
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
  { name: 'messages_sent', align: 'center', label: 'Messages Sent', field: 'sent', sortable: true },
  { name: 'delivery_rate', label: 'Delivery Rate', field: 'delivery', sortable: true },
  { name: 'charge', label: 'Charge', field: 'charge' },
  { name: 'date', label: 'Date', field: 'date' },
 ]

const rows = [
  {
    id: 1,
    sent: 100,
    delivery: 0.9,
    charge: 200,
    date: 'Thursday, February 16th 2023',
    
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
