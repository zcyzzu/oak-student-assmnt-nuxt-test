<template>
  <div id="login" style="background:url('/signBg.jpeg') center/cover no-repeat">
    <v-container class="maxHeight d-flex align-center">
      <v-card
        id="card"
        :style="$vuetify.breakpoint.smAndDown ? 'width:350px' : 'width: 400px'"
        class="mx-auto pa-md-6 pa-4"
        elevation="10"
      >
        <v-card-title class="pa-0 d-flex align-center justify-center">
          账户登陆
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row no-gutters align="center" justify="center">
            <v-col cols="10" class="mt-6">
              <v-text-field
                outlined
                dense
                v-model="account"
                :rules="[accountRules]"
                :error-messages="accountMsg"
                label="账号"
                required
                @keydown.enter="validate"
              ></v-text-field>
              <v-text-field
                outlined
                dense
                v-model="password"
                :rules="[passwordRules]"
                :error-messages="passwordMsg"
                label="密码"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                required
                @keydown.enter="validate"
              ></v-text-field>

              <div class="d-flex justify-center">
                <v-btn
                  width="40%"
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  登陆
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
/**
 * 自定义下拉选择区间组件
 * @module pages.login
 * @author zcy
 * @description 登陆组件
 *  */
export default {
  layout: "login",
  data: () => ({
    valid: true,
    showPassword: false,
    account: "school",
    accountMsg: "",
    accountRules: v => {
      if (v) {
        return true;
      } else {
        return "请输入账号！";
      }
    },
    password: "asdasdasd",
    passwordMsg: "",
    passwordRules: v => {
      if (v) {
        return true;
      } else {
        return "请输入密码";
      }
    }
  }),
  methods: {
    /**
     * 解释
     * @function 登陆函数
     * @param {v} 无参数
     */
    validate(v) {
      if (this.$refs.form.validate()) {
        if (this.account === "school") {
          this.notify({
            content: "学校管理员登陆成功"
          });
          this.saveAccountInfoForLogin(1);
        } else if (this.account === "teacher") {
          this.notify({
            content: "班级管理员登陆成功"
          });
          this.saveAccountInfoForLogin(2);
        } else {
          this.notify({
            content: "普通教师登陆成功"
          });
          this.saveAccountInfoForLogin(3);
        }
      } else {
        v.target.blur();
      }
    },
    saveAccountInfoForLogin(num) {
      this.setToken(num);
      this.setAdmin(num);
      this.setAdminRoute(num);
      this.$router.push(this.adminRoute[0].children[0].to);
    },
    ...mapMutations("localStorage", {
      setToken: "setToken",
      setAdminRoute: "setAdminRoute"
    }),
    ...mapMutations("sessionStorage", {
      setAdmin: "setAdmin"
    })
  },
  computed: {
    ...mapState("localStorage", {
      adminRoute: "adminRoute"
    })
  },
  watch: {
    account(newVal, oldVal) {
      this.account ? (this.accountMsg = "") : (this.accountMsg = "请输入账号!");
    },
    password() {
      this.password
        ? (this.passwordMsg = "")
        : (this.passwordMsg = "请输入密码!");
    }
  }
};
</script>
