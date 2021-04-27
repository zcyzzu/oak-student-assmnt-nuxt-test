import Excel from "exceljs";
import FileSaver from "file-saver";
export const exportClass = () => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("上传模板");
  sheet.getRow(1).values = ["序号", "班级名称", "年级", "班级序号", "入学年份"];
  sheet.columns = [
    { key: "序号", width: 20 },
    { key: "班级名称", width: 20 },
    { key: "年级", width: 20 },
    { key: "班级序号", width: 20 },
    { key: "入学年份", width: 20 }
  ];
  for (let i = 1; i < 6; i++) {
    sheet.addRow({
      序号: i,
      班级名称: "名称" + i,
      年级: i,
      班级序号: i,
      入学年份: 2020
    });
  }
  workbook.xlsx.writeBuffer().then(buffer => {
    const data = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });
    FileSaver.saveAs(data, "批量创建班级模板.xlsx");
  });
};

export const exportTeacher = () => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("上传模板");
  sheet.getRow(1).values = ["序号", "手机号", "姓名", "年级", "密码"];
  sheet.columns = [
    { key: "序号", width: 20 },
    { key: "手机号", width: 20 },
    { key: "姓名", width: 20 },
    { key: "年级", width: 20 },
    { key: "密码", width: 20 }
  ];
  for (let i = 1; i < 6; i++) {
    sheet.addRow({
      序号: i,
      手机号: "132XXXXXXXX",
      姓名: "姓名",
      年级: i,
      密码: "password"
    });
  }
  workbook.xlsx.writeBuffer().then(buffer => {
    const data = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });
    FileSaver.saveAs(data, "批量创建教师模板.xlsx");
  });
};

export const exportStudent = () => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("上传模板");
  sheet.getRow(1).values = [
    "序号",
    "手机号",
    "姓名",
    "年级",
    "密码",
    "班级序号",
    "班级名称",
    "入学年份"
  ];
  sheet.columns = [
    { key: "序号", width: 20 },
    { key: "手机号", width: 20 },
    { key: "姓名", width: 20 },
    { key: "年级", width: 20 },
    { key: "密码", width: 20 },
    { key: "班级序号", width: 20 },
    { key: "班级名称", width: 20 },
    { key: "入学年份", width: 20 }
  ];
  for (let i = 1; i < 6; i++) {
    sheet.addRow({
      序号: i,
      手机号: "132XXXXXXXX",
      姓名: "姓名",
      年级: i,
      密码: "password",
      班级序号: 9527,
      班级名称: "一年级二班",
      入学年份: 2020
    });
  }
  workbook.xlsx.writeBuffer().then(buffer => {
    const data = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });
    FileSaver.saveAs(data, "批量创建学生/家长模板.xlsx");
  });
};
