<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <template v-if="profile.username !== user.username">
              <button
                class="btn btn-sm btn-outline-secondary action-btn"
                :class="{ active: profile.following }"
                @click="onFollow(profile)"
                :disabled="profile.followDisabled"
              >
                <i class="ion-plus-round"></i>
                &nbsp;
                {{ profile.following ? 'Unfollow' : 'follow' }} {{ profile.username }}
              </button>
            </template>
            <template v-else>
              <nuxt-link class="btn btn-sm btn-outline-secondary action-btn" :to="{ name: 'settings' }">
                <i class="ion-gear-a"></i>
                &nbsp;
                Edit Profile Settings
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'my_articles' }"
                  :to="{ path: `/profile/${profile.username}`, query: { tab: 'my_articles' } }"
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'favorited_articles' }"
                  :to="{ path: `/profile/${profile.username}`, query: { tab: 'favorited_articles' } }"
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link
                :to="{ path: `/profile/${article.author.username}`, params: { username: article.author.username } }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{ path: `/profile/${article.author.username}`, params: { username: article.author.username } }"
                  class="author"
                >{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i>
                {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{ name: 'article', params: { slug: article.slug } }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <template v-for="(tag, index) in article.tagList">
                  <li class="tag-default tag-pill tag-outline" :key="tag + index">{{ tag }}</li>
                </template>
              </ul>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile } from "@/api/user";
import { mapState } from "vuex"
import {
  getArticles,
  addFollow,
  deleteFollow,
  addFavorite,
  deleteFavorite,
} from "@/api/article";

export default {
  middleware: "authenticated",
  name: "UserProfile",
  computed: {
    ...mapState(['user'])
  },
  async asyncData({ query, params }) {
    const { data } = await getProfile(params.username);
    // console.log('data', data)
    const { profile } = data;
    // console.log(profile)
    profile.followDisabled = false;

    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tab = query.tab || "my_articles";
    // const tag = query.tag;
    console.log("tab", tab);

    const arg = {
      limit,
      offset: (page - 1) * limit,
    };
    const rest =
      tab === "my_articles"
        ? { author: params.username }
        : { favorited: params.username };
    const args = Object.assign({}, arg, rest);

    const res = await getArticles(args);
    // console.log(res)

    const { articles, articlesCount } = res.data;

    articles.forEach((article) => (article.favoriteDisabled = false));

    return {
      profile,
      articles,
      articlesCount,
      limit,
      page,
      tab,
    };
  },
  watchQuery: ["page", "tab"],
  methods: {
    async onFollow(profile) {
      profile.followDisabled = true;
      if (profile.following) {
        await deleteFollow(profile.username);
        profile.following = false;
      } else {
        await addFollow(profile.username);
        profile.following = true;
      }
      profile.followDisabled = false;
    },
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
    handleCurrentChange(page) {
      this.page = page;
      this.$router.push({
        path: `/profile/${profile.username}`,
        query: {
          page: this.page,
          tab: this.tab,
        },
      });
    },
  },
};
</script>

<style>
</style>