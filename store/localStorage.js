import { amdinRoutes } from "~/domain/permission";
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
  }
};

export const actions = {};
