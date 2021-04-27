<template>
  <div>
    <commonTitlebar :title="createClass"></commonTitlebar>
    <classCreate></classCreate>
    <commonTitlebar :title="inputClass"></commonTitlebar>
    <excelUpload></excelUpload>
    <excelCreateClassExampleExcel></excelCreateClassExampleExcel>
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
      createClass: "创建班级信息",
      inputClass: "Excel批量创建班级信息"
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
