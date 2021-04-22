export default function({ app, store, error }) {
  app.router.beforeEach((to, from, next) => {
    next();
  });
}
