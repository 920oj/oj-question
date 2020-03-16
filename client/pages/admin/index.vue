<template>
  <div class="admin-index">

    <h2 style="text-align: center; margin: 30px 0;">管理画面</h2>

    <div class="question-list-wrapper">
      <AdminQuestionList :list="display_question_list[current - 1]" />
    </div>
    
    <div class="pagination">
      <div class="pagination-left-btn" v-if="pagination_style == 'common' || pagination_style == 'left_only'" @click="movePage(-1)">
        <Btn title="前へ" />
      </div>
      <div class="pagination-right-btn" v-if="pagination_style == 'common' || pagination_style == 'right_only'" @click="movePage(1)">
        <Btn title="次へ" />
      </div>
    </div>

    <div @click="$router.push('/')">
      <Btn title="トップに戻る" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/layouts/header.vue'
import QuestionForm from '~/components/layouts/questionForm.vue'
import AdminQuestionList from '~/components/layouts/adminQuestionList.vue';
import Btn from '~/components/ui/btn.vue'

export default {
  head() {
    return  {
      title: '管理画面 | OJの質問BOX（β）'
    }
  },
  data() {
    return {
      current: 1,
      max_row: 1,
      display_question_list: [],
      pagination_style: 'common'
    }
  },

  components: {
    Header,
    QuestionForm,
    AdminQuestionList,
    Btn,
  },

  mounted() {
    let max = Math.floor( (this.question_list.length + 9) / 10)
    let d_list = [];
    for(let i = 0; i < max; i++) {
      let j = this.question_list.slice(i * 10, (i * 10) + 10)
      d_list.push(j)
    }

    this.max_row = max
    this.display_question_list = d_list
    this.judgePaginationStyle();
  },

  watch: {
    current: function() {
      this.judgePaginationStyle()
    }
  },

  methods: {
    judgePaginationStyle: function() {
      if(this.max_row == 0 || this.max_row == 1) {
        this.pagination_style = 'none'
      }
      else if(this.current == 1) {
        this.pagination_style = 'right_only'
      }
      else if(this.current == this.max_row) {
        this.pagination_style = 'left_only'
      }
      else {
        this.pagination_style = 'common'
      }
    },
    movePage: function(value) {
      this.current += value
    }
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

<style scoped>

.admin-index {
  max-width: 500px;
  margin: 0 auto;
}

.question-list-wrapper {
  padding: 0 10px;
}
</style>