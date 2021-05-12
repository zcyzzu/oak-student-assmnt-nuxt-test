<template>
  <div>
    <commonTitlebar :title="classInfo"></commonTitlebar>
    <classList class="mt-md-8 mt-4"></classList>
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
      classInfo: "班级列表"
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
