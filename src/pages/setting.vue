<template lang="html">
  <div class="">
    <div class="columns">
  <div class="column">
    <div class="field">
      <div class="control">
        <input class="input is-primary" v-model="data.username" type="text" placeholder="Username">
      </div>
    </div>
  </div>
  <div class="column">
    <div class="field">
      <div class="control">
        <input class="input is-primary" v-model="data.password" type="password" placeholder="Password">
      </div>
    </div>
  </div>
  <div class="column">
    <div class="field">
  <div class="control">
    <div class="select is-primary" placeholder="Status">
      <select  v-model="data.status" >
        <option>user</option>
        <option>admin</option>
      </select>
    </div>
  </div>
</div>

  </div>
  <div class="column is-one-fifth">
    <a class="button is-info is-outlined" @click="add()">Add</a>
  </div>
</div>
<article class="message ">
<b-container fluid>
  <!-- User Interface controls -->
  <b-row>
    <b-col md="6" class="my-1">
      <b-form-group horizontal label="Search" class="mb-0">
        <b-input-group>
          <b-form-input v-model="filter" placeholder="Type to Search" />
          <b-input-group-append>
            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>

  <!-- Main table element -->
  <b-table show-empty
           stacked="md"
           :items="items"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
           :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc"
           :sort-direction="sortDirection"
  >
    <template slot="username" slot-scope="row"> {{row.value.username}} </template>
    <template slot="password" slot-scope="row">{{row.value.password}}</template>
    <template slot="status" slot-scope="row">{{row.value.status}}</template>
    <template slot="action" slot-scope="row">
        <center>
      <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm"class="mr-1" variant="warning" @click.stop="update(row.value.key)">
          <i class="fa fa-edit"></i>
        </b-button>
      <b-button size="sm" variant="danger" @click.stop="deleted(row.value.key)">
        <i class="fa fa-trash"></i></b-button>
    </center>
    </template>

  </b-table>
</b-container>
</article>

  </div>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert2'
const items = [
  { id: { id: '0001'}, name: { name: 'FITM SIDE'}, num: { num: 2}, status: { status: 'ปกติ'} },
  { id: { id: '0002'}, name: { name: 'ตึกศิรินทร'}, num: { num: 6}, status: { status: 'ปกติ'} },
  { id: { id: '0003'}, name: { name: 'อบต.เนินหอม'}, num: { num: 2}, status: { status: 'ปกติ'} },
]
export default {
  data () {
    return {
      items: [],
      fields: [
        { key: 'username', label: 'Username', sortable: true, sortDirection: 'desc' },
        { key: 'password', label: 'Password', sortable: true, 'class': 'text-center' },
        { key: 'status', label: 'Status', sortable: true, 'class': 'text-center'},
        { key: 'action', label: 'Action', 'class': 'text-center'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
      show_member: '',
      data: {
        username: '',
        password: '',
        status: ''
      }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      var data = [], member = [], value = ''
      firebase.database().ref('/member/').once('value').then(function (snapshot) {
        that.show_member = snapshot.val()
        for (var variable in that.show_member) {
          value = {
            'username': {
              'username': that.show_member[variable].username
            },
            'password': {
              'password': that.show_member[variable].password
            },
            'status': {
              'status': that.show_member[variable].status
            },
            'action': {
              'key': variable
            }
          }
          member.push(value)
        }
        that.items = member
      })
    },
    add () {
      firebase.database().ref('member').push(this.data)
      this.data.username = ''
      this.data.password = ''
      this.data.status = ''
      this.pullData()
    },
    deleted (key) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          firebase.database().ref('member').child(key).remove()
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.pullData()
        }
      })
    },
    update (key) {
      swal({
        title: 'Select Roles',
        input: 'select',
        inputOptions: {
          'admin': 'admin',
          'user': 'user'
        },
        inputPlaceholder: 'Select Role',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'admin' || value === 'user') {
              firebase.database().ref('member').child(key).update({
                status: value
              })
              swal('Successfully, role changed to ' + value)
              this.pullData()
            } else {
              resolve('You need to select Roles')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
