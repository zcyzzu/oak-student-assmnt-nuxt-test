export const state = () => ({
  title: "教师管理",
  adminRoute: [
    {
      icon: "mdi-account",
      title: "教师管理",
      active: false,
      children: [
        {
          to: "/teacherManagement/teacherManagement",
          title: "老师信息"
        }
      ]
    },
    {
      icon: "mdi-border-all",
      title: "班级管理",
      active: false,
      children: [
        {
          to: "/classManagement/classManagement",
          title: "班级信息"
        }
      ]
    },
    {
      icon: "mdi-calendar-text",
      title: "评测管理",
      active: false,
      children: [
        {
          to: "/reviewManagement/reviewManagement",
          title: "评测信息"
        }
      ]
    },
    {
      icon: "mdi-account-cog",
      title: "学生管理",
      active: false,
      children: [
        {
          to: "/studentManagement/studentManagement",
          title: "学生信息"
        }
      ]
    },
    {
      icon: "mdi-circle-slice-6",
      title: "统计管理",
      active: false,
      children: [
        {
          to: "/staticManagement/staticManagement",
          title: "统计信息"
        }
      ]
    },
    {
      icon: "mdi-chart-bubble",
      title: "认证与权限",
      active: false,
      children: [
        {
          to: "/permissionManagement/permissionManagement",
          title: "认证与权限信息"
        }
      ]
    }
  ]
});

export const mutations = {
  navigationRouteActive(state, path) {
    state.adminRoute.forEach(element => {
      for (const i of element.children) {
        if (i.to === path) {
          state.title = element.title;
          element.active = true;
          return;
        }
      }
    });
  },
  setTitle(state, item) {
    state.title = item.title;
  }
};

export const actions = {};
