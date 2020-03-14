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
      <div class="question-page-contents-wrapper">
        <div class="question-page-contents" v-if="question.isAnswered">
          <div class="answer-box">
            <div class="answer-box-center">
              <p style="text-align: center;">{{question.answer}}</p>
              <p style="text-align: center; font-size: 0.5rem; margin-top: 15px;">回答日時: {{convertDate(question.updatedAt)}}</p>
            </div>
          </div>
        </div>
        <div class="question-page-contents" v-if="!question.isAnswered">
          <div class="qpcb">
            <p class="question-page-contents-description">まだ未回答です！ごめんネ！</p>
          </div>
        </div>
        <div @click="$router.push('/')">
          <Btn title="トップに戻る" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/layouts/header.vue'
import QuestionForm from '~/components/layouts/questionForm.vue'
import Question from '~/components/ui/question.vue'
import Btn from '~/components/ui/btn.vue'

const moment = require("moment")
moment.locale('ja')
require('moment-timezone')
moment.tz.setDefault('Asia/Tokyo')

export default {
  components: {
    Header,
    QuestionForm,
    Question,
    Btn,
  },

  methods: {
    convertDate: function(date) {
      return moment(date).format('YYYY年M月D日 HH:mm:ss')
    }
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
.question-page-wrapper {
  width: 90%;
  margin: 30px auto;
  max-width: 600px;
}

.question-page-contents {
  background: rgba(34,166,224,1);
  margin: 30px 0;
  padding: 15px 0;
  border-radius: 10px;
}

.question-page-contents-description {
  text-align: center;
  padding: 30px 0;
}

.qpcb {
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  background: #FFF;
}

.answer-box {
  margin: 30px;
  padding: 5px;
  background: #FFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

.answer-box-icon {
  width: 100%;
}

</style>