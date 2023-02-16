<template>
  <div class="q-pa-lg q-py-lg">
    <div class="text-primary" style=" margin-top: -30px;">
      <h4><strong>Dashboard</strong></h4>
      <hr style="margin-top: -40px">
    </div>
    <div
      class="flex row justify-between q-py-lg text-white q-gutter-y-md"
      
    >
      <q-card class="col-xs-12 col-sm-8 col-md-3 q-pa-lg">
        <q-card-section class="text-center text-black">
          Campaigns

          <q-separator />

          <h4>0</h4>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-8 col-md-3 q-pa-lg">
        <q-card-section class="text-center text-black">
          Messages Sent

          <q-separator />

          <h4>0</h4>
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-8 col-md-3 q-pa-lg">
        <q-card-section class="text-center text-black">
          Contacts

          <q-separator />

          <h4>10</h4>
        </q-card-section>
      </q-card>
    </div>

    <div
      class="flex row justify-between q-gutter-y-md"
      
    >
      <q-card class="col-xs-12 col-sm-8 col-md-8 q-pa-lg">
        <q-card-section class="text-center text-black">
          Campaigns Chart

          <q-separator />
            <apexcharts width="500" type="bar" :options="options" :series="series"></apexcharts>
        
        </q-card-section>
      </q-card>

      <q-card class="col-xs-12 col-sm-8 col-md-3 q-pa-lg">
        <q-card-section class="text-center text-black">
          Account Balance

          <q-separator />

          <h4>#0.00</h4>
        </q-card-section>
      </q-card>

      <!-- <q-card class="col-xs-12 col-sm-8 col-md-3 dash">
        <q-card-section class="text-center">
          Shopping Wallet

          <q-separator />

          <h4>{{ shoppingWallet }}</h4>
        </q-card-section>
      </q-card> -->
    </div>
  </div>
</template>
<script>
// import { formatMoney } from 'src/helpers/formatter';
// import { ACTION_GET_ACCOUNT } from 'src/store/account/actions';
// import { ACTION_GET_REFERRAL_LOG } from 'src/store/referral/actions';
import { defineComponent } from 'vue';


// import { mapState } from 'vuex';


const DashboardPage = defineComponent({

  name: 'DashboardPage',
  // computed: {
  //   ...mapState('referral', ['referralLog']),
  //   ...mapState('account', ['account']),
  //   ...mapState('auth', ['user']),
  //   totalBv(): string {
  //     return formatMoney(this.account?.bv || 0);
  //   },
  //   upgradeWallet(): string {
  //     return formatMoney(this.account?.upgrade_wallet || 0);
  //   },
  //   totalReferral(): number {
  //     return this.referralLog.length;
  //   },
  //   totalReferralBonus(): string {
  //     return formatMoney(this.account?.total_ref_com || 0);
  //   },
  //   totalBalance(): string {
  //     return formatMoney(this.account?.balance || 0);
  //   },
  //   shoppingWallet(): string {
  //     return formatMoney(this.account?.wallet.balance || 0);
  //   },
  // },
  // mounted() {
  //   this.$store.dispatch(ACTION_GET_REFERRAL_LOG);
  //   this.$store.dispatch(ACTION_GET_ACCOUNT, this.user.id);
  // },
});

export default DashboardPage;
</script>
<style scoped>
.q-card {
 
  height: 200px;
}
.dash {
  margin-bottom: 20px;
}
</style>