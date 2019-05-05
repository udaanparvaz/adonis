<template>
  <h1>Lesson {{$route.params.id}}</h1>
</template>

<script>
export default {
  name: 'LessonVue',
  props: ['id'],
};
</script>

<style>

</style>
