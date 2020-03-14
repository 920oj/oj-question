<template>
  <div class="question">
    <div class="question-wrapper" @click="$router.push(`/question/${index}`)">
      <div class="question-status answered" v-if="isanswered">回答済</div>
      <div class="question-status not-answered" v-if="!isanswered">未回答</div>
      <div class="question-content">
        <p class="question-content-name">{{name}} さんからの質問</p>
        <p class="question-content-detail">{{content}}</p>
        <p class="question-content-date">{{convertDate(date)}}</p>
      </div>
    </div>
  </div>
</template>

<script>

const moment = require("moment")
moment.locale('ja')
require('moment-timezone')
moment.tz.setDefault('Asia/Tokyo')

export default {
  props: [
    'content',
    'name',
    'date',
    'isanswered',
    'index'
  ],
  methods: {
    convertDate: function(date) {
      return moment(date).format('YYYY年M月D日 HH:mm:ss')
    }
  }
}
</script>

<style>

.question {
  margin: 20px 0;
  background: #FFF;
  border-radius: 10px;
  cursor: pointer;
}

.question-wrapper {
  position: relative;
}

.question-status {
  width: 3rem;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 0;
}

.answered {
  background: rgba(34,166,224,1);
  color: #FFF;
}

.not-answered {
  background: #FFF;
  color: rgba(34,166,224,1);
  border: 1px solid rgba(34,166,224,1);
}

.question-content {
  padding: 0 10px;
  padding-top: calc(1rem + 20px);
  display: flex;
  flex-direction: column;
}

.question-content p {
  margin: 5px 0;
}

.question-content-name {
  font-size: 0.8rem;
}

.question-content-date {
  font-size: 0.8rem;
  text-align: right;
}

</style>