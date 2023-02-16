<template>
  <div style="padding: 20px" class="text-primary">
    <div style="padding: 0 20px; border: 1px solid black;">
      <h4><strong>Connect to Whatsapp</strong></h4>
    </div>
    <div class=" flex row justify-between q-py-md">
      <q-card class="col-xs-12 col-sm-8 col-md-5 bg-white text-black q-pa-lg">
        <h6> Scan the qrcode to connect to whatsapp</h6>
        <p>1. Click the menu on your whatsapp.</p>
        <p>2. Select 'Linked devices'.</p>
        <p>3. Click 'Link a device'.</p>
        <p>4. Then scan this qrcode to connect.</p>
      </q-card>
      <q-card class="col-xs-12 col-sm-8 col-md-5 bg-white q-pa-md">
        <img
            alt="qrcode"
            src="../assets/qrcode.png"
            
          />
      </q-card>
      <div class="col-xs-12 col-sm-8 col-md-1"></div>
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

const ConnectwhatsappPage = defineComponent({
  name: 'ConnectwhatsappPage',
//   
});

export default ConnectwhatsappPage;
</script>