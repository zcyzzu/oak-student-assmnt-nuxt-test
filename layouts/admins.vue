<template>
  <v-app>
    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="226"
      color="blue-grey lighten-2"
      app
    >
      <v-list>
        <v-list-group
          v-for="(item, index) in adminRoute"
          :key="index"
          :value="item.active"
          :prepend-icon="item.icon"
          color="#fff"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="text-subtitle-2"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in item.children"
            :key="child.title"
            :to="child.to"
            @click="setTitle(item)"
            exact
            qppend
          >
            <v-list-item-content>
              <v-list-item-title class="text-caption">{{
                child.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar id="appBar" :clipped-left="clipped" app>
      <v-btn
        icon
        v-if="$vuetify.breakpoint.mdAndUp"
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon
          >mdi-{{
            `format-indent-${miniVariant ? "increase" : "decrease"}`
          }}</v-icon
        >
      </v-btn>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-menu min-width="80" transition="scroll-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <div style="width:80px" class="text-center">
            <v-list-item-avatar class="ma-0" v-bind="attrs" v-on="on">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="(ele, index) in menuItems"
            :key="index"
            @click="avatar(index)"
            link
          >
            <v-list-item-title class="text-center">{{ ele }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container id="dateTable">
        <transition name="route">
          <nuxt />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      miniVariant: false,
      menuItems: ["设置", "登出"]
    };
  },
  mounted() {
    console.log(123486798);
    this.navigationRouteActive(this.$route.path);
  },
  methods: {
    ...mapMutations("localStorage", {
      setTitle: "setTitle",
      logout: "logout",
      avatar2setting: "avatar2setting",
      navigationRouteActive: "navigationRouteActive"
    }),
    avatar(index) {
      switch (index) {
        case 0:
          this.$router.push("/accountInfo/");
          this.avatar2setting();
          break;
        case 1:
          this.$router.push("/login");
          this.logout();
          break;
      }
    }
  },
  computed: {
    ...mapState("localStorage", {
      title: "title",
      adminRoute: "adminRoute"
    })
  }
};
</script>
