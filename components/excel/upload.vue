<template>
  <div>
    <input
      type="file"
      accept=".xlsx, .xls"
      class="excel-upload-input"
      ref="excel-upload-input"
      @change="handleClick"
    />
    <div
      class="drop d-flex justify-center align-center mx-auto"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      拖动Excel文件或
      <v-btn text size="mini" type="primary" @click="handleUpload">
        <v-icon>mdi-upload</v-icon>
        点击上传
      </v-btn>
    </div>
    <div id="test"></div>
  </div>
</template>
<script>
import Excel from "exceljs";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleUpload(e) {
      this.$refs["excel-upload-input"].click();
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]
      if (!rawFile) return;
      this.upload(rawFile);
    },
    upload(rawFile) {
      this.$refs["excel-upload-input"].value = null; // fix can't select the same excel
      const before = this.beforeUpload(rawFile);
      if (before) {
        this.readerData(rawFile);
      }
    },
    async readerData(rawFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
          let arrayBuffer = reader.result;
          let workbook = new Excel.Workbook();
          workbook.xlsx.load(arrayBuffer).then(function(workbook) {
            let result = "";
            //TODO
            //获取到了上传的文件信息  之后上传？如何（需要吗？）展示？
            workbook.worksheets.forEach(function(sheet) {
              sheet.eachRow(function(row, rowNumber) {
                result += row.values + " | \n";
              });
            });
            document.querySelector("#test").innerHTML = result;
          });
        };
        reader.readAsArrayBuffer(rawFile);
      });
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length !== 1) {
        this.notify({
          content: "Only support uploading one file!",
          type: "warning"
        });
        return;
      }
      const rawFile = files[0]; // only use files[0]
      if (!this.isExcel(rawFile)) {
        this.notify({
          content: "Only supports upload .xlsx, .xls, .csv suffix files!",
          type: "error"
        });
        return false;
      }
      this.upload(rawFile);
      e.stopPropagation();
      e.preventDefault();
    },
    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.notify({
        content: "Please do not upload files larger than 1m in size.",
        type: "error"
      });
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
.drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  font-size: 24px;
  border-radius: 5px;
  color: #bbb;
}
</style>
