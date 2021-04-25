import overlays from "./overlays.vue";
import Vue from "vue";

const overlaysConstructor = Vue.extend(overlays);

function showOverlay(text, status) {
  const overlayDom = new overlaysConstructor({
    el: document.createElement("div"),
    data() {
      return {
        text: text,
        overlay: status
      };
    }
  });
  if (!status) {
    removeEl();
  } else {
    document.body.appendChild(overlayDom.$el);
  }
  overlayDom.$on("cancelOverlay", () => {
    removeEl();
  });

  function removeEl() {
    document.body.removeChild(overlayDom.$el);
    overlayDom.$destroy();
  }
}
function overlayReg() {
  Vue.prototype.$overlay = showOverlay;
}

export default overlayReg;
