<template>
  <div>
    <breadcrumb v-bind:navs="link"></breadcrumb>
    <Row type="flex" justify="end">
      <Col>
        <Button size="large" type="primary" @click="photoAdd = true">Add Photo</Button>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col v-for="photo in photos" v-bind:key="photo.key" :xs="24" :sm="12" :md="12" :lg="8">
        <div class="cstm-text-center cstm-padding-medium">
          <card>
            <div>
              <img :src="photo.thumbnailUrl" />
              <p class="cstm-padding-vert-small">
                <b>{{ photo.title }}</b>
              </p>
            </div>
          </card>
        </div>
      </Col>
    </Row>
    <Spin size="large" fix v-if="loading"></Spin>
    <Modal v-model="photoAdd" title="Add Photo" :loading="true" @on-ok="submit" @on-cancel="cancel">
      <div>
        <Form :model="dataPhoto">
          <FormItem label="Title">
            <Input v-model="dataPhoto.title" placeholder="Enter title"></Input>
          </FormItem>
          <FormItem label="URL">
            <Input v-model="dataPhoto.url" placeholder="Enter URL"></Input>
          </FormItem>
          <FormItem label="Thumbnail URL">
            <Input v-model="dataPhoto.thumbnailUrl" placeholder="Enter Thumbnail URL"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Breadcrumb from "./../../components/Breadcrumb.vue";
import Card from "./../../components/Card.vue";
import UserService from "./../../service/api";

export default {
  components: {
    Breadcrumb,
    Card
  },
  data() {
    return {
      loading: false,
      photoAdd: false,
      photos: [],
      dataPhoto: {
        albumId: this.$route.params.idAlbum,
        title: "",
        url: "",
        thumbnailUrl: ""
      },
      link: [
        {
          title: "Home",
          href: "/"
        },
        {
          title: "Detail",
          href: `/detail/` + this.$route.params.id
        },
        {
          title: "Photo Gallery"
        }
      ]
    };
  },
  created() {
    this.getPhotosAlbum();
  },
  methods: {
    async getPhotosAlbum() {
      this.loading = true;
      try {
        const response = await UserService.getPhotosAlbum(
          this.$route.params.idAlbum
        );
        if (response) {
          this.photos = response;
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to get data Album. Please Try Again!`
        });
      }
      this.loading = false;
    },
    async submit() {
      try {
        const payload = { ...this.dataPhoto };
        const response = await UserService.createPhoto(payload);
        if (response) {
          this.$Notice.success({
            title: "Success!",
            desc: "Data created!"
          });
          this.photoAdd = false;
          this.dataPhoto = {};
          await this.getPhotosAlbum();
        } else {
          this.$Notice.error({
            title: "Error!",
            desc: "Failed to create new photo, please try again!"
          });
          this.photoAdd = false;
          this.dataPhoto = {};
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to create new photo, please try again later! ${error}`
        });
        this.photoAdd = false;
        this.dataPhoto = {};
      }
    },
    cancel() {
      this.photoAdd = false;
      this.dataPhoto = {};
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