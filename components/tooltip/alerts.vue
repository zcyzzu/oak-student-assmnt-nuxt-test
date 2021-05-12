<template>
  <div id="box">
    <div id="card">
      <h2>警告</h2>
      <p>{{ content }}</p>
      <div>
        <button @click="cancel">取消</button>
        <button @click="enter">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "alerts",
  data() {
    return {
      show: true,
      content: "你确定要进行此操作吗？"
    };
  },
  methods: {
    cancel() {
      this.a_cancel && this.a_cancel();
      this.show = false;
    },
    enter() {
      this.a_enter && this.a_enter();
      this.show = false;
    }
  },
  watch: {
    show(cur, old) {
      // 通过监控data里的show属性  弹框有三个事件（右上角取消  确定按钮  取消按钮）
      // 每个事件写了 this.show = false
      // 当弹框出现的时候 点击任何一个事件  都会触发这里的监控事件  将页面上的弹框Dom移除
      if (!cur) {
        let tip_alert = document.getElementById("box");
        tip_alert.parentNode.removeChild(tip_alert);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
#card {
  position: relative;
  width: 400px;
  background: #eee;
  border-radius: 5px;
  h2 {
    text-align: center;
    padding: 5px 0;
  }
  p {
    margin-bottom: 0;
    padding: 5px 0;
    text-align: center;
  }
  div {
    text-align: right;
    padding: 10px 15px;

    button {
      margin: 0 5px;
      transition: all 0.3s;
    }
    button:hover {
      background: coral;
      border-radius: 5px;
      color: white;
    }
  }
}
</style>
