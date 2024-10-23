"use client";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Register from "@/services/rep/register/Register";
import { useSearchParams, useRouter } from "next/navigation";
import GetRepPreventiveId from "@/services/rep/list-single/GetRepPreventiveId";
import { formatDateUI } from "@/functions/formatDate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageFormRep = () => {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const { push } = useRouter();
  const [operator, setOperator] = useState<string>("");
  const [numberTicket, setNumberTicket] = useState<number>();
  const [titleTicket, setTitleTicket] = useState<string>("");
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeStop, setTimeStop] = useState<string>("");
  const [nameBusiness, setNameBusiness] = useState<string>("");
  const [stateOperation, setStateOperation] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [ip, setIp] = useState<string>("");
  const [ns, setNs] = useState<number>();
  const [fiscalSeal, setFiscalSeal] = useState<number>();
  const [cleaningExternal, setCleaningExternal] = useState<string>("");
  const [cleaningPrinter, setCleaningPrinter] = useState<string>("");
  const [cleaningSpoolCompartment, setCleaningSpoolCompartment] =
    useState<string>("");
  const [inspectionDisplay, setInspectionDisplay] = useState<string>("");
  const [inspectionPrinter, setInspectionPrinter] = useState<string>("");
  const [inspectionKeyboard, setInspectionKeyboard] = useState<string>("");
  const [
    inspectionReadersCardAndBiometrics,
    setInspectionReadersCardAndBiometrics,
  ] = useState<string>("");
  const [inspectionCutterOrPerforator, setInspectionCutterOrPerforator] =
    useState<string>("");
  const [
    installationConditionsEquipmentMounting,
    setInstallationConditionsEquipmentMounting,
  ] = useState<string>("");
  const [
    installationConditionsCableOrganization,
    setInstallationConditionsCableOrganization,
  ] = useState<string>("");
  const [
    installationConditionsConduitsAndRaceways,
    setInstallationConditionsConduitsAndRaceways,
  ] = useState<string>("");
  const [
    installationConditionsExposureToRainOrSun,
    setInstallationConditionsExposureToRainOrSun,
  ] = useState<string>("");
  const [hrInterviewEquipmentFunctioning, setHrInterviewEquipmentFunctioning] =
    useState<string>("");
  const [hrInterviewSoftwareQuestions, setHrInterviewSoftwareQuestions] =
    useState<string>("");
  const [sealWork, setSealWork] = useState<string>("");
  const [nonConformitiesDescription, setNonConformitiesDescription] =
    useState<string>("");
  const [improvementSuggestions, setImprovementSuggestions] =
    useState<string>("");

  function loadData() {
    const ticketData = new GetRepPreventiveId(
      Number(searchParams.get("ticket"))
    ).execute();
    if (ticketData) {
      setTimeStart(ticketData.timeStart);
      setTimeStop(ticketData.timeStop);
      setOperator(ticketData.operator);
      setNumberTicket(ticketData.numberTicket);
      setTitleTicket(ticketData.titleTicket);
      setDate(ticketData.date);
      setTimeStart(ticketData.timeStart);
      setTimeStop(ticketData.timeStop);
      setNameBusiness(ticketData.nameBusiness);
      setStateOperation(ticketData.stateOperation);
      setBrand(ticketData.brand);
      setIp(ticketData.ip);
      setNs(ticketData.ns);
      setFiscalSeal(ticketData.fiscalSeal);
      setCleaningExternal(ticketData.cleaningExternal);
      setCleaningPrinter(ticketData.cleaningPrinter);
      setCleaningSpoolCompartment(ticketData.cleaningSpoolCompartment);
      setInspectionDisplay(ticketData.inspectionDisplay);
      setInspectionPrinter(ticketData.inspectionPrinter);
      setInspectionKeyboard(ticketData.inspectionKeyboard);
      setInspectionReadersCardAndBiometrics(
        ticketData.inspectionReadersCardAndBiometrics
      );
      setInspectionCutterOrPerforator(ticketData.inspectionCutterOrPerforator);
      setInstallationConditionsEquipmentMounting(
        ticketData.installationConditionsEquipmentMounting
      );
      setInstallationConditionsCableOrganization(
        ticketData.installationConditionsCableOrganization
      );
      setInstallationConditionsConduitsAndRaceways(
        ticketData.installationConditionsConduitsAndRaceways
      );
      setInstallationConditionsExposureToRainOrSun(
        ticketData.installationConditionsExposureToRainOrSun
      );
      setHrInterviewEquipmentFunctioning(
        ticketData.hrInterviewEquipmentFunctioning
      );
      setHrInterviewSoftwareQuestions(ticketData.hrInterviewSoftwareQuestions);
      setSealWork(ticketData.sealWork);
      setNonConformitiesDescription(ticketData.nonConformitiesDescription);
      setImprovementSuggestions(ticketData.improvementSuggestions);
    }
  }

  function timeStartexecute() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    setTimeStart(formattedTime);
  }

  function timeStopExecute() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    setTimeStop(formattedTime);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    console.log(formData.get("stateOperation"));
    const registerInstance = new Register({
      type: String(formData.get("type")),
      operator: String(formData.get("operator")),
      numberTicket: Number(formData.get("numberTicket")),
      titleTicket: String(formData.get("titleTicket")),
      date: String(formData.get("date")),
      timeStart: String(formData.get("timeStart")),
      timeStop: String(formData.get("timeStop")),
      nameBusiness: String(formData.get("nameBusiness")),
      stateOperation: String(formData.get("stateOperation")),
      brand: String(formData.get("brand")),
      ip: String(formData.get("ip")),
      ns: Number(formData.get("ns")),
      fiscalSeal: Number(formData.get("fiscalSeal")),
      cleaningExternal: String(formData.get("cleaningExternal")),
      cleaningPrinter: String(formData.get("cleaningPrinter")),
      cleaningSpoolCompartment: String(
        formData.get("cleaningSpoolCompartment")
      ),
      inspectionDisplay: String(formData.get("inspectionDisplay")),
      inspectionPrinter: String(formData.get("inspectionPrinter")),
      inspectionKeyboard: String(formData.get("inspectionKeyboard")),
      inspectionReadersCardAndBiometrics: String(
        formData.get("inspectionReadersCardAndBiometrics")
      ),
      inspectionCutterOrPerforator: String(
        formData.get("inspectionCutterOrPerforator")
      ),
      installationConditionsEquipmentMounting: String(
        formData.get("installationConditionsEquipmentMounting")
      ),
      installationConditionsCableOrganization: String(
        formData.get("installationConditionsCableOrganization")
      ),
      installationConditionsConduitsAndRaceways: String(
        formData.get("installationConditionsConduitsAndRaceways")
      ),
      installationConditionsExposureToRainOrSun: String(
        formData.get("installationConditionsExposureToRainOrSun")
      ),
      hrInterviewEquipmentFunctioning: String(
        formData.get("hrInterviewEquipmentFunctioning")
      ),
      hrInterviewSoftwareQuestions: String(
        formData.get("hrInterviewSoftwareQuestions")
      ),
      sealWork: String(formData.get("sealWork")),
      nonConformitiesDescription: String(
        formData.get("nonConformitiesDescription")
      ),
      improvementSuggestions: String(formData.get("improvementSuggestions")),
    });

    // Chame o método de execução
    registerInstance.execute();

    push(`/copy/${formData.get("type")}/${formData.get("numberTicket")}`);
  };

  useEffect(() => {
    if (searchParams.has("ticket")) {
      loadData();
    }
  }, []);

  return (
    <div className="px-4 pb-10 ">
      <div className="">
        <h1 className="font-bold text-lg">Preventiva Rep</h1>
      </div>
      <div className="flex gap-2 my-4">
        <Button
          onClick={timeStartexecute}
          variant="default"
          className="bg-green-500"
        >
          Start
        </Button>
        <Button onClick={timeStopExecute} variant="destructive">
          Stop
        </Button>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="type" value="rep" />
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">Dados Iniciais:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3 grid grid-cols-2 gap-2">
              <div className="">
                <Label>Hora Inicial:</Label>
                <div className="flex gap-2 items-center">
                  <Input
                    type="text"
                    name="timeStart"
                    onChange={(e) => {
                      setTimeStart(e.target.value);
                    }}
                    required
                    value={timeStart}
                  />
                </div>
              </div>
              <div className="">
                <Label>Hora Final:</Label>
                <div className="flex gap-2 items-center">
                  <Input
                    name="timeStop"
                    value={timeStop}
                    onChange={(e) => {
                      setTimeStop(e.target.value);
                    }}
                    required
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <Label>Numero ticket:</Label>
              <Input
                name="numberTicket"
                value={numberTicket}
                onChange={(e) => setNumberTicket(Number(e.target.value))}
                type="number"
              />
            </div>
            <div className="mb-3">
              <Label>Titulo ticket:</Label>
              <Input
                name="titleTicket"
                value={titleTicket}
                onChange={(e) => setTitleTicket(e.target.value)}
                type="text"
              />
            </div>
            <div className="mb-3">
              <Label>Data:</Label>
              <Input
                name="date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={formatDateUI(date)}
              />
            </div>
            <div className="mb-3">
              <Label>Técnico:</Label>
              <Input
                required
                name="operator"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                type="text"
              />
            </div>
            <div className="mb-3">
              <Label>Empresa Contratante:</Label>
              <Input
                name="nameBusiness"
                type="text"
                onChange={(e) => setNameBusiness(e.target.value)}
                value={nameBusiness}
              />
            </div>
            <div className="mb-3">
              <Label>Numero lacre Work:</Label>
              <Input
                name="sealWork"
                type="text"
                value={sealWork}
                onChange={(e) => setSealWork(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">
              Estado de Funcionamento:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <p className="mb-2 font-bold"></p>
              <Select
                id="options"
                name="stateOperation"
                value={stateOperation}
                onChange={(e: any) => setStateOperation(e.target.value)}
                className="w-full"
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="Em plena operação">Em plena operação</option>
                <option value="Em operação parcial">Em operação parcial</option>
                <option value="Desligado ou desativado">
                  Desligado ou desativado
                </option>
              </Select>
            </div>
            <div className="mb-3">
              <Label>Marca do Relógio:</Label>
              <Select
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full"
              >
                <option value="" disabled>
                  Escolha...
                </option>
                <option value="Madis">Madis</option>
                <option value="Proveu">Proveu</option>
                <option value="ControlID">ControlID</option>
              </Select>
            </div>
            <div className="mb-3">
              <Label>IP:</Label>
              <Input
                name="ip"
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Label>Numero de série:</Label>
              <Input
                name="ns"
                value={ns}
                type="number"
                onChange={(e) => setNs(Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <Label>Lacre Fiscal:</Label>
              <Input
                name="fiscalSeal"
                type="number"
                onChange={(e) => setFiscalSeal(Number(e.target.value))}
                value={fiscalSeal}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">Ações de Limpeza:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="mb-3">
                <p className="mb-2 ">Estética e Externa (Silicone):</p>
                <Select
                  name="cleaningExternal"
                  value={cleaningExternal}
                  onChange={(e) => setCleaningExternal(e.target.value)} // Atualiza o estado quando o valor muda
                  className="w-full" // Adiciona uma classe para estilo, se necessário
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Não Realizada">Não Realizada</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Compartimento de bobina:</p>
                <Select
                  name="cleaningPrinter"
                  value={cleaningPrinter}
                  onChange={(e: any) => setCleaningPrinter(e.target.value)}
                  className="w-full"
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Não Realizada">Não Realizada</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Cabeça de impressão:</p>
                <Select
                  name="cleaningSpoolCompartment"
                  value={cleaningSpoolCompartment}
                  onChange={(e: any) =>
                    setCleaningSpoolCompartment(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Não Realizada">Não Realizada</option>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">
              Vistoria de recursos essenciais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" ">
              <div className="mb-3">
                <p className="mb-2 ">Display:</p>
                <Select
                  name="inspectionDisplay"
                  value={inspectionDisplay}
                  onChange={(e: any) => setInspectionDisplay(e.target.value)}
                  className="w-full"
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Impressor:</p>
                <Select
                  name="inspectionPrinter"
                  value={inspectionPrinter}
                  onChange={(e: any) => setInspectionPrinter(e.target.value)}
                  className="w-full"
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Teclado:</p>
                <Select
                  name="inspectionKeyboard"
                  value={inspectionKeyboard}
                  onChange={(e: any) => setInspectionKeyboard(e.target.value)}
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Leitores (carão e biometria):</p>
                <Select
                  name="inspectionReadersCardAndBiometrics"
                  value={inspectionReadersCardAndBiometrics}
                  onChange={(e: any) =>
                    setInspectionReadersCardAndBiometrics(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="" disabled>
                    Escolha...
                  </option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Guilhotina ou serrilha:</p>
                <Select
                  name="inspectionCutterOrPerforator"
                  value={inspectionCutterOrPerforator}
                  onChange={(e: any) =>
                    setInspectionCutterOrPerforator(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">Condições de Instalação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="mb-3">
                <p className="mb-2 ">Fixação do equipamento:</p>
                <Select
                  name="installationConditionsEquipmentMounting"
                  value={installationConditionsEquipmentMounting}
                  onChange={(e: any) =>
                    setInstallationConditionsEquipmentMounting(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Organização cabos de rede/energia:</p>
                <Select
                  name="installationConditionsCableOrganization"
                  value={installationConditionsCableOrganization}
                  onChange={(e: any) =>
                    setInstallationConditionsCableOrganization(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Canaletas e Eletrodutos:</p>
                <Select
                  name="installationConditionsConduitsAndRaceways"
                  value={installationConditionsConduitsAndRaceways}
                  onChange={(e: any) =>
                    setInstallationConditionsConduitsAndRaceways(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Exposição a Chuva/Sol:</p>
                <Select
                  name="installationConditionsExposureToRainOrSun"
                  value={installationConditionsExposureToRainOrSun}
                  onChange={(e: any) =>
                    setInstallationConditionsExposureToRainOrSun(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Ok">Ok</option>
                  <option value="Abrir Ticket">Abrir Ticket</option>
                  <option value="Não realizado">Não realizado</option>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">Entrevista com Rh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="mb-3">
                <p className="mb-2 ">Funcionamento do equipamento:</p>
                <Select
                  name="hrInterviewEquipmentFunctioning"
                  value={hrInterviewEquipmentFunctioning}
                  onChange={(e: any) =>
                    setHrInterviewEquipmentFunctioning(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Sem dúvidas">Sem dúvidas</option>
                  <option value="Resolvido na preventiva">
                    Resolvido na preventiva
                  </option>
                  <option value="Abrir ticket">Abrir ticket</option>
                  <option value="Não perguntado">Não perguntado</option>
                </Select>
              </div>
              <div className="mb-3">
                <p className="mb-2 ">Dúvidas no software:</p>
                <Select
                  name="hrInterviewSoftwareQuestions"
                  value={hrInterviewSoftwareQuestions}
                  onChange={(e: any) =>
                    setHrInterviewSoftwareQuestions(e.target.value)
                  }
                  className="w-full"
                >
                  <option value="">Escolha...</option>
                  <option value="Sem dúvidas">Sem dúvidas</option>
                  <option value="Resolvido na preventiva">
                    Resolvido na preventiva
                  </option>
                  <option value="Abrir ticket">Abrir ticket</option>
                  <option value="Não perguntado">Não perguntado</option>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-bold">
              Estado de Funcionamento:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Label>Descreva as não conformidades:</Label>
              <Textarea
                name="nonConformitiesDescription"
                rows={10}
                placeholder="Descreva as não conformidades."
                value={nonConformitiesDescription}
                onChange={(e) => setNonConformitiesDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Label>Sugestão de melhorias:</Label>
              <Textarea
                name="improvementSuggestions"
                rows={10}
                placeholder="Descreva as não conformidades."
                value={improvementSuggestions}
                onChange={(e) => setImprovementSuggestions(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
        <div className="mb-3 px-4  md:relative fixed left-0 bottom-1 w-full ">
          <Button type="submit" className="bg-green-600 h-11 w-full">
            Registar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PageFormRep;
