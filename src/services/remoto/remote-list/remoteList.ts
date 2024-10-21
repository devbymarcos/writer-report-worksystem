import Base from "../base/Base";
import { IRemoto } from "@/types/types";

class RemoteList extends Base {
  constructor(numberTicket: number) {
    super();
    this.numberTicket = numberTicket;
  }

  execute(): IRemoto {
    // Recupera os dados do localStorage
    const storedData = localStorage.getItem("writerReportApp");

    // Verifica se existe algo armazenado
    if (!storedData) {
      return {
        type: "",
        operator: "",
        numberTicket: 0,
        titleTicket: "",
        date: new Date(),
        timeStart: "",
        timeStop: "",
        nameBusiness: "",
        completedActions: "",
        pendingOrNextActions: "",
      };
    }

    // Converte o JSON armazenado de volta para um array de objetos
    const ticketsArray = JSON.parse(storedData);

    // Filtra para encontrar o objeto com o numberTicket correspondente
    const ticket = ticketsArray.find(
      (item: any) => item.numberTicket === this.numberTicket
    );

    // Retorna o objeto encontrado ou null se não encontrar
    return ticket || null;
  }
}

export default RemoteList;
