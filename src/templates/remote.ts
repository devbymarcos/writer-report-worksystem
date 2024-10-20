import { formatDate } from "@/functions/formatDate";
import { IRemotoTemplate } from "./types";

export function remoteTemplate(text: IRemotoTemplate) {
  return `    
    Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
    Data: ${formatDate(String(text.date))}
    Horário: ${text.timeStart} as ${text.timeStop}
    Técnico: Marcos Lopes 
    Tipo: Preventiva
    Acompanhou:

    1 - Descrição das ações realizadas:

    ${text.completedActions}
    
    2 -  Pendencias ou próximas ações:

    ${text.pendingOrNextActions}
`;
}
