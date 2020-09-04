<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
        class="author"
      >{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username !== user.username">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{ active: article.author.following }"
        @click="onFollow(article)"
        :disabled="article.followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }}
        <!-- <span class="counter">(10)</span> -->
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{ active: article.favorited }"
        @click="onFavorite(article)"
        :disabled="article.favoriteDisabled"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post
        <span class="counter">{{ article.favoritesCount }}</span>
      </button>
    </template>
    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        @click="editArticle(article)"
      >
        <i class="ion-edit"></i>
        &nbsp;
        Edit Article
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-danger"
        @click="deleteArticle(article)"
      >
        <i class="ion-trash-a"></i>
        &nbsp;
        Delete Article
      </button>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex"

import {
  addFollow,
  deleteFollow,
  addFavorite,
  deleteFavorite,
  deleteArticle
} from "@/api/article";

export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;
      if (article.favorited) {
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
    async onFollow(article) {
      article.followDisabled = true;
      if (article.author.following) {
        await deleteFollow(article.author.username);
        article.author.following = false;
      } else {
        await addFollow(article.author.username);
        article.author.following = true;
      }
      article.followDisabled = false;
    },
    async editArticle(article) {
      this.$router.push({
        name: 'editor',
        query: {
          slug: article.slug
        }
      })
    },
    async deleteArticle(article) {
      try {
        const { data } = await deleteArticle(article.slug)

        this.$router.push({ name: 'home' })
      } catch (err) {

      }
    }
  },
};
</script>
<style>
</style>