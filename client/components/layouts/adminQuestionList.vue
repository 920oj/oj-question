<template>
  <div class="admin-question-list">
    <div class="question-item-wrapper" v-for="item in list" :key="item.id">
      <Question 
        :content="item.content" 
        :name="item.name" 
        :date="item.createdAt" 
        :isanswered="item.isAnswered"
        :index="item.index" 
      />
      <div class="question-btn">
        <div @click="editQuestion(item.index)">
          <Btn title="回答する" />
        </div>
        <div @click="deleteQuestion(item.index)">
          <Btn title="削除する" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '~/components/ui/question.vue'
import Btn from '~/components/ui/btn.vue'
import axios from 'axios'

export default {
  components: {
    Question,
    Btn,
  },
  props: ['list'],
  methods: {
    editQuestion: function(index) {
      this.$router.push(`/admin/edit/${index}`)
    },
    deleteQuestion: function(index) {
      axios.delete(`/api/question/${index}`, {
        headers: {
          'x-api-key': process.env.KEY,
          'x-csrf-token': this.$store.state.csrfToken
        }
      })
      location.reload();
    }
  }
  
}
</script>

<style scoped>
.admin-question-list {
  margin: 0 auto;
  max-width: 600px;
  padding: 30px 0;
}

.question-btn {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>