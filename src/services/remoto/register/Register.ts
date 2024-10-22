import Base from "../base/Base";
import { IRemoto } from "@/types/types";

class Register extends Base {
  constructor({
    type,
    operator,
    numberTicket,
    titleTicket,
    date,
    timeStart,
    timeStop,
    nameBusiness,
    completedActions,
    pendingOrNextActions,
  }: IRemoto) {
    super();
    this.type = type;
    this.operator = operator;
    this.numberTicket = numberTicket;
    this.titleTicket = titleTicket;
    this.date = date;
    this.timeStart = timeStart;
    this.timeStop = timeStop;
    this.nameBusiness = nameBusiness;
    this.completedActions = completedActions;
    this.pendingOrNextActions = pendingOrNextActions;
  }

  execute() {
    const existingRecords = JSON.parse(
      localStorage.getItem("writerReportApp") || "[]"
    );

    // Verifica se existe um objeto com o mesmo numberTicket
    const updatedRecords = existingRecords.filter(
      (record: any) => record.numberTicket !== this.numberTicket
    );

    updatedRecords.push({
      type: this.type,
      operator: this.operator,
      numberTicket: this.numberTicket,
      titleTicket: this.titleTicket,
      date: this.date,
      timeStart: this.timeStart,
      timeStop: this.timeStop,
      nameBusiness: this.nameBusiness,
      completedActions: this.completedActions,
      pendingOrNextActions: this.pendingOrNextActions,
    });

    localStorage.setItem("writerReportApp", JSON.stringify(updatedRecords));
  }
}

export default Register;
