<template>
  <div class="q-pa-md text-primary">
    <q-toolbar>
   <q-space />
    <q-btn class="text-primary q-mt-lg q-mb-sm" to="new-campaign">Add New</q-btn>
   </q-toolbar>
    <q-table
      :dense="$q.screen.lt.md"
      title="Campaigns"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="text-black"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.rowIndex + 1 }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="username" :props="props">{{ props.row.username }}</q-td>
          <q-td key="contact" :props="props">{{ props.row.contact }}</q-td>
          <q-td key="total_invest" :props="props">
            {{ formatMoney(props.row.total_invest) }}
          </q-td>
          <q-td key="position" :props="props" class="text-uppercase">
            <q-badge
              class="q-pa-sm"
              color="hiba"
              text-color="white"
              :label="props.row.position"
            />
          </q-td>
          <q-td key="date" :props="props">
            {{ formatDate(props.row.createdAt) }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
// import { ACTION_GET_REFERRAL_LOG } from 'src/store/referral/actions';
//import { Referral } from 'src/store/referral/state';
import { defineComponent } from 'vue';
//import { mapState } from 'vuex';
//import { formatDate, formatMoney } from 'src/helpers/formatter';

const CampaignsPage = defineComponent({
  name: 'CampaignsPage',
//   computed: {
//     ...mapState('referral', ['referralLog']),
//     columns() {
//       return [
//         {
//           name: 'id',
//           align: 'left',
//           label: 'S/N',
//           field: 'id',
//         },
//         {
//           name: 'email',
//           align: 'left',
//           label: 'Email',
//           field: 'email',
//           sortable: true,
//         },
//         {
//           name: 'name',
//           align: 'left',
//           label: 'Name',
//           field: 'name',
//         },
//         {
//           name: 'username',
//           align: 'left',
//           label: 'Username',
//           field: 'username',
//         },
//         {
//           name: 'contact',
//           align: 'left',
//           label: 'Contact',
//           field: 'contact',
//         },
//         {
//           name: 'total_invest',
//           label: 'Total Investment',
//           align: 'left',
//           field: 'total_invest',
//         },
//         { name: 'position', label: 'Position', field: 'position' },
//         { name: 'date', label: 'Date registered', field: 'createdAt' },
//       ];
//     },
//     rows(): Referral[] {
//       return this.referralLog;
//     },
//   },
//   mounted() {
//     this.getReferralLogs();
//   },
//   methods: {
//     formatDate,
//     formatMoney,
//     async getReferralLogs() {
//       await this.$store.dispatch(ACTION_GET_REFERRAL_LOG);
//     },
//   },
});

export default CampaignsPage;
</script>