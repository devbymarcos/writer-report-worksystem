"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Register from "@/services/remoto/register/Register";

const Rep = () => {
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeStop, setTimeStop] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

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
      date: new Date(formData.get("date") as string),
      timeStart: String(formData.get("timeStart")),
      timeStop: String(formData.get("timeStop")),
      nameBusiness: String(formData.get("nameBusiness")),
      completedActions: String(formData.get("completedActions")),
      pendingOrNextActions: String(formData.get("pendingOrNextActions")),
    });

    // Chame o método de execução
    registerInstance.execute();

    // Limpar o formulário após o envio
    if (formRef.current) {
      formRef.current.reset();
    }
  };
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
        <input type="hidden" name="type" value="remote" />
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
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Label>Numero ticket:</Label>
          <Input name="numberTicket" type="number" />
        </div>
        <div className="mb-3">
          <Label>Titulo ticket:</Label>
          <Input name="titleTicket" type="text" />
        </div>
        <div className="mb-3">
          <Label>Data:</Label>
          <Input name="date" type="date" />
        </div>
        <div className="mb-3">
          <Label>Técnico:</Label>
          <Input name="operator" type="text" />
        </div>
        <div className="mb-3">
          <Label>Empresa Contratante:</Label>
          <Input name="nameBusiness" type="text" />
        </div>
        <div className="mb-3">
          <Label>Descreva as ações realizadas:</Label>
          <Textarea
            name="completedActions"
            rows={10}
            placeholder="Descreva as  ações realizadas"
          />
        </div>
        <div className="mb-3">
          <Label>Pendencias ou próximas etapas:</Label>
          <Textarea
            name="pendingOrNextActions"
            rows={10}
            placeholder="Descreva as não conformidades."
          />
        </div>
        <Button type="submit" className="bg-green-600">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Rep;
