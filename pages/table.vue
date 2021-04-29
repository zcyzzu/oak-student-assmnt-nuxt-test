<template>
  <div>
    <div
      id="rightMenuDom"
      class="right-menu"
      :style="{
        display: rightMenuStatus,
        top: rightMenuTop,
        left: rightMenuLeft
      }"
    >
      <ul>
        <li>
          <span
            v-for="item in rightMenuList"
            :key="item.id"
            @click="item.handler"
            >{{ item.text }}
          </span>
        </li>
      </ul>
    </div>
    <ul id="test" style="list-style:none;color:white">
      <li v-right-click="rightMenuObj" style="background:red">1</li>
      <li v-right-click="rightMenuObj" style="background:green">2</li>
      <li v-right-click="rightMenuObj" style="background:black">3</li>
      <li v-right-click="rightMenuObj" style="background:blue">4</li>
    </ul>
    <h1>{{ rightMenuList }}</h1>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  mounted() {
    document.addEventListener("click", () => {
      this.$store.commit("rightMenu/updateRightMenuStatus", {
        status: "none",
        left: "0px",
        top: "0px"
      });
    });
  },
  computed: {
    ...mapState("rightMenu", {
      rightMenuStatus: "status",
      rightMenuTop: "top",
      rightMenuLeft: "left",
      rightMenuList: "list"
    }),
    rightMenuObj() {
      let that = this;
      return {
        text: ["更新教师信息", "更新教师状态", "删除教师", "其他选项"],
        handler: {
          updateInfo() {
            console.log("更新教师信息");
          },
          updateStatus() {
            console.log("更新教师状态");
          },
          remove() {
            console.log("删除教师");
          },
          other() {
            console.log("其他选项");
          }
        }
      };
    }
  }
};
</script>
<style lang="scss" scoped>
#test li {
  height: 200px;
}
// 右键菜单样式
.right-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 166px;
  height: auto;
  background-color: rgb(242, 242, 242);
  border: solid 1px #c2c1c2;
  box-shadow: 0 10px 10px #c2c1c2;
  display: none;
  border-radius: 5px;

  ul {
    padding: 0;
    margin: 0;
    font-size: 15px;

    li {
      list-style: none;
      box-sizing: border-box;
      padding: 6px 0;
      border-bottom: 1px solid rgb(216, 216, 217);
      &:nth-child(1) {
        padding-top: 2px;
      }

      &:nth-last-child(1) {
        border-bottom: none;
      }

      span {
        display: block;
        height: 20px;
        line-height: 20px;
        padding-left: 16px;

        &:hover {
          background-color: #0070f5;
          cursor: pointer;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
