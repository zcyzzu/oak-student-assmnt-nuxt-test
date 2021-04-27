<template>
  <div class="text-center mb-md-8 mt-4">
    <v-btn text color="error" @click="download">
      <v-icon>mdi-download</v-icon>
      点击下载上传模板</v-btn
    >
  </div>
</template>
<script>
import { exportStudent } from "~/domain/exportExcel";
export default {
  methods: {
    download() {
      exportStudent();
    }
  }
};
</script>
