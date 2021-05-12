import Vue from "vue";
import alerts from "./alerts.vue";
const AlertContent = Vue.extend(alerts);

const alertModel = options => {
  let alertDom = new AlertContent({
    el: document.createElement("div") //将Alert组件挂载到新创建的div上
  });
  document.body.appendChild(alertDom.$el);
  alertDom.content = options.content;
  alertDom.a_cancel = options.cancel || null;
  alertDom.a_enter = options.enter || null;
};

export default alertModel;
