import Vue from "vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
Vue.prototype.$XModal = VXETable.modal;
Vue.use(VXETable);
