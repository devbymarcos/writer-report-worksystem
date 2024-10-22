"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Register from "@/services/rep/register/Register";
import { useSearchParams, useRouter } from "next/navigation";
import GetRepPreventiveId from "@/services/rep/list-single/GetRepPreventiveId";
import { formatDateUI } from "@/functions/formatDate";
import { Checkbox } from "@/components/ui/checkbox";

const Rep = () => {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const { push } = useRouter();
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeStop, setTimeStop] = useState<string>("");
  const [formData, setFormData] = useState({
    operator: "",
    numberTicket: 0,
    titleTicket: "",
    date: "",
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
    sealWork: "",
    nonConformitiesDescription: "",
    improvementSuggestions: "",
  });

  function loadData() {
    const ticketData = new GetRepPreventiveId(
      Number(searchParams.get("ticket"))
    ).execute();
    if (ticketData) {
      setTimeStart(ticketData.timeStart);
      setTimeStop(ticketData.timeStop);
      setFormData({
        operator: ticketData.operator,
        numberTicket: ticketData.numberTicket,
        titleTicket: ticketData.titleTicket,
        date: ticketData.date,
        timeStart: ticketData.timeStart,
        timeStop: ticketData.timeStop,
        nameBusiness: ticketData.nameBusiness,
        stateOperation: ticketData.stateOperation,
        brand: ticketData.brand,
        ip: ticketData.ip,
        ns: ticketData.ns,
        fiscalSeal: ticketData.fiscalSeal,
        cleaningExternal: ticketData.cleaningExternal,
        cleaningPrinter: ticketData.cleaningPrinter,
        cleaningSpoolCompartment: ticketData.cleaningSpoolCompartment,
        inspectionDisplay: ticketData.inspectionDisplay,
        inspectionPrinter: ticketData.inspectionPrinter,
        inspectionKeyboard: ticketData.inspectionKeyboard,
        inspectionReadersCardAndBiometrics:
          ticketData.inspectionReadersCardAndBiometrics,
        inspectionCutterOrPerforator: ticketData.inspectionCutterOrPerforator,
        installationConditionsEquipmentMounting:
          ticketData.installationConditionsEquipmentMounting,
        installationConditionsCableOrganization:
          ticketData.installationConditionsCableOrganization,
        installationConditionsConduitsAndRaceways:
          ticketData.installationConditionsConduitsAndRaceways,
        installationConditionsExposureToRainOrSun:
          ticketData.installationConditionsExposureToRainOrSun,
        hrInterviewEquipmentFunctioning:
          ticketData.hrInterviewEquipmentFunctioning,
        hrInterviewSoftwareQuestions: ticketData.hrInterviewSoftwareQuestions,
        sealWork: ticketData.sealWork,
        nonConformitiesDescription: ticketData.nonConformitiesDescription,
        improvementSuggestions: ticketData.improvementSuggestions,
      });
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

    // Criação do FormData a partir do formulário
    const formData = new FormData(formRef.current);

    // Criação da instância do objeto de registro
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

  if (!formData) return null;
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
        <div className="mb-3">
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
            defaultValue={formData.numberTicket}
            type="number"
          />
        </div>
        <div className="mb-3">
          <Label>Titulo ticket:</Label>
          <Input
            name="titleTicket"
            defaultValue={formData.titleTicket}
            type="text"
          />
        </div>
        <div className="mb-3">
          <Label>Data:</Label>
          <Input
            name="date"
            type="date"
            defaultValue={formatDateUI(formData.date)}
          />
        </div>
        <div className="mb-3">
          <Label>Técnico:</Label>
          <Input
            required
            name="operator"
            defaultValue={formData.operator}
            type="text"
          />
        </div>
        <div className="mb-3">
          <Label>Empresa Contratante:</Label>
          <Input
            name="nameBusiness"
            type="text"
            defaultValue={formData.nameBusiness}
          />
        </div>
        <div className="mb-3">
          <p className="mb-2 font-bold">Estado de Funcionamento:</p>
          <Checkbox
            name="stateOperation"
            value="ok"
            checked={formData.stateOperation === "Ok"}
          />
          <Select name="stateOperation" defaultValue={formData.stateOperation}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Em plena operação">
                  Em plena operação
                </SelectItem>
                <SelectItem value="Em operação parcial">
                  Em operação parcial
                </SelectItem>
                <SelectItem value="Desligado ou desativado">
                  Desligado ou desativado
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-3">
          <p className="mb-2 font-bold">Marca do Relógio:</p>
          <Select name="brand" defaultValue={formData.brand}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Escolha..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Madis">Madis</SelectItem>
                <SelectItem value="Proveu">Proveu</SelectItem>
                <SelectItem value="ControlID">ControlID</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-3">
          <Label>IP:</Label>
          <Input name="ip" type="text" defaultValue={formData.ip} />
        </div>
        <div className="mb-3">
          <Label>Numero de série:</Label>
          <Input name="ns" defaultValue={formData.ns} type="ns" />
        </div>
        <div className="mb-3">
          <Label>Lacre Fiscal:</Label>
          <Input
            name="fiscalSeal"
            type="number"
            defaultValue={formData.fiscalSeal}
          />
        </div>
        <div className="my-11">
          <h2 className="font-bold text-lg mb-4">Ações de Limpeza</h2>
          <div className="mb-3">
            <p className="mb-2 ">Estética e Externa (Silicone):</p>
            <Select
              name="cleaningExternal"
              defaultValue={formData.cleaningExternal}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Não Realizada">Não Realizada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Compartimento de bobina:</p>
            <Select
              name="cleaningPrinter"
              defaultValue={formData.cleaningPrinter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Não Realizada">Não Realizada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Cabeça de impressão:</p>
            <Select
              name="cleaningSpoolCompartment"
              defaultValue={formData.cleaningSpoolCompartment}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Não Realizada">Não Realizada</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="my-11">
          <h2 className="font-bold text-lg mb-4">
            Vistoria de recursos essenciais
          </h2>
          <div className="mb-3">
            <p className="mb-2 ">Display:</p>
            <Select
              name="inspectionDisplay"
              defaultValue={formData.inspectionDisplay}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Impressor:</p>
            <Select
              name="inspectionPrinter"
              defaultValue={formData.inspectionPrinter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Teclado:</p>
            <Select
              name="inspectionKeyboard"
              defaultValue={formData.inspectionKeyboard}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Leitores (carão e biometria):</p>
            <Select
              name="inspectionReadersCardAndBiometrics"
              defaultValue={formData.inspectionReadersCardAndBiometrics}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Guilhotina ou serrilha:</p>
            <Select
              name="inspectionCutterOrPerforator"
              defaultValue={formData.inspectionCutterOrPerforator}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="my-11">
          <h2 className="font-bold text-lg mb-4">Condições de Instalação</h2>
          <div className="mb-3">
            <p className="mb-2 ">Fixação do equipamento:</p>
            <Select
              name="installationConditionsEquipmentMounting"
              defaultValue={formData.installationConditionsEquipmentMounting}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Organização cabos de rede/energia:</p>
            <Select
              name="installationConditionsCableOrganization"
              defaultValue={formData.installationConditionsCableOrganization}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Canaletas e Eletrodutos:</p>
            <Select
              name="installationConditionsConduitsAndRaceways"
              defaultValue={formData.installationConditionsConduitsAndRaceways}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Exposição a Chuva/Sol:</p>
            <Select
              name="installationConditionsExposureToRainOrSun"
              defaultValue={formData.installationConditionsExposureToRainOrSun}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ok">Ok</SelectItem>
                  <SelectItem value="Abrir Ticket">Abrir Ticket</SelectItem>
                  <SelectItem value="Não realizado">Não realizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="my-11">
          <h2 className="font-bold text-lg mb-4">Entrevista com Rh</h2>
          <div className="mb-3">
            <p className="mb-2 ">Funcionamento do equipamento:</p>
            <Select
              name="hrInterviewEquipmentFunctioning"
              defaultValue={formData.hrInterviewEquipmentFunctioning}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Sem dúvidas">Sem dúvidas</SelectItem>
                  <SelectItem value="Resolvido na preventiva">
                    Resolvido na preventiva
                  </SelectItem>
                  <SelectItem value="Abrir ticket">Abrir ticket</SelectItem>
                  <SelectItem value="Não perguntado">Não perguntado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <p className="mb-2 ">Dúvidas no software:</p>
            <Select
              name="hrInterviewSoftwareQuestions"
              defaultValue={formData.hrInterviewSoftwareQuestions}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Sem dúvidas">Sem dúvidas</SelectItem>
                  <SelectItem value="Resolvido na preventiva">
                    Resolvido na preventiva
                  </SelectItem>
                  <SelectItem value="Abrir ticket">Abrir ticket</SelectItem>
                  <SelectItem value="Não perguntado">Não perguntado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-3">
          <Label>Numero lacre Work:</Label>
          <Input name="sealWork" type="text" defaultValue={formData.sealWork} />
        </div>
        <div className="mb-3">
          <Label>Descreva as não conformidades:</Label>
          <Textarea
            name="nonConformitiesDescription"
            rows={10}
            placeholder="Descreva as não conformidades."
            defaultValue={formData.nonConformitiesDescription}
          />
        </div>
        <div className="mb-3">
          <Label>Sugestão de melhorias:</Label>
          <Textarea
            name="improvementSuggestions"
            rows={10}
            placeholder="Descreva as não conformidades."
            defaultValue={formData.improvementSuggestions}
          />
        </div>
        <div className="mb-3  md:relative fixed bottom-1 ">
          <Button type="submit" className="bg-green-600">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Rep;
