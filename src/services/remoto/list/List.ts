import Base from "../base/Base";

class List extends Base {
  execute() {
    const data = localStorage.getItem("writerReportApp");

    if (data) {
      return JSON.parse(data);
    }
    return [];
  }
}

export default List;
