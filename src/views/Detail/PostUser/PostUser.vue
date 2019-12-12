<template>
  <div>
    <list v-bind:posts="posts" @clicked="show"></list>
    <Spin size="large" fix v-if="loading"></Spin>
    <Modal v-model="postEdit" title="Edit Post" :loading="true" @on-ok="submit" @on-cancel="cancel">
      <div>
        <Form :model="dataPost">
          <FormItem label="Title">
            <Input v-model="dataPost.title" placeholder="Enter title"></Input>
          </FormItem>
          <FormItem label="Body">
            <Input v-model="dataPost.body" placeholder="Enter body"></Input>
          </FormItem>
        </Form>
        <Spin size="large" fix v-if="loadingModal"></Spin>
      </div>
    </Modal>
  </div>
</template>

<script>
import List from "./../../../components/List.vue";
import UserService from "./../../../service/api";

export default {
  components: {
    List
  },
  data() {
    return {
      loading: false,
      loadingModal: false,
      postEdit: false,
      posts: [],
      dataPost: {
        title: "",
        body: ""
      }
    };
  },
  created() {
    this.getPostsUser();
  },
  methods: {
    async getPostsUser() {
      this.loading = true;
      try {
        const response = await UserService.getPostsUser(this.$route.params.id);
        if (response) {
          this.posts = response;
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to get data Posts. Please try again later!`
        });
      }
      this.loading = false;
    },
    async submit() {
      try {
        const payload = { ...this.dataPost };
        const response = await UserService.updatePost(payload.id, payload);
        if (response) {
          this.$Notice.success({
            title: "Success!",
            desc: "Data updated!"
          });
          this.postEdit = false;
          await this.getPostsUser();
        } else {
          this.$Notice.error({
            title: "Error!",
            desc: "Failed to update data post, please try again!"
          });
          this.postEdit = false;
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to update data post, please try again later!`
        });
        this.postEdit = false;
      }
    },
    async show(value) {
      this.loadingModal = true;
      this.postEdit = value.visible;
      try {
        const response = await UserService.getDetailPost(value.id);
        if (response) {
          this.dataPost = response;
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to get data Post, please try again!`
        });
      }
      this.loadingModal = false;
    },
    cancel() {
      this.postEdit = false;
    }
  }
};
</script>

<style scoped>
</style>