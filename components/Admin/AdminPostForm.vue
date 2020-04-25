<template>
  <form @submit.prevent="onSave">
    <!---- slot ---->
    <AppControlInput v-model="editedPost.author">
      作者名
    </AppControlInput>
    <AppControlInput v-model="editedPost.title">
      タイトル
    </AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">
      サムネイルリンク
    </AppControlInput>
    <AppControlInput v-model="editedPost.previewText" control-type="textarea">
      プレビュー
    </AppControlInput>
    <AppControlInput v-model="editedPost.content" control-type="textarea">
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
      editedPost: this.post ? { ...this.post } : {
        author: '',
        title: '',
        thumbnail: '',
        previewText: '',
        content: ''
      }
    }
  },
  methods: {
    onSave () {
      // save
      this.$emit('submit', this.editedPost)
      console.log(this.editedPost)
    },
    onCancel () {
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
