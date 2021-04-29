<template>
  <div>
    <vxe-table
      align="center"
      :loading="loading"
      empty-text="没有更多数据了！"
      :data="tableData"
    >
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="班级名称"></vxe-table-column>
      <vxe-table-column field="num" title="班级序号"></vxe-table-column>
      <vxe-table-column field="grade" title="年级"></vxe-table-column>
      <vxe-table-column field="admitted" title="入学年份"></vxe-table-column>
      <vxe-table-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <v-btn icon @click="editEvent(row)">
            <v-icon small>mdi-file-edit-outline</v-icon>
          </v-btn>
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-pager
      border
      :current-page="tablePage1.currentPage"
      :total="tablePage1.totalResult"
      :layouts="['PrevPage', 'NextPage', 'Total']"
      :page-size="tablePage1.pageSize"
      @page-change="handlePageChange1"
    >
      <template #left>
        <span style="position:relative;top:2px"
          >当前：{{ tablePage1.currentPage }}/1</span
        >
      </template>
    </vxe-pager>
    <classUpdateDialog
      ref="update"
      :classInfo="classInfo"
      @clearClassInfo="clearClassInfo"
    ></classUpdateDialog>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  layout: "admins",
  data() {
    return {
      classInfo: "",
      loading: false,
      tablePage1: {
        currentPage: 1,
        pageSize: 15,
        totalResult: 2
      },
      tableData: []
    };
  },
  created() {
    /**
     * @description 请求第一页教师信息
     */
    this.loading = true;
    this.findList1();
  },
  methods: {
    /**
     * @description 点击上/下一页时触发  请求上/下一页教师信息
     */
    handlePageChange1({ currentPage }) {
      this.tablePage1.currentPage = currentPage;
      this.findList1();
    },
    /**
     * @description 更新教师信息 将当前教师信息通过父子组件传参 送至dialog
     * @argument 当前教师信息
     */
    editEvent(row) {
      this.classInfo = row;
      setTimeout(() => {
        this.$refs.update.dialog = true;
      }, 100);
    },
    clearClassInfo() {
      setTimeout(() => {
        this.classInfo = "";
      }, 100);
    },
    findList1() {
      setTimeout(() => {
        this.loading = false;
        this.tablePage1.totalResult = 6;
        this.tableData = [
          {
            id: 10001,
            name: "张三",
            num: 123,
            admitted: 2016,
            grade: 2
          },
          {
            id: 10002,
            name: "小红",
            num: 45,
            admitted: 2016,
            grade: 1
          },
          {
            id: 10003,
            name: "小明",
            num: 655,
            admitted: 2018,
            grade: 4
          },
          {
            id: 10004,
            name: "小白",
            num: 7,
            admitted: 2020,
            grade: 5
          },
          {
            id: 10001,
            name: "张三",
            num: 435,
            admitted: 2018,
            grade: 2
          }
        ];
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped></style>
