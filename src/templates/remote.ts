import { formatDate } from "@/functions/formatDate";
import { IRemoto } from "@/types/types";

export function remoteTemplate(text: IRemoto) {
  return `    
Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
Data: ${formatDate(String(text.date))}
Horário: ${text.timeStart} as ${text.timeStop}
Técnico: ${text.operator}
Tipo: Atendimento Remoto


1 - Descrição das ações realizadas:

${text.completedActions}
    
2 - Pendencias ou próximas etapas:

${text.pendingOrNextActions}
`;
}
