<template>
  <div class="question-form">
    <p class="question-form-description">OJに質問しよう！</p>
    <input class="question-name" v-model="name" type="text" placeholder="名無し">
    <textarea class="question-box" v-model="question" placeholder="質問内容を200文字以内で入力" />
    <p class="question-form-count" :class="{'count-red': !sendAvailable}"> {{formCount}}&#47;200文字 </p>
    <div v-if="sendAvailable" @click="sendQuestion()">
      <Btn title="質問する" />
    </div>
    <div v-if="!sendAvailable">
      <p style="text-align: center;">正しく入力してね</p>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/ui/btn.vue';

export default {
  components: {
    Btn,
  },
  data() {
    return {
      name: '',
      question: '',
    }
  },
  computed: {
    formCount: function() {
      return this.question.length
    },
    sendAvailable: function() {
      if(this.question.length === 0) {
        return false
      }
      else if(this.question.length > 200) {
        return false
      }
      else {
        return true
      }
    }
  },
  methods: {
    sendQuestion: function() {
      let formData = {
        name: this.name,
        content: this.question,
      }
      let header = {
        'x-csrf-token': this.$store.state.csrfToken
      }
      this.$axios.$post('/api/question', formData, { headers: header })
        .then(response => {
          console.log(response)
          console.log(`localhost/question/${response.index}に移動します`)
          this.$router.push(`/question/${response.index}`)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

.question-form {
  background: #FFF;
  padding: 30px 10px;
  border-radius: 10px;
}

.question-form-description{
  text-align: center;
}

.question-form-count {
  text-align: right;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 30px;
}

.count-red {
  color: #DE3163;
}

.question-name {
  color: #282828;
  margin-top: 30px;
  width: 100%;
  height: 2rem;
  border: 1px solid #F9F9F9;
  box-sizing: border-box;
}

.question-box {
  color: #282828;
  margin-top: 10px;
  width: 100%;
  height: 10rem;
  border: 1px solid #F9F9F9;
  border-radius: 10px;
  resize: none;
  box-sizing: border-box;
}
</style>