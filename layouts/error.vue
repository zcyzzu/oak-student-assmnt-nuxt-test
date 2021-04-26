<template>
  <v-app dark>
    <div v-if="error.statusCode === 404" id="maxSize">
      <v-container class="fulHeight">
        <v-row no-gutters class="fulHeight">
          <v-col
            cols="10"
            offset="3"
            class="col-md-4 d-flex justify-center align-center"
          >
            <div class="imgParent">
              <v-img width="600" src="/404/404.png"></v-img>
              <v-img width="80" class="left" src="/404/404_cloud.png"></v-img>
              <v-img width="62" class="right" src="/404/404_cloud.png"></v-img>
            </div>
          </v-col>
          <v-col cols="12" class=" col-md-4 d-flex justify-center align-center">
            <div>
              <h1 class="text-md-h2 text-h4 font-weight-bold primary--text">
                Oops!
              </h1>
              <h2>The webmaster said that you can not enter this page...</h2>
              <p>
                Please check that the URL you entered is correct, or click the
                button below to return to the homepage.
              </p>
              <v-btn :to="homePage">back to home</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
      homePage: ""
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  mounted() {
    this.homePage = this.adminRoute[0].children[0].to;
  },
  computed: {
    ...mapState("localStorage", {
      adminRoute: "adminRoute"
    })
  }
};
</script>

<style scoped>
#maxSize {
  width: 100vw;
  height: 100vh;
}
.fulHeight {
  height: 100%;
}
.imgParent {
  position: relative;
}
.left {
  position: absolute;
  width: 80px;
  top: 17px;
  left: 220px;
  opacity: 0;
  animation-name: cloudLeft;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
@keyframes cloudLeft {
  0% {
    top: 17px;
    left: 220px;
    opacity: 0;
  }
  20% {
    top: 33px;
    left: 188px;
    opacity: 1;
  }
  80% {
    top: 81px;
    left: 92px;
    opacity: 1;
  }
  100% {
    top: 97px;
    left: 60px;
    opacity: 0;
  }
}
.right {
  position: absolute;
  width: 62px;
  top: 87px;
  left: 200px;
  opacity: 0;
  animation-name: cloudRight;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
@keyframes cloudRight {
  0% {
    top: 100px;
    left: 500px;
    opacity: 0;
  }
  20% {
    top: 120px;
    left: 460px;
    opacity: 1;
  }
  80% {
    top: 180px;
    left: 340px;
    opacity: 1;
  }
  100% {
    top: 200px;
    left: 300px;
    opacity: 0;
  }
}
</style>
