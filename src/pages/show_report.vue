<template lang="html">
  <div class="">

    <article class="message is-warning" v-for = "data in report">
      <div class="message-body">
    <b>  Name: </b>  {{data.username}} &nbsp;&nbsp;&nbsp;
        <b> telephone: </b>   {{data.tel}} </br>
          <b> message </b> </br>{{data.message}} </br>
      </div>
    </article>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      report: ''
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      var data = [], member = [], value = ''
      firebase.database().ref('/report/').once('value').then(function (snapshot) {
        that.report = snapshot.val()
      })
    },
    delete () {

    }
  }
}
</script>

<style lang="css">
</style>
