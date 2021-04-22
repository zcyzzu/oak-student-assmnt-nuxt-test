<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :mini-variant="miniVariant"
      color="#304156"
      :clipped="clipped"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-btn
        icon
        v-if="$vuetify.breakpoint.mdAndUp"
        @click.stop="isMimiVariant"
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
    </v-app-bar>
    <v-main>
      <v-container>
        <transition name="translateX">
          <nuxt />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      miniVariant: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      title: "标题"
    };
  },
  created() {
    this.miniVariant = this.mini;
  },
  methods: {
    isMimiVariant() {
      this.miniVariant = !this.miniVariant;
    }
  },
  computed: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false;
        case "md":
          return true;
        default:
          return true;
      }
    }
  },
  watch: {
    mini(newVal) {
      this.miniVariant = newVal;
    }
  }
};
</script>
