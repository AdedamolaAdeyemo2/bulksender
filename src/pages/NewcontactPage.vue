<template>
  <div style="padding: 20px" class="text-primary">
    <div style="padding: 0 20px">
      <h4><strong>Add New Contact</strong></h4>
    </div>
    <div class="q-pa-md">
      
        <div class="flex q-pb-lg">
        <q-icon name="upload_file" size="50px" />
        <q-file v-model="file" label="Upload CSV" filled />
        <q-label class="q-pa-lg">Or add manually below </q-label>
        </div>
      
      
      
      <q-form class="q-gutter-md">
        <div>
         <label>First Name: </label>

        <div class="flex row">
         
          <q-input class="col-xs-12 col-sm-8 col-md-8"
            filled
            
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        
        </div>
        </div>
        <div >
          <label>Whatsapp Number: </label>
          <div class="flex row">
          <q-input class="col-xs-12 col-sm-8 col-md-8"
            filled
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        </div>

        
        
        <div class="q-mt-lg">
          <q-btn
            
            label="Add Contact"
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