"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Register from "@/services/remoto/register/Register";
import { useSearchParams, useRouter } from "next/navigation";
import GetRemoteId from "@/services/remoto/list-single/GetRemoteId";
import { formatDateUI } from "@/functions/formatDate";

const PageFormRemoto = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [timeStart, setTimeStart] = useState<string>("");
  const [timeStop, setTimeStop] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [numberTicket, setNumberTicket] = useState<number>();
  const [titleTicket, setTitleTicket] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [nameBusiness, setNameBusiness] = useState<string>("");
  const [completedActions, setCompletedActions] = useState<string>("");
  const [pendingOrNextActions, setPendingOrNextActions] = useState<string>("");

  function loadData() {
    const ticketData = new GetRemoteId(
      Number(searchParams.get("ticket"))
    ).execute();
    if (ticketData) {
      setOperator(ticketData.operator);
      setNumberTicket(ticketData.numberTicket);
      setTitleTicket(ticketData.titleTicket);
      setDate(ticketData.date);
      setTimeStart(ticketData.timeStart);
      setTimeStop(ticketData.timeStop);
      setNameBusiness(ticketData.nameBusiness);
      setCompletedActions(ticketData.completedActions);
      setPendingOrNextActions(ticketData.pendingOrNextActions);
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
      completedActions: String(formData.get("completedActions")),
      pendingOrNextActions: String(formData.get("pendingOrNextActions")),
    });

    // Chame o método de execução
    registerInstance.execute();

    //
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
        <h1 className="font-bold text-lg">Atendimento Remoto</h1>
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
        <input type="hidden" name="type" value="remoto" />
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
            required
            name="numberTicket"
            defaultValue={numberTicket}
            type="number"
          />
        </div>
        <div className="mb-3">
          <Label>Titulo ticket:</Label>
          <Input name="titleTicket" defaultValue={titleTicket} type="text" />
        </div>
        <div className="mb-3">
          <Label>Data:</Label>
          <Input name="date" type="date" defaultValue={formatDateUI(date)} />
        </div>
        <div className="mb-3">
          <Label>Técnico:</Label>
          <Input required name="operator" defaultValue={operator} type="text" />
        </div>
        <div className="mb-3">
          <Label>Empresa Contratante:</Label>
          <Input name="nameBusiness" type="text" defaultValue={nameBusiness} />
        </div>
        <div className="mb-3">
          <Label>Descreva as ações realizadas:</Label>
          <Textarea
            name="completedActions"
            rows={10}
            placeholder="Descreva as  ações realizadas"
            defaultValue={completedActions}
          />
        </div>
        <div className="mb-3">
          <Label>Pendencias ou próximas etapas:</Label>
          <Textarea
            name="pendingOrNextActions"
            rows={10}
            placeholder="Descreva as não conformidades."
            defaultValue={pendingOrNextActions}
          />
        </div>
        <Button type="submit" className="bg-green-600">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default PageFormRemoto;
