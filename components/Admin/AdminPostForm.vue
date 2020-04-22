<template>
  <form @submit.prevent="onSave()">
    <!---- slot ---->
    <AppControlInput v-model="editPost.author">
      作者名
    </AppControlInput>
    <AppControlInput v-model="editPost.title">
      タイトル
    </AppControlInput>
    <AppControlInput v-model="editPost.thumbnailLink">
      サムネイルリンク
    </AppControlInput>
    <AppControlInput v-model="editPost.content" control-type="textarea">
      コンテント
    </AppControlInput>
    <AppButton type="submit">
      save
    </AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px;"
      btn-style="cancel"
      @click="onCancel"
    >
      キャンセル
    </AppButton>
  </form>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import AppControlInput from '~/components/UI/AppControlInput'
export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editPost: this.post ? { ...this.post } : {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave () {
      // save
      // eslint-disable-next-line no-console
      console.log(this.editPost)
    },
    onCancel () {
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
