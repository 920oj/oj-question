<template>
  <div class="question-list">
    <div class="question-item-wrapper" v-for="item in list" :key="item.id">
      <Question 
        :content="item.content" 
        :name="item.name" 
        :date="item.createdAt" 
        :isanswered="item.isAnswered"
        :index="item.index" 
      />
    </div>
  </div>
</template>

<script>
import Question from '~/components/ui/question.vue'

export default {
  components: {
    Question,
  },
  props: [
    'list'
  ],
}
</script>

<style>

</style>