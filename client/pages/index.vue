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
  components: {
    Header,
    QuestionForm,
  }
}
</script>

<style>
.index-wrapper {
  width: 90%;
  margin: 30px auto;
  max-width: 600px;
}
</style>
