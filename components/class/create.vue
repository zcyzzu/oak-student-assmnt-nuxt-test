<template>
  <v-form ref="form" class="mt-md-8 mt-4" v-model="valid" lazy-validation>
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red">*</v-btn>
        <v-text-field
          v-model="name"
          :rules="[v => !!v || '班级名称为必填项！']"
          label="班级名称"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red">*</v-btn>
        <v-select
          v-model="grade"
          :items="gradeList"
          :rules="[v => !!v || '年级为必选项！']"
          label="年级"
          required
        ></v-select>
      </v-col>
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red">*</v-btn>
        <v-text-field
          v-model.number="num"
          :rules="numRules"
          label="班级序号"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red"></v-btn>
        <v-select
          v-model="admitted"
          :items="admittedList"
          label="入学年份"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn color="error" text class="mr-4" @click="reset">
          清空
        </v-btn>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
          text
        >
          创建
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: null,
    num: null,
    admitted: "",
    grade: null,
    gradeList: [1, 2, 3, 4, 5, 6],
    admittedList: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    numRules: [
      v => !!v || "班级序号为必填项！",
      v => /^[0-9]*$/.test(v) || "班级序号必须为数字！"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.name, typeof this.num, this.grade, this.admitted);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  watch: {}
};
</script>
