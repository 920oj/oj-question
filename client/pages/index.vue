<template>
  <div class="index">
    <Header />
    <div class="index-wrapper">
      <div class="question-form-wrapper">
        <QuestionForm />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/layouts/header.vue'
import QuestionForm from'~/components/layouts/questionForm.vue'

export default {
  data() {
    return {
      current: 1,
      max_row: 1,
      display_question_list: [],
    }
  },

  components: {
    Header,
    QuestionForm,
  },

  mounted() {
    let max = Math.floor( (this.question_list.length + 10) / 10)
    let d_list = [];
    for(let i = 0; i < max; i++) {
      let j = this.question_list.slice(i * 10, (i * 10) + 10)
      d_list.push(j)
    }

    this.max_row = max
    this.display_question_list = d_list
  },

  computed: {

  },

  methods: {
    
  },

  async asyncData({ $axios }) {
    let tmp = await $axios.$get('/api/question')
    let question_list = tmp.reverse()
    return {
      question_list
    }
  },

}
</script>

<style>
.index-wrapper {
  width: 90%;
  margin: 30px auto;
  max-width: 600px;
}
</style>
