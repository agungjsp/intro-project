<template>
  <div>
    <Row :gutter="16">
      <Col v-for="album in albums" v-bind:key="album.key" span="6">
        <div class="cstm-text-center cstm-padding-medium">
          <card>
            <div>
              <p class="cstm-padding-vert-small">
                <b>{{ album.title }}</b>
              </p>
              <router-link :to="{ name: 'gallery', params: { idAlbum: album.id } }">
                <Button type="info">See Photos</Button>
              </router-link>
            </div>
          </card>
        </div>
      </Col>
    </Row>
    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import Card from "./../../../components/Card";
import UserService from "./../../../service/api";

export default {
  components: {
    Card
  },
  data() {
    return {
      loading: false,
      albums: []
    };
  },
  created() {
    this.getAlbumUser();
  },
  methods: {
    async getAlbumUser() {
      this.loading = true;
      try {
        const response = await UserService.getAlbumsUser(this.$route.params.id);
        if (response) {
          this.albums = response;
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to get data Album. Please Try Again!`
        });
      }
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.cstm-text-center {
  text-align: center;
}

.cstm-padding-vert-small {
  padding: 12px 0;
}

.cstm-padding-medium {
  padding: 24px;
}
</style>