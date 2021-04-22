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
              <v-list-item-title v-text="child.title"></v-list-item-title>
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
      miniVariant: false
    };
  },
  created() {
    this.navigationRouteActive(this.$route.path);
  },
  methods: {
    ...mapMutations({
      setTitle: "setTitle",
      navigationRouteActive: "navigationRouteActive"
    })
  },
  computed: {
    ...mapState({
      title: "title",
      adminRoute: "adminRoute"
    })
  }
};
</script>
