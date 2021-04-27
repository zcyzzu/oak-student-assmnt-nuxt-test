import { amdinRoutes } from "~/domain/permission";
import vue from "vue";
let that = vue.prototype;
export const state = () => ({
  token: null,
  adminRoute: [],
  title: "教师管理"
});

export const mutations = {
  setTitle(state, item) {
    state.title = item.title;
  },
  setToken(state, v) {
    state.token = v;
  },
  setAdminRoute(state, v) {
    state.adminRoute = amdinRoutes[v - 1];
  },
  /**
   * @description 每次进行刷新时  读取当前path控制相应的active
   * 展开对应的左侧navigator bar
   */
  navigationRouteActive(state, path) {
    state.adminRoute.forEach(element => {
      for (const i of element.children) {
        if (i.to === path) {
          state.title = element.title;
          element.active = true;
          return;
        } else {
          element.active = false;
        }
      }
    });
  },
  /**
   * @description 登出 将localStorage中的内容初始化
   */
  logout(state) {
    state.token = null;
    state.adminRoute = [];
    state.title = "教师管理";
    that.notify({
      content: "登出成功！"
    });
  }
};

export const actions = {};
