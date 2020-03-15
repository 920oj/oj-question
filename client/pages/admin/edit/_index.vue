<template>
  <div class="admin-edit">
    <div class="admin-edit-wrapper">
      <Question 
        :content="question.content" 
        :name="question.name" 
        :date="question.createdAt" 
        :isanswered="question.isAnswered"
        :index="question.index"
      />
      <textarea v-model="answer" class="answer-textarea" />
      <div @click="submitAnswer()">
        <Btn title="送信する" />
      </div>
      <div style="margin-top: 10px;" @click="$router.push('/admin/')">
        <Btn title="管理画面に戻る" />
      </div>
    </div>
  </div>
</template>

<script>
import Question from '~/components/ui/question.vue'
import Btn from '~/components/ui/btn.vue'

export default {

  head() {
    return  {
      title: '管理画面 | OJの質問BOX（β）'
    }
  },

  data() {
    return {
      answer: '',
    }
  },

  methods: {
    submitAnswer: function() {
      let formData = {
        answer: this.answer,
      }
      let header = {
        'x-api-key': process.env.KEY,
        'x-csrf-token': this.$store.state.csrfToken
      }
      this.$axios.$put(`/api/question/${this.$nuxt.$route.params.index}`, formData, { headers: header })
        .then(response => {
          this.$router.push(`/question/${this.$nuxt.$route.params.index}`)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  components: {
    Question,
    Btn,
  },

  async asyncData({ params, error,  $axios }) {
    let question = await $axios.$get(`/api/question/${params.index}`).catch(err => {
      error({ statusCode: 404, message: '質問が見つかりませんでした。' })
    })
    return {
      question
    }
  },
}

</script>

<style scoped>
.admin-edit-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.answer-textarea {
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  margin-bottom: 5px;
}

</style>