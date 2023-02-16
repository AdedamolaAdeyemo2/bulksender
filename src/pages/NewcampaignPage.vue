<template>
  <div style="padding: 20px" class="text-primary">
    <div style="padding: 0 20px">
      <h4><strong>Add New Campaign</strong></h4>
    </div>
    <div class="q-pa-md">
      <q-form class="q-gutter-md">
        <div>
         <label>Recipients: </label>

        <div class="flex row q-gutter-md">
         
          <q-input class="col-xs-12 col-sm-8 col-md-5 col-md-8"
            filled
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-label class="q-pt-md"> OR </q-label>
          <q-btn class="col-xs-12 col-sm-8 col-md-3 h-5" style="height:55px"> Send To All Contacts </q-btn>
        </div>
        </div>
        <div class="q-pt-lg">
          <label>Subject: </label>
          <q-input class="col-xs-12 col-sm-8 col-md-8"
            filled
           
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>

        <div>
          <label>Body: </label>
          <q-input
            class="col-xs-12 col-sm-8 col-md-8"
            filled
            type="textarea"
          
            lazy-rules
          />
        </div>
        
        <div class="flex row q-mt-lg q-gutter-y-md" style="width:80%">
          <q-btn
            
            label="Send Now"
            size="lg"
            type="submit"
            :loading="isLoading"
            class="col-xs-12 col-sm-8 col-md-3 bg-primary text-white q-mr-lg"
          />
          <q-btn
            
            label="Send Later"
            size="lg"
            type="submit"
            :loading="isLoading"
            class="col-xs-12 col-sm-8 col-md-3 bg-primary text-white"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import {
//   ACTION_GET_ACCOUNT,
//   ACTION_UPDATE_ACCOUNT,
// } from 'src/store/account/actions';
// import { mapState } from 'vuex';
// import { Status } from 'src/types/endpoints';
// import { requriedRules } from 'src/helpers/validation';

// interface Bank {
//   name: string;
//}

const NewcampaignPage = defineComponent({
  name: 'NewcampaignPage',
//   data() {
//     return {
//       notifications: true,
//       email: true,
//       banks: [],
//       file: null,
//       isLoading: false,
//       form: {
//         profilePicture: '',
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: '',
//         phone: '',
//         bank_account_number: '',
//         bank_account_name: '',
//         bank_name: '',
//       },
//     };
//   },
//   computed: {
//     ...mapState('auth', ['user']),
//     ...mapState('account', ['account']),
//     requriedRules,
//   },
//   mounted() {
//     this.getAccount();
//     this.getBanks();
//     this.setDefaults();
//   },
//   methods: {
//     setDefaults() {
//       this.form.username = this.user.username;
//       this.form.firstName = this.user.firstName;
//       this.form.lastName = this.user.lastName;
//       this.form.email = this.user.email;
//       this.form.phone = this.user.contact;
//       this.form.bank_account_number = this.user.bank_account_number;
//       this.form.bank_account_name = this.user.bank_account_name;
//       this.form.bank_name = this.user.bank_name;
//     },
//     async getBanks() {
//       const { data } = await this.$axios.get('https://nigerianbanks.xyz/');
//       this.banks = data.map((v: Bank) => ({ label: v.name, value: v.name }));
//     },
//     async getAccount() {
//       const { id } = this.user;
//       await this.$store.dispatch(ACTION_GET_ACCOUNT, id);
//     },
//     async updateProfile() {
//       this.isLoading = true;
//       const response = await this.$store.dispatch(ACTION_UPDATE_ACCOUNT, {
//         form: this.form,
//         id: this.user.id,
//       });
//       if (response === Status.SUCCESS) {
//         this.getAccount();
//       }
//       this.isLoading = false;
//     },
//   },
});

export default NewcampaignPage;
</script>