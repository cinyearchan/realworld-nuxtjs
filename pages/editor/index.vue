<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  :disabled="editDisabled"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  :disabled="editDisabled"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keydown.enter="addTag"
                  :disabled="editDisabled"
                  required
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in article.tagList"
                    :key="tag + index"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publishArticle"
                :disabled="editDisabled"
              >Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { addArticle, getArticle, editArticle } from "@/api/article";

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "EditorIndex",
  async asyncData({ query }) {
    const slug = query.slug;
    let article = {
      title: "",
      description: "",
      body: "",
      tagList: [],
    };
    if (slug) {
      const { data } = await getArticle(slug);
      article = data.article;
    }

    return {
      slug,
      article,
    };
  },
  data() {
    return {
      editDisabled: false,
      tag: "",
    };
  },
  methods: {
    addTag() {
      this.article.tagList.push(this.tag);
      this.tag = "";
    },
    removeTag(index) {
      this.article.tagList.splice(index, 1);
    },
    async publishArticle() {
      try {
          this.editDisabled = true;
          const { data } = this.slug ? await editArticle(this.slug, this.article) : await addArticle(this.article);
          // console.log("data", data);
          const { article } = data;
          this.$router.push(`/article/${article.slug}`);
        } catch (err) {
          this.editDisabled = false;
        }
    },
  },
};
</script>
<style>
</style>