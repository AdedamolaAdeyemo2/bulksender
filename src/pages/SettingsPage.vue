<template>
  <div style="padding: 20px" class="text-hiba">
    <div style="padding: 0 20px" class="text-primary">
      <h4><strong>Settings</strong></h4>
    </div>
    <div class="q-pa-md">
      <q-form @submit.prevent="updateProfile" class="q-gutter-md">
        <div class="flex row">
          <label class="col-xs-12 col-sm-8 col-md-2">Business Logo </label>
          <div class="flex col-xs-12 col-sm-8 col-md-8" style="width: 60%">
            <q-icon name="upload_file" size="50px" />
            <q-file v-model="file" label="Upload Image" filled />
          </div>
        </div>

        <div class="flex row">
          <label class="col-xs-12 col-sm-8 col-md-2">Business Name: </label>
          <q-input
          class="col-xs-12 col-sm-8 col-md-8"
            filled
            v-model="form.firstName"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        
        
        <div class="flex row">
          <label class="col-xs-12 col-sm-8 col-md-2">Email Address: </label>
          <q-input
            class="col-xs-12 col-sm-8 col-md-8"
            filled
            type="email"
            v-model="form.email"
            lazy-rules
          />
        </div>
        <div class="flex row">
          <label class="col-xs-12 col-sm-8 col-md-2">Phone Number: </label>
          <q-input
            class="col-xs-12 col-sm-8 col-md-8"
            filled
            type="text"
            v-model="form.phone"
            lazy-rules
            :rules="requriedRules"
          />
        </div>

        <div class="flex row">
          <label class="col-xs-12 col-sm-8 col-md-2">Password: </label>
          <q-input
            filled
            type="password"
            v-model="form.bank_account_number"
            class="col-xs-12 col-sm-8 col-md-8"
            lazy-rules
            :rules="requriedRules"
          />
        </div>


        <div class="flex justify-center q-mt-lg">
          <q-btn
        
            label="Update"
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
// }

const SettingsPage = defineComponent({
  name: 'SettingsPage',
  data() {
    return {
      notifications: true,
      email: true,
      banks: [],
      file: null,
      isLoading: false,
      form: {
        profilePicture: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        bank_account_number: '',
        bank_account_name: '',
        bank_name: '',
      },
    };
  },
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

export default SettingsPage;
</script>