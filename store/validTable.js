export const state = () => ({
  statusList: [
    { label: "休假", value: "休假" },
    { label: "正常", value: "正常" }
  ],
  gradeList: [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" }
  ],
  admittedList: [
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" }
  ],
  validRules: {
    name: [{ required: true, message: "该项目为必填！" }],
    className: [{ required: true, message: "该项目为必填！" }],
    tel: [
      { required: true, message: "该项目为必填！" },
      {
        pattern: /^1[3456789]\d{9}$/,
        message: "手机号格式错误"
      }
    ]
  }
});

export const mutations = {};

export const actions = {};
