<template>
  <div>
    <commonTitlebar :title="studentList"></commonTitlebar>
    <studentList class="mt-md-8 mt-4"></studentList>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "",
  components: {},
  layout: "admins",
  data() {
    return {
      studentList: "学生/家长列表"
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
