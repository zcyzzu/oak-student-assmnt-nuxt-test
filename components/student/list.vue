<template>
  <div id="box">
    <vxe-table
      border
      ref="xTable"
      keep-source
      align="center"
      highlight-hover-row
      :loading="loading"
      empty-text="没有更多数据了！"
      :data="tableData"
      :edit-rules="validRules"
      @edit-closed="editClosedEvent"
      :edit-config="{ trigger: 'dblclick', mode: 'cell', showStatus: true }"
    >
      <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
      <vxe-table-column
        field="name"
        title="姓名"
        :edit-render="{ name: 'input' }"
      ></vxe-table-column>
      <vxe-table-column
        field="num"
        title="班级序号"
        :edit-render="{ name: '$input', props: { type: 'number' } }"
      ></vxe-table-column>
      <vxe-table-column
        field="grade"
        title="年级"
        :edit-render="{ name: '$select', options: gradeList }"
      ></vxe-table-column>
      <vxe-table-column
        field="admitted"
        title="入学年份"
        :edit-render="{ name: '$select', options: admittedList }"
      ></vxe-table-column>
      <vxe-table-column
        field="tel"
        title="手机"
        :edit-render="{ name: 'input' }"
      ></vxe-table-column>

      <vxe-table-column
        field="className"
        title="班级名称"
        :edit-render="{ name: 'input' }"
      ></vxe-table-column>
      <vxe-table-column
        field="status"
        title="状态"
        :edit-render="{ name: '$select', options: statusList }"
      >
      </vxe-table-column>
      <vxe-table-column title="操作" show-overflow>
        <template #default="{ row }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon @click="resetAccount(row)">
                <v-icon small>mdi-lock-reset </v-icon>
              </v-btn>
            </template>
            <span>重置学生/家长账户</span>
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
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  layout: "admins",
  data() {
    return {
      loading: false,
      tablePage1: {
        currentPage: 1,
        pageSize: 15,
        totalResult: 2
      },
      tableData: []
    };
  },
  computed: {
    ...mapState("validTable", {
      statusList: "statusList",
      gradeList: "gradeList",
      admittedList: "admittedList",
      validRules: "validRules"
    })
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
     * @description 重置教师账户
     *
     */
    resetAccount(row) {
      this.notify({ content: "教师账户重置成功！" });
      console.log(row);
    },
    async editClosedEvent(row) {
      const $table = this.$refs.xTable;
      const errMap = await $table.validate().catch(errMap => errMap);
      if (errMap) {
        this.$XModal.message({ status: "error", content: "校验不通过！" });
      } else {
        console.log(row);
        //TODO 编辑的单元格 在这里校验成功后 调用update 进行更新
        this.$XModal.message({ status: "success", content: "校验成功！" });
      }
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
            grade: 2,
            tel: "13299046537",
            className: "一年级一班",
            status: "正常"
          },
          {
            id: 10002,
            name: "小红",
            num: 45,
            admitted: 2016,
            grade: 1,
            tel: "13299046537",
            className: "一年级一班",
            status: "休学"
          },
          {
            id: 10003,
            name: "小明",
            num: 655,
            admitted: 2018,
            grade: 4,
            tel: "13299046537",
            className: "一年级一班",
            status: "正常"
          },
          {
            id: 10004,
            name: "小白",
            num: 7,
            admitted: 2020,
            grade: 5,
            tel: "13299046537",
            className: "一年级一班",
            status: "正常"
          },
          {
            id: 10001,
            name: "张三",
            num: 435,
            admitted: 2018,
            grade: 2,
            tel: "13299046537",
            className: "一年级一班",
            status: "正常"
          }
        ];
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped></style>
