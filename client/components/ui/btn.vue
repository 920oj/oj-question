<template>
  <div class="btn">
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }

}
</script>

<style>
.btn {
  background: transparent;
  text-align: center;
  font-weight: 900;
  color: rgba(34,166,224,1);
  padding: 10px 30px;
  border: 1px solid rgba(34,166,224,1);
  cursor: pointer;
}

.btn:hover {
  background: rgba(34,166,224,1) 0%;
  color: #FFF;
  transition: all 0.5s ease-out;
}
</style>