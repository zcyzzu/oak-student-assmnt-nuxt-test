<template>
  <div>
    <vxe-table
      align="center"
      :loading="loading"
      empty-text="没有更多数据了！"
      :data="tableData"
      highlight-hover-row
    >
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="姓名"></vxe-table-column>
      <vxe-table-column field="tel" title="手机"></vxe-table-column>
      <vxe-table-column field="grade" title="年级"></vxe-table-column>
      <vxe-table-column title="操作" show-overflow>
        <template #default="{row}">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon @click="editEvent(row)">
                <v-icon small>mdi-file-edit-outline</v-icon>
              </v-btn>
            </template>
            <span>更新教师信息</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon @click="statusEvent(row)">
                <v-icon small>mdi-account-clock-outline </v-icon>
              </v-btn>
            </template>
            <span>更新教师状态</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon @click="editEvent(row)">
                <v-icon small>mdi-lock-reset </v-icon>
              </v-btn>
            </template>
            <span>重置教师账户</span>
          </v-tooltip>
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
    <teacherUpdateDialog
      ref="update"
      :teacherInfo="teacherInfo"
      @clearTeacherInfo="clearTeacherInfo"
    ></teacherUpdateDialog>
    <teacherStatus ref="status" :teacherStatus="teacherStatus"></teacherStatus>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  layout: "admins",
  data() {
    return {
      teacherInfo: "",
      teacherStatus: false,
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
      this.teacherInfo = row;
      setTimeout(() => {
        this.$refs.update.dialog = true;
      }, 100);
    },
    /**
     * @description 更新教师状态 将当前教师状态通过父子组件传参 送至dialog
     * @argument 当前教师信息
     */
    statusEvent(row) {
      this.teacherStatus = row.status;
      this.$refs.status.dialog = true;
    },
    clearTeacherInfo() {
      setTimeout(() => {
        this.teacherInfo = "";
      }, 100);
    },
    findList1() {
      setTimeout(() => {
        this.loading = false;
        this.tablePage1.totalResult = 15;
        this.tableData = [
          {
            id: 10001,
            name: "张三",
            tel: "13299046537",
            status: true,
            grade: 2
          },
          {
            id: 10002,
            name: "小红",
            tel: "13299046537",
            status: false,
            grade: 1
          },
          {
            id: 10003,
            name: "小明",
            tel: "13299046537",
            status: false,
            grade: 4
          },
          {
            id: 10004,
            name: "小白",
            tel: "13299046537",
            status: true,
            grade: 5
          },
          {
            id: 10001,
            name: "张三",
            tel: "13299046537",
            status: true,
            grade: 2
          },
          {
            id: 10002,
            name: "小红",
            tel: "13299046537",
            status: false,
            grade: 1
          },
          {
            id: 10003,
            name: "小明",
            tel: "13299046537",
            status: true,
            grade: 4
          },
          {
            id: 10004,
            name: "小白",
            tel: "13299046537",
            status: true,
            grade: 5
          },
          {
            id: 10001,
            name: "张三",
            tel: "13299046537",
            status: false,
            grade: 2
          },
          {
            id: 10002,
            name: "小红",
            tel: "13299046537",
            status: true,
            grade: 1
          },
          {
            id: 10003,
            name: "小明",
            tel: "13299046537",
            status: true,
            grade: 4
          },
          {
            id: 10004,
            name: "小白",
            tel: "13299046537",
            status: true,
            grade: 5
          },
          {
            id: 10001,
            name: "张三",
            tel: "13299046537",
            status: true,
            grade: 2
          },
          {
            id: 10002,
            name: "小红",
            tel: "13299046537",
            status: true,

            grade: 1
          },
          {
            id: 10003,
            name: "小明",
            tel: "13299046537",
            status: true,
            grade: 4
          }
        ];
      }, 300);
    }
  }
};
</script>
