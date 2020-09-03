<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn" :class="{ active: profile.following }" @click="onFollow(profile)" :disabled="profile.followDisabled">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ profile.following ? 'Unfollow' : 'follow' }} {{ profile.username }}
            </button>
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
                <nuxt-link class="nav-link active" href>My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" href>Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <nuxt-link href>
                <img src="http://i.imgur.com/N4VcUeJ.jpg" />
              </nuxt-link>
              <div class="info">
                <nuxt-link href class="author">Albert Pai</nuxt-link>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <nuxt-link href class="preview-link">
              <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline">Music</li>
                <li class="tag-default tag-pill tag-outline">Song</li>
              </ul>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile } from '@/api/user'
import { addFollow, deleteFollow, addFavorite, deleteFavorite } from "@/api/article";

export default {
  middleware: "authenticated",
  name: "UserProfile",
  async asyncData({ query, params }) {
    const { data } = await getProfile(params.username)
    // console.log('data', data)
    const { profile } = data
    profile.followDisabled = false

    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tab = query.tab || "my-articles";
    const tag = query.tag;

    const loadArticles =
      tab === "my-articles" ? getArticles : getYourFeedArticles;

    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag,
      }),
      getTags(),
    ]);

    const { articles, articlesCount } = articleRes.data;
    const { tags } = tagRes.data;

    articles.forEach((article) => (article.favoriteDisabled = false));

    return {
      profile,
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag,
    };
  },
  methods: {
    async onFollow(profile) {
      profile.followDisabled = true;
      if (profile.following) {
        await deleteFollow(profile.username)
        profile.following = false
      } else {
        await addFollow(profile.username)
        profile.following = true
      }
      profile.followDisabled = false;
    }
  }
};
</script>

<style>
</style>