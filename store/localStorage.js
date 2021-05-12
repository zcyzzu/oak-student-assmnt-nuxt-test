import { amdinRoutes } from "~/domain/permission";
import vue from "vue";
/**
 * 用户信息保存
 * @module store.localStorage
 * @author zcy
 * @description 用户信息保存
 *  */
let that = vue.prototype;
export const state = () => ({
  token: null,
  adminRoute: [],
  title: "教师管理"
});

export const mutations = {
  /**
   * @function 保存当前页面title
   * @type {function}
   * @param {Object} state
   * @param {string} item
   * @description 在admins中点击左侧路由导航
   * 将点击的路由名称传进来 并在app bar中读取显示
   */
  setTitle(state, item) {
    state.title = item.title;
  },
  /**
   * @method 保存用户token
   * @param {Object} state
   * @param {string} token 登陆后获取到的用户标识
   */
  setToken(state, token) {
    state.token = token;
  },
  /**
   *
   * @function 获取用户对应的路由列表
   * @param {Object} state
   * @param {number} num
   * @description 根据登陆用户不同 选取对应的路由列表进行加载
   */
  setAdminRoute(state, num) {
    state.adminRoute = amdinRoutes[num - 1];
  },
  /**
   * @function 左侧路由导航高亮显示
   * @param {Object} state
   * @param {string} path
   * @description 每次进行刷新时  读取当前path控制相应的active
   * 展开对应的左侧navigator bar或高亮
   */
  navigationRouteActive(state, path) {
    state.adminRoute.forEach(element => {
      for (const i of element.children) {
        if (path.indexOf(i.to) > -1) {
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
