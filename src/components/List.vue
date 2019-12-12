<template>
  <div>
    <List>
      <ListItem v-for="post in posts" v-bind:key="post.key">
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          :title="post.title"
          :description="post.body"
        />
        <template slot="action">
          <li>
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(true, post.id)"
            >Edit</Button>
          </li>
        </template>
      </ListItem>
    </List>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  },
  methods: {
    show(visible, id) {
      const payload = {
        visible: visible,
        id: id
      };
      this.$emit("clicked", payload);
    }
  }
};
</script>