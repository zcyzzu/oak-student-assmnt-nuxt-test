<template>
  <div>
    <commonTitlebar :title="createTeacher"></commonTitlebar>
    <teacherCreate></teacherCreate>
    <commonTitlebar :title="inputTeacher"></commonTitlebar>
    <excelUpload></excelUpload>
    <excelCreateTeacherExampleExcel></excelCreateTeacherExampleExcel>
    <!-- <v-btn @click="nrq">遮罩层</v-btn>  -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  layout: "admins",
  data() {
    return {
      createTeacher: "创建教师信息",
      inputTeacher: "Excel批量创建教师信息"
    };
  },
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
