<template>
  <div class="question-page">
    <Header />
    <div class="question-page-wrapper">
      <Question 
        :content="question.content" 
        :name="question.name" 
        :date="question.createdAt" 
        :isanwered="question.isAnswered"
        :index="question.index"
      />
    </div>
  </div>
</template>

<script>
import Header from '~/components/layouts/header.vue'
import QuestionForm from '~/components/layouts/questionForm.vue'
import Question from '~/components/ui/question.vue'
import Btn from '~/components/ui/btn.vue'

export default {
  components: {
    Header,
    QuestionForm,
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

<style>
.question-page-wrapper {
  width: 90%;
  margin: 30px auto;
  max-width: 600px;
}
</style>