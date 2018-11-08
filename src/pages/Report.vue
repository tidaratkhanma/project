<template>
  <div>

    <article class="message is-warning">
  <div class="message-body">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Username" v-model="data.username" >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Telephone</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="number" size="10" v-model="data.tel" placeholder="Telephone">
          <span class="icon is-small is-left">
            <i class="fas fa-phone-volume"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="data.message"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="add()">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>

  </div>
</article>
  </div>
</template>
<script>
import firebase from 'firebase'
import swal from 'sweetalert2'
export default {
  data() {
    return {
      data: {
        username: '',
        tel: '',
        message: ''
      },
      active: ''
    }
  },
  methods: {
    add () {
      swal({
        title: 'Are you sure?',
        text: "You want to send a message.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes it\'s'
      }).then((result) => {
        firebase.database().ref('report').push(this.data)
        this.data.username = ''
        this.data.tel = ''
        this.data.message = ''
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },
  }
}
</script>
<style>
</style>
