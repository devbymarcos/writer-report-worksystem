export interface IPreventiva {
  type: string;
  operator: string;
  numberTicket: number;
  titleTicket: string;
  date: Date;
  timeStart: string;
  timeStop: string;
  nameBusiness: string;
  stateOperation: string;
  brand: string;
  ip: string;
  ns: number;
  fiscalSeal: number;
  cleaningExternal: string;
  cleaningPrinter: string;
  cleaningSpoolCompartment: string;
  inspectionDisplay: string;
  inspectionPrinter: string;
  inspectionKeyboard: string;
  inspectionReadersCardAndBiometrics: string;
  inspectionCutterOrPerforator: string;
  installationConditionsEquipmentMounting: string;
  installationConditionsCableOrganization: string;
  installationConditionsConduitsAndRaceways: string;
  installationConditionsExposureToRainOrSun: string;
  hrInterviewEquipmentFunctioning: string;
  hrInterviewSoftwareQuestions: string;
  sealWork: string;
  nonConformitiesDescription: string;
  improvementSuggestions: string;
}

export interface IRemoto {
  type: string;
  operator: string;
  numberTicket: number;
  titleTicket: string;
  date: Date; // Alterado para string para compatibilidade com input type="date"
  timeStart: string;
  timeStop: string;
  nameBusiness: string;
  completedActions: string;
  pendingOrNextActions: string;
}
