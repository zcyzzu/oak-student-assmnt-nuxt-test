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
   *
   * @description 登出将
   */
  logout(state) {
    state.token = null;
    state.adminRoute = [];
    state.title = "教师管理";
    that.notify({
      content: "登出成功！"
    });
  },
  /**
   *
   * @description 点击头像下拉框中的设置时 跳转到设置页面
   * 将adminRoute中设置active置为true，其余部分为false
   */
  avatar2setting(state) {
    state.adminRoute.forEach(element => {
      for (const i of element.children) {
        element.active = false;
      }
    });
    state.adminRoute[state.adminRoute.length - 1].active = true;
  }
};

export const actions = {};
