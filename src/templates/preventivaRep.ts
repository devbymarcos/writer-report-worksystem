import { formatDate } from "@/functions/formatDate";
import { IPreventiva } from "@/types/types";

export function preventivaRepTemplate(text: IPreventiva) {
  return `    
Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
Data: ${formatDate(String(text.date))}
Horário: ${text.timeStart} as ${text.timeStop}
Técnico: Marcos Lopes 
Tipo: Preventiva
Acompanhou:

1 - Descrição das ações realizadas:

Empresa contratante: ${text.nameBusiness}
Estado de Funcionamento: ${text.stateOperation}
Marca do Relógio: ${text.brand}
IP: ${text.ip}
Número de série: ${text.ns}
Lacre Fiscal: ${text.fiscalSeal}
=====================
## Ações de Limpeza: 
Estética e Externa (Silicone): ${text.cleaningExternal}
Compartimento de bobina: ${text.cleaningPrinter}
Cabeça de impressão: ${text.cleaningSpoolCompartment}
=====================
## Vistoria de recursos essenciais
Display:  ${text.inspectionDisplay}
Impressor: :  ${text.inspectionPrinter}
Teclado:  ${text.inspectionKeyboard}
Leitores (carão e biometria): ${text.inspectionReadersCardAndBiometrics}
Guilhotina ou serrilha: : ${text.inspectionCutterOrPerforator}
=====================
## Condições de Instalação
Fixação do equipamento: ${text.installationConditionsEquipmentMounting}
Organização cabos de rede/energia: ${
    text.installationConditionsCableOrganization
  }
Canaletas e Eletrodutos: ${text.installationConditionsConduitsAndRaceways}
Exposição a Chuva/Sol:  ${text.installationConditionsExposureToRainOrSun}
=====================
## Entrevista com Rh
Funcionamento do equipamento: ${text.hrInterviewEquipmentFunctioning}
Dúvidas no software: ${text.hrInterviewSoftwareQuestions}
=====================
Numero lacre Work: ${text.sealWork}
=====================
Descreva as não conformidades:  ${text.nonConformitiesDescription}
=====================
Sugestões de melhorias:  ${text.improvementSuggestions}
`;
}
