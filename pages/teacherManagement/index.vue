<template>
  <div>
    <teacherManagementCreate></teacherManagementCreate>
    <excelUpload></excelUpload>
    <h1 v-role="[1]">校级管理员</h1>
    <h1 v-role="[2]">班级管理员</h1>
    <h1 v-role="[3]">普通老师</h1>
    <v-btn @click="nrq">遮罩层</v-btn>
    <v-btn to="/401">401</v-btn>
    {{ adminRoute }}
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  layout: "admins",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    nrq() {
      this.$overlay("正在加载，请稍后！", true);
    }
  },
  computed: {
    ...mapState("localStorage", {
      adminRoute: "adminRoute"
    })
  }
};
</script>
