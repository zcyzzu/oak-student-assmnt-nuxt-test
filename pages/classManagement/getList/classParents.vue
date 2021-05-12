<template>
  <div>
    <h1>班级家长信息</h1>
    <v-btn @click="$router.push('/classManagement/getList')">返回</v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "",
  layout: "admins",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
