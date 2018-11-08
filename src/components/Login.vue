<template>
  <div  id="login">
    <img src="../assets/img/45667878_1157398571090422_3816164045489176576_n.jpg" width="20%"><br><br>
    <div class="columns">
        <div class="column"></div>
        <div class="column is-two-fifths">
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-info" type="text" placeholder="Username" v-model="username">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-info" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
          </br>
          <a class="button is-info is-hovered" @click ="login()">Login</a>&nbsp;&nbsp;&nbsp;
          <a class="button is-danger is-hovered"@click ="cancle()">Cancle</a>
        </div>
        <div class="column"></div>
      </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import swal from 'sweetalert2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      show_member: ''
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      firebase.database().ref('/member/').once('value').then(function (snapshot) {
        that.show_member = snapshot.val()
      })
    },
    login () {
      var st = true
      for (var mai in this.show_member) {
        if (this.username  === this.show_member[mai].username && this.password === this.show_member[mai].password) {
          st = false
          firebase.database().ref('active').set(this.username)
          firebase.database().ref('login').set(this.show_member[mai].status)
          this.$router.replace('/dashboard')
        }
      }
      if (st) {
        swal({
          position: 'top-center',
          type: 'error',
          title: 'username or password is incorrect!',
          showConfirmButton: false,
          timer: 1500
        })
        this.password = ''
      }
    },
    cancle () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  margin-top: 60px;
  text-align: center;
}
</style>
