<template>
  <v-form ref="form" class="mt-md-8 mt-4" v-model="valid" lazy-validation>
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red">*</v-btn>
        <v-text-field
          v-model="tel"
          :rules="telRules"
          label="手机号"
          :counter="11"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="10" offset="1" class="col-md-5 d-flex align-center mx-2">
        <v-btn icon color="red">*</v-btn>
        <v-text-field
          v-model="name"
          :rules="[v => !!v || '姓名为必填项！']"
          label="姓名"
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
          v-model="pwd"
          :rules="[v => !!v || '密码为必填项！']"
          label="密码"
          required
        ></v-text-field>
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
    tel: "",
    pwd: "",
    grade: null,
    gradeList: [1, 2, 3, 4, 5, 6],
    telRules: [
      v => !!v || "手机号为必填项！",
      v => /^1[3456789]\d{9}$/.test(v) || "手机号格式错误！",
      v => (v && v.length == 11) || "手机号长度必须为11位！"
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.tel, this.grade, this.pwd);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
