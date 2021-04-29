import vue from "vue";
let that = vue.prototype;
export const state = () => ({
  status: "none",
  top: "0px",
  left: "0px",
  list: []
});

export const mutations = {
  updateRightMenuStatus(state, menuObj) {
    state.status = menuObj.status;
    state.top = menuObj.top;
    state.left = menuObj.left;
    state.list = menuObj.list;
  }
};

export const actions = {};
