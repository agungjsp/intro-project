<template>
  <div>
    <breadcrumb v-bind:navs="link"></breadcrumb>
    <Tabs value="user">
      <TabPane name="user" label="Detail User" icon="md-person">
        <detail-user></detail-user>
      </TabPane>
      <TabPane name="post" label="Post" icon="ios-paper-outline">
        <post-user></post-user>
      </TabPane>
      <TabPane name="album" label="Album" icon="md-images">
        <album-user></album-user>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import Breadcrumb from "./../../components/Breadcrumb.vue";
import DetailUser from "./DetailUser/DetailUser.vue";
import PostUser from "./PostUser/PostUser.vue";
import AlbumUser from "./AlbumUser/AlbumUser.vue";

export default {
  components: {
    Breadcrumb,
    DetailUser,
    PostUser,
    AlbumUser
  },
  data() {
    return {
      loading: false,
      userDetail: [],
      link: [
        {
          title: "Home",
          href: "/"
        },
        {
          title: "Detail"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>