<template>
  <div>
    <v-card
      elevation="0"
      color="#78909c"
      class="rounded-sm white--text mt-md-8 mt-4"
    >
      <v-card-title class="pa-1 px-4 text-subtitle-1">{{ title }}</v-card-title>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["title"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
