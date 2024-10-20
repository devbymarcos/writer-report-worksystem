import Base from "../base/Base";
import { IRegister } from "../base/types";

class ListItem extends Base {
  constructor(numberTicket: number) {
    super();
    this.numberTicket = numberTicket;
  }

  execute(): IRegister {
    // Recupera os dados do localStorage
    const storedData = localStorage.getItem("writerReportApp");

    // Verifica se existe algo armazenado
    if (!storedData) {
      return {
        numberTicket: 0,
        titleTicket: "",
        date: new Date(),
        timeStart: "",
        timeStop: "",
        nameBusiness: "",
        stateOperation: "",
        brand: "",
        ip: "",
        ns: 0,
        fiscalSeal: 0,
        cleaningExternal: "",
        cleaningPrinter: "",
        cleaningSpoolCompartment: "",
        inspectionDisplay: "",
        inspectionPrinter: "",
        inspectionKeyboard: "",
        inspectionReadersCardAndBiometrics: "",
        inspectionCutterOrPerforator: "",
        installationConditionsEquipmentMounting: "",
        installationConditionsCableOrganization: "",
        installationConditionsConduitsAndRaceways: "",
        installationConditionsExposureToRainOrSun: "",
        hrInterviewEquipmentFunctioning: "",
        hrInterviewSoftwareQuestions: "",
        sealNumber: "",
        nonConformitiesDescription: "",
        improvementSuggestions: "",
      }; // Caso não tenha nada, retorna null ou outra abordagem
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

export default ListItem;
