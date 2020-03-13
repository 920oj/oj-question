<template>
  <div class="question-form">
    <p class="question-form-description">OJに質問しよう！</p>
    <textarea class="question-box" v-model="question" />
    <p class="question-form-count" :class="{'count-red': !sendAvailable}"> {{formCount}}&#47;200文字 </p>
    <div v-if="sendAvailable">
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

.question-box {
  color: #282828;
  margin-top: 30px;
  width: 100%;
  height: 10rem;
  border: 1px solid #F9F9F9;
  border-radius: 10px;
  resize: none;
  box-sizing: border-box;
}
</style>