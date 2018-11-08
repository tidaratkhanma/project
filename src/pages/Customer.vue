
<template>
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
             @filtered="onFiltered"
    >
      <template slot="id" slot-scope="row"> {{row.value.id}} </template>
      <template slot="name" slot-scope="row">{{row.value.name}}</template>
      <template slot="num" slot-scope="row">{{row.value.num}}</template>
      <template slot="status" slot-scope="row">{{row.value.status}}</template>

    </b-table>
  </b-container>
</article>
</template>

<script>
const items = [
  { id: { id: '0001'}, name: { name: 'FITM SIDE'}, num: { num: 2}, status: { status: 'ปกติ'} },
  { id: { id: '0002'}, name: { name: 'ตึกศิรินทร'}, num: { num: 6}, status: { status: 'ปกติ'} },
  { id: { id: '0003'}, name: { name: 'อบต.เนินหอม'}, num: { num: 2}, status: { status: 'ปกติ'} },

]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'id', label: 'id', sortable: true, sortDirection: 'desc' },
        { key: 'name', label: 'name', sortable: true, 'class': 'text-center' },
        { key: 'num', label: 'number', sortable: true, 'class': 'text-center'},
        { key: 'status', label: 'status', sortable: true, 'class': 'text-center'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' }
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
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
