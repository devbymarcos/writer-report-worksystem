class Base {
  type!: string;
  operator!: string;
  numberTicket!: number;
  titleTicket!: string;
  date!: string; // Alterado para string para compatibilidade com input type="date"
  timeStart!: string;
  timeStop!: string;
  nameBusiness!: string;
  stateOperation!: string;
  brand!: string;
  ip!: string;
  ns!: number;
  fiscalSeal!: number;
  cleaningExternal!: string;
  cleaningPrinter!: string;
  cleaningSpoolCompartment!: string;
  inspectionDisplay!: string;
  inspectionPrinter!: string;
  inspectionKeyboard!: string;
  inspectionReadersCardAndBiometrics!: string;
  inspectionCutterOrPerforator!: string;
  installationConditionsEquipmentMounting!: string;
  installationConditionsCableOrganization!: string;
  installationConditionsConduitsAndRaceways!: string;
  installationConditionsExposureToRainOrSun!: string;
  installationConditionsCutterOrPerforator!: string;
  hrInterviewEquipmentFunctioning!: string;
  hrInterviewSoftwareQuestions!: string;
  sealNumber!: string;
  sealWork!: string;
  nonConformitiesDescription!: string;
  improvementSuggestions!: string;
}

export default Base;
