import { IPreventiva } from "@/types/types";
import Base from "../base/Base";

class GetRepPreventiveId extends Base {
  constructor(numberTicket: number) {
    super();
    this.numberTicket = numberTicket;
  }

  execute(): IPreventiva | null {
    // Recupera os dados do localStorage
    const storedData = localStorage.getItem("writerReportApp");

    // Verifica se existe algo armazenado
    if (!storedData) {
      return null; // Caso não tenha nada, retorna null ou outra abordagem
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

export default GetRepPreventiveId;
