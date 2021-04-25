export default function({ app, store, error }) {
  app.router.beforeEach((to, from, next) => {
    if (store.state.localStorage.token) {
      if (store.state.sessionStorage.admin) {
        next();
        //已经登陆 有用户信息 只需要判断to.path是否在adminRoute中
      } else {
        //有token 没有用户信息 表示曾经登陆 又一次进入了
        //此时 执行getUser 获取用户信息
        //将用户信息存至sessionStorage中
        //根据用户信息生成路由列表 adminRoute
        //判断to.path是否在adminRoute中
        store.commit("sessionStorage/setAdmin", 1);
        store.commit("localStorage/setAdminRoute", 0);
        next();
      }
    } else {
      //token 为null 跳转至登陆页面
      if (to.path === "/login") {
        next();
      } else {
        next("/login");
      }
    }
  });
}
