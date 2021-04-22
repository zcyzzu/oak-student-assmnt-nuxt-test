import Notification from "./notifications.vue";

export default {
  extends: Notification,
  computed: {
    style() {
      return {
        position: "fixed",
        right: "20px",
        zIndex: 999,
        top: `${this.verticalOffset}px`,
        borderRadius: "5px"
      };
    }
  },
  mounted() {
    this.createTimer();
  },
  methods: {
    createTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false;
        }, this.autoClose);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight;
    }
  },
  beforeDestroy() {
    this.clearTimer();
  },
  data() {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    };
  }
};
