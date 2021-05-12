<template>
  <div>
    <v-dialog max-width="500" v-model="dialog">
      <v-card>
        <v-card-title>更新教师状态</v-card-title>
        <v-card-text>
          <v-switch
            v-model="status"
            :label="`${status ? '在职' : '休假'}`"
          ></v-switch>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="primary" @click="dialog = false">取消</v-btn>
          <v-btn text color="primary" @click="updateStatus">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "",
  components: {},
  props: ["teacherStatus"],
  data() {
    return {
      dialog: false,
      status: false
    };
  },
  mounted() {},
  methods: {
    updateStatus() {
      console.log("更新教师状态", this.status);
      this.dialog = false;
    }
  },
  watch: {
    teacherStatus(newVal) {
      this.status = this.teacherStatus;
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped></style>
