<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>更新班级信息</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="[v => !!v || '班级名称为必填项！']"
              label="班级名称"
              required
            ></v-text-field>

            <v-text-field
              v-model.number="num"
              :rules="numRules"
              label="班级序号"
              required
            ></v-text-field>
            <v-select
              v-model="grade"
              :items="gradeList"
              :rules="[v => !!v || '年级为必选项！']"
              label="年级"
              required
            ></v-select>
            <v-select
              v-model="admitted"
              :items="admittedList"
              label="入学年份"
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
  props: ["classInfo"],
  data() {
    return {
      dialog: false,
      valid: true,
      name: "",
      num: "",
      grade: "",
      admitted: "",
      gradeList: [1, 2, 3, 4, 5, 6],
      admittedList: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      numRules: [
        v => !!v || "班级序号为必填项！",
        v => /^[0-9]*$/.test(v) || "班级序号必须为数字！"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.num, this.grade, this.admitted);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  watch: {
    classInfo(newVal) {
      this.name = newVal.name;
      this.num = newVal.num;
      this.grade = newVal.grade;
      this.admitted = newVal.admitted;
    },
    dialog(newVal) {
      !newVal ? this.$emit("clearClassInfo") : null;
    }
  }
};
</script>
<style lang="scss" scoped></style>
