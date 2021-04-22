import Notification from "./notifications.vue";
import notify from "./instance";

export default Vue => {
  Vue.component(Notification.name, Notification);
  Vue.prototype.notify = notify;
};
