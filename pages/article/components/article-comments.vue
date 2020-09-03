<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="comment.body"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image || null" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="addComment">Post Comment</button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }" class="comment-author">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }" class="comment-author">{{ comment.author.username }}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
        <span class="mod-options" v-if="comment.author.username === user.username" @click="() => {deleteComment(comment.id)}"><i class="ion-trash-a"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
import { getComments, addComment, deleteComment } from "@/api/article"
import { mapState } from "vuex"

export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      comments: [],
      comment: {
        body: ''
      }
    }
  },
  mounted() {
    this.loadComment()
  },
  methods: {
    async loadComment() {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
    },
    async addComment() {
      const { data } = await addComment(this.article.slug, this.comment)
      // console.log('data', data)
      this.comment.body = ''
      this.loadComment()
    },
    async deleteComment(commentId) {
      await deleteComment(this.article.slug, commentId)
      this.loadComment()
    }
  }
};
</script>
<style>
</style>