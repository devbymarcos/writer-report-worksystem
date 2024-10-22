import Base from "../base/Base";
import { IPreventiva } from "@/types/types";

class Register extends Base {
  constructor({
    type,
    numberTicket,
    titleTicket,
    date,
    timeStart,
    timeStop,
    nameBusiness,
    stateOperation,
    brand,
    ip,
    ns,
    fiscalSeal,
    cleaningExternal,
    cleaningPrinter,
    cleaningSpoolCompartment,
    inspectionDisplay,
    inspectionPrinter,
    inspectionKeyboard,
    inspectionReadersCardAndBiometrics,
    inspectionCutterOrPerforator,
    installationConditionsEquipmentMounting,
    installationConditionsCableOrganization,
    installationConditionsConduitsAndRaceways,
    installationConditionsExposureToRainOrSun,
    hrInterviewEquipmentFunctioning,
    hrInterviewSoftwareQuestions,
    sealWork,
    nonConformitiesDescription,
    improvementSuggestions,
  }: IPreventiva) {
    super();
    this.type = type;
    this.numberTicket = numberTicket;
    this.titleTicket = titleTicket;
    this.date = date;
    this.timeStart = timeStart;
    this.timeStop = timeStop;
    this.nameBusiness = nameBusiness;
    this.stateOperation = stateOperation;
    this.brand = brand;
    this.ip = ip;
    this.ns = ns;
    this.fiscalSeal = fiscalSeal;
    this.cleaningExternal = cleaningExternal;
    this.cleaningPrinter = cleaningPrinter;
    this.cleaningSpoolCompartment = cleaningSpoolCompartment;
    this.inspectionDisplay = inspectionDisplay;
    this.inspectionPrinter = inspectionPrinter;
    this.inspectionKeyboard = inspectionKeyboard;
    this.inspectionReadersCardAndBiometrics =
      inspectionReadersCardAndBiometrics;
    this.inspectionCutterOrPerforator = inspectionCutterOrPerforator;
    this.installationConditionsEquipmentMounting =
      installationConditionsEquipmentMounting;
    this.installationConditionsCableOrganization =
      installationConditionsCableOrganization;
    this.installationConditionsConduitsAndRaceways =
      installationConditionsConduitsAndRaceways;
    this.installationConditionsExposureToRainOrSun =
      installationConditionsExposureToRainOrSun;
    this.hrInterviewEquipmentFunctioning = hrInterviewEquipmentFunctioning;
    this.hrInterviewSoftwareQuestions = hrInterviewSoftwareQuestions;
    this.sealWork = sealWork;
    this.nonConformitiesDescription = nonConformitiesDescription;
    this.improvementSuggestions = improvementSuggestions;
  }

  execute() {
    const existingRecords = JSON.parse(
      localStorage.getItem("writerReportApp") || "[]"
    );

    const updatedRecords = existingRecords.filter(
      (record: any) => record.numberTicket !== this.numberTicket
    );

    updatedRecords.push({
      type: this.type,
      numberTicket: this.numberTicket,
      titleTicket: this.titleTicket,
      date: this.date,
      timeStart: this.timeStart,
      timeStop: this.timeStop,
      nameBusiness: this.nameBusiness,
      stateOperation: this.stateOperation,
      brand: this.brand,
      ip: this.ip,
      ns: this.ns,
      fiscalSeal: this.fiscalSeal,
      cleaningExternal: this.cleaningExternal,
      cleaningPrinter: this.cleaningPrinter,
      cleaningSpoolCompartment: this.cleaningSpoolCompartment,
      inspectionDisplay: this.inspectionDisplay,
      inspectionPrinter: this.inspectionPrinter,
      inspectionKeyboard: this.inspectionKeyboard,
      inspectionReadersCardAndBiometrics:
        this.inspectionReadersCardAndBiometrics,
      inspectionCutterOrPerforator: this.inspectionCutterOrPerforator,
      installationConditionsEquipmentMounting:
        this.installationConditionsEquipmentMounting,
      installationConditionsCableOrganization:
        this.installationConditionsCableOrganization,
      installationConditionsConduitsAndRaceways:
        this.installationConditionsConduitsAndRaceways,
      installationConditionsExposureToRainOrSun:
        this.installationConditionsExposureToRainOrSun,
      hrInterviewEquipmentFunctioning: this.hrInterviewEquipmentFunctioning,
      hrInterviewSoftwareQuestions: this.hrInterviewSoftwareQuestions,
      sealNumber: this.sealNumber,
      sealWork: this.sealWork,
      nonConformitiesDescription: this.nonConformitiesDescription,
      improvementSuggestions: this.improvementSuggestions,
    });

    localStorage.setItem("writerReportApp", JSON.stringify(updatedRecords));
  }
}

export default Register;
