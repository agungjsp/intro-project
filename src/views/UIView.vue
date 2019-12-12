<template>
  <div>
    <breadcrumb v-bind:navs="link"></breadcrumb>
    <Table :columns="column" :data="data" :loading="loading">
      <template slot-scope="{ row }" slot="address">
        <span>{{ row.address.street }} {{ row.address.suite }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
        <router-link :to="{ name: 'detail', params: { id: row.id } }">
          <Button type="info" size="small" style="margin-right: 5px">Detail</Button>
        </router-link>
      </template>
    </Table>
  </div>
</template>

<script>
import Breadcrumb from "./../components/Breadcrumb.vue";
import UserService from "./../service/api";

export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      loading: false,
      data: [],
      link: [
        {
          title: "Home"
        }
      ],
      column: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Email",
          key: "email"
        },
        {
          title: "Address",
          slot: "address"
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ]
    };
  },
  async mounted() {
    this.loading = true;
    try {
      const response = await UserService.getUsers();
      if (response) {
        this.data = response;
      }
    } catch (error) {
      this.$Modal.info({
        title: "Error!",
        content: `Please Try Again!`
      });
    }
    this.loading = false;
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name: ${this.data[index].name}<br/>Email: ${this.data[index].email}<br/>Address: ${this.data[index].address.street} ${this.data[index].address.suite}`
      });
    }
  }
};
</script>

<style>
</style>