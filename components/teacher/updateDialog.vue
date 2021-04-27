<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>更新教师信息</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="[v => !!v || '姓名为必填项！']"
              label="姓名"
              required
            ></v-text-field>

            <v-text-field
              v-model="tel"
              :rules="telRules"
              label="手机号"
              :counter="11"
              required
            ></v-text-field>
            <v-select
              v-model="grade"
              :items="gradeList"
              :rules="[v => !!v || '年级为必选项！']"
              label="年级"
              required
            ></v-select>
            <v-btn color="error" class="mr-4" @click="reset">
              清空
            </v-btn>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              更新
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["teacherInfo"],
  data() {
    return {
      dialog: false,
      valid: true,
      name: "",
      tel: "",
      grade: "",
      gradeList: [1, 2, 3, 4, 5, 6],
      telRules: [
        v => !!v || "手机号为必填项！",
        v => /^1[3456789]\d{9}$/.test(v) || "手机号格式错误！",
        v => (v && v.length == 11) || "手机号长度必须为11位！"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.tel, this.grade);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  watch: {
    teacherInfo(newVal) {
      this.name = newVal.name;
      this.tel = newVal.tel;
      this.grade = newVal.grade;
    },
    dialog(newVal) {
      !newVal ? this.$emit("clearTeacherInfo") : null;
    }
  }
};
</script>
<style lang="scss" scoped></style>
