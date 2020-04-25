<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{loadedPost.title}}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{loadedPost.updatedDate | date}}
        </div>
        <div class="post-detail">
          Written by Name {{ loadedPost.author }}pageID:{{ $route.params.id }}
        </div>
        <div>
          <div class="post-thumbnail" :style="{backgroundImage: 'url(' + loadedPost.thumbnail + ')'}" />
          <div class="post-content">
          {{ loadedPost.content }}
        </div>
        </div>
      </div>
      <p>Let me know what you think about the post , send a mail to <a href="feedback@my-awsome-domain.com">feedback@my-awsome-domain.com.</a></p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, params }) {
    try {
      const response = await $axios.$get(process.env.API_URL + '/post/' + params.id + '.json')
      
      return {
        loadedPost: response
      }
    } catch(e) {
      console.log(e)
    } 
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post-thumbnail {
   width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
