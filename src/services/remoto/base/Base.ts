class Base {
  type!: string;
  numberTicket!: number;
  titleTicket!: string;
  date!: Date; // Alterado para string para compatibilidade com input type="date"
  timeStart!: string;
  timeStop!: string;
  nameBusiness!: string;
  completedActions!: string;
  pendingOrNextActions!: string;
}

export default Base;
