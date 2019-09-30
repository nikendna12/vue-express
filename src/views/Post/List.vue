<template>
  <div>
    <a style="float:right">Create</a>
    <h1>Posts</h1>
    <table border="1">
      <thead>
        <tr>
          <td>
            ID
          </td>
          <td>
            Title
          </td>
          <td>
            Body
          </td>
          <td>
            Action
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="4">
            <h1>Loading...</h1>
          </td>
        </tr>
        <tr v-else v-bind:key="index" v-for="(post, index) in posts">
          <td>
            {{ post.id }}
          </td>
          <td>
            {{ post.title }}
          </td>
          <td>
            {{ post.body }}
          </td>
          <td width="150">
            EDIT | DELETE
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      posts: state => state.posts.items,
      loading: state => state.posts.loading
    })
  },
  mounted() {
    this.$store.dispatch("posts/fetchPosts");
    console.log(this.$store.state.posts.loading);
  }
};
</script>
