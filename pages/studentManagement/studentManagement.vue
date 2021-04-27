<template>
  <div>
    <commonTitlebar :title="studentInfo"></commonTitlebar>
    <studentCreate></studentCreate>
    <commonTitlebar :title="inputStudent"></commonTitlebar>
    <excelUpload></excelUpload>
    <excelCreateStudentExampleExcel></excelCreateStudentExampleExcel>
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
      studentInfo: "创建学生/家长信息",
      inputStudent: "Excel批量创建学生/家长信息"
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
