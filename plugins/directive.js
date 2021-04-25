import Vue from "vue";
// 获取用户角色, 接口返回或者cookie中获取
function getRole() {
  return $nuxt.$store.state.sessionStorage.admin;
}

// 注册一个全局自定义指令 `v-role`
Vue.directive("role", {
  inserted: (el, binding, vnode) => {
    // 从自定义指令中获取当前指令允许的权限
    let roles = binding.value;
    // 获取当前用户权限
    let role = getRole();
    // 如果没有权限就移除此节点
    if (!roles.includes(role)) {
      el.parentNode.removeChild(el);
    }
  }
});
