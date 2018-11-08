<template>
  <div class="wrapper">

    <side-bar>
      <template slot="links"  v-if = "login === 'user'">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-dashboard"/>
        <sidebar-link to="/ATM" name="ATM FITM" icon="ti-location-pin"/>
        <sidebar-link to="/sirinton" name="sirinton" icon="ti-location-pin"/>
        <sidebar-link to="/Larnplam" name="Larnplam" icon="ti-location-pin"/>
        <sidebar-link to="/car" name="Under the roof" icon="ti-location-pin"/>
        <sidebar-link to="/Report" name="Report" icon="ti-comment"/>
      </template>

      <template slot="links" v-else >
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-dashboard"/>
        <sidebar-link to="/ATM" name="ATM FITM" icon="ti-location-pin"/>
        <sidebar-link to="/sirinton" name="sirinton" icon="ti-location-pin"/>
        <sidebar-link to="/Larnplam" name="Larnplam" icon="ti-location-pin"/>
        <sidebar-link to="/car" name="Under the roof" icon="ti-location-pin"/>
        <sidebar-link to="/Report" name="Report" icon="ti-comment"/>
        <sidebar-link to="/Customer" name="Customer site" icon="ti-map-alt"/>
        <sidebar-link to="/Statistics" name="Statistics" icon="ti-pulse"/>
        <sidebar-link to="/show_report" name="show_report" icon="ti-clipboard"/>
        <sidebar-link to="/setting" name="setting" icon="ti-settings"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import firebase from 'firebase'
export default {
  data () {
    return {
      login: ''
    }
  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      firebase.database().ref('/login/').once('value').then(function (snapshot) {
        that.login = snapshot.val()
      })
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
