<template>
  <div>
    <commonTitlebar :title="teacherInfo"></commonTitlebar>
    <teacherList class="mt-md-8 mt-4"></teacherList>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "",
  layout: "admins",
  components: {},
  data() {
    return {
      teacherInfo: "教师列表"
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
