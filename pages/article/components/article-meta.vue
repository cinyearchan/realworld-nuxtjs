<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }" class="author">{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary" :class="{ active: article.author.following }" @click="onFollow(article)" :disabled="article.followDisabled">
      <i class="ion-plus-round"></i>
      &nbsp;
      {{  article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }}
      <!-- <span class="counter">(10)</span> -->
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary" :class="{ active: article.favorited }" @click="onFavorite(article)" :disabled="article.favoriteDisabled">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post
      <span class="counter">{{ article.favoritesCount }}</span>
    </button>
  </div>
</template>
<script>
import { addFollow, deleteFollow, addFavorite, deleteFavorite } from "@/api/article";

export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
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
        await deleteFollow(article.author.username)
        article.author.following = false
      } else {
        await addFollow(article.author.username)
        article.author.following = true
      }
      article.followDisabled = false;
    }
  }
};
</script>
<style>
</style>