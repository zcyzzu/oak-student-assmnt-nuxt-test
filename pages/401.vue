<template>
  <div id="box">
    <v-container class="fulHeight">
      <v-row no-gutters class="fulHeight">
        <v-col
          cols="12"
          offset-md="2"
          class="col-md-4 d-flex justify-center align-center"
        >
          <div>
            <h1 class="text-md-h2 text-h4 font-weight-bold text-center">
              Oops!
            </h1>
            <h2 class="mt-md-8 mt-2">你没有权限去该页面!</h2>
            <p class="mt-md-6 mt-2">你可以选择：</p>
            <ul class="">
              <li>
                <nuxt-link :to="fromRoute">返回</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="indexPage">去首页</nuxt-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" class="col-md-4 d-flex justify-center align-center">
          <v-img :src="errGif" contain width="313" height="428"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import errGif from "~/static/401.gif";
let fromPath;
export default {
  name: "401",
  data() {
    return {
      errGif: errGif + "?" + +new Date(),
      indexPage: "",
      fromRoute: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.indexPage = this.adminRoute[0].children[0].to;
      if (fromPath.split("/")[1]) {
        this.fromRoute = fromPath;
      } else {
        this.fromRoute = this.adminRoute[0].children[0].to;
      }
    });
  },
  computed: {
    ...mapState("localStorage", {
      adminRoute: "adminRoute"
    })
  },
  beforeRouteEnter(to, from, next) {
    fromPath = from.path;
    next();
  }
};
</script>
<style lang="scss" scoped>
#box {
  height: 100vh;
  width: 100vw;
}
.fulHeight {
  height: 100%;
}
</style>
