<template>
  <div>
    <v-overlay opacity="0.8" :value="overlay">
      <div id="box">
        <v-progress-circular indeterminate size="32"></v-progress-circular>
        <h3 style="margin-left:16px">{{ text }}</h3>
      </div>
      <div style="text-align:center">
        <v-btn style="color:white;background:red" @click="cancelOverlay"
          >取消</v-btn
        >
      </div>
    </v-overlay>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    cancelOverlay() {
      this.$emit("cancelOverlay");
    }
  }
};
</script>
<style lang="scss" scoped>
#box {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
