export default function({ app, store, error }) {
  app.router.beforeEach((to, from, next) => {
    if (to.path === "/") {
      next("/teacherManagement/teacherManagement");
    } else {
      next();
    }
  });
}
