<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1 ">
    <q-header class="bg-grey-2 text-primary q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn flat @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

        <q-btn
          flat
          no-caps
          no-wrap
          class="q-ml-xs "
          v-if="$q.screen.gt.xs"
          to="/home"
        >
          <!-- <img
            alt="Hiba"
            src="~assets/Logo.png"
            style="width: 44px; height: 49.5px"
          /> -->
          <q-label> Whatsapp Bulk Messenger</q-label>
        </q-btn>  

        
        <q-space />

        <q-space />

        <div
          class="q-gutter-sm row items-center text-primary no-wrap"
         
        >
          <q-label class="q-px-lg q-py-sm" style="border: 1px solid #219ebc"> # 0.00 </q-label>
          <q-btn flat v-if="$q.screen.gt.sm" to="/contact"> Add Money </q-btn>
          <q-btn flat to="/settings">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <label class="q-ml-sm"> {{ fullName }} </label>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <q-btn flat icon="notifications">
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="240"
    >
    
    
      <q-toolbar class="q-py-lg">
        
        <q-list padding>
          
          <q-item
            v-for="link in links1"
            :key="link.text"
            :to="link.link"
            v-ripple
            clickable
            
          >
            <q-item-section avatar>
              <q-icon style="color: #219ebc" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#219ebc">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
<!-- 
          <q-item
            v-for="link in links2"
            :key="link.text"
            :to="link.link"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon style="color: #0c7b39" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: #0c7b39">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item
            v-for="link in links3"
            :key="link.text"
            :to="link.link"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon style="color: #219ebc" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: #219ebc">{{
                link.text
              }}</q-item-label>
            </q-item-section>
          </q-item>

        

          <q-item @click="logOut" v-ripple clickable>
            <q-item-section avatar>
              <q-icon style="color: #219ebc" name="logout" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: #219ebc">Logout</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />
          
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link text-hiba"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
        
      </q-toolbar>
      <div class="q-px-lg">
           
              <p
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link text-primary"
                href="javascript:void(0)"
                
              >
                {{ button.text }}
              </p>
           
          </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
//import { MUTATION_LOGOUT } from 'src/store/auth/mutations';
import { defineComponent } from 'vue';
//import { mapState } from 'vuex';

const MainLayout = defineComponent({
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      search: '',
      links1: [
        { icon: 'dashboard', text: 'Dashboard', link: 'dashboard' },
        { icon: 'trending_up', text: 'Campaigns', link: 'campaigns' },
        { icon: 'people', text: 'Contacts', link: 'contacts' },
        { icon: 'message', text: 'Connect to Whatsapp', link: 'connect-whatsapp' },
        { icon: 'settings', text: 'Settings', link: 'settings' },
      ],
      // links2: [
      //   { icon: 'account_balance', text: 'Withdrawal', link: 'withdraw' },
      //   {
      //     icon: 'account_balance_wallet',
      //     text: 'Balance transfer',
      //     link: 'transfer',
      //   },
      // ],

      //links3: [{ icon: 'settings', text: 'Settings', link: 'settings' }],
      buttons1: [{ text: 'Copyright @ 2023' }],
      //buttons2: [{ text: "Heartszibah Int'l" }],
    };
  },
  // computed: {
  //   ...mapState('auth', ['user']),
  //   ...mapState('account', ['account']),
  //   fullName(): string {
  //     return `${this.account?.firstName} ${this.account?.lastName}`;
  //   },
  // },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    // async logOut() {
    //   await this.$store.commit(MUTATION_LOGOUT);
    //   window.location.reload();
    // },
  },
});

export default MainLayout;
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000

.q-router-link--exact-active
  background-color: #CECE
  color: #FFF !important
</style>