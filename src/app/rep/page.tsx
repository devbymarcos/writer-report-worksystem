"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Rep = () => {
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeStop, setTimeStop] = useState<string>("");

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

  return (
    <div className="px-4 pb-10 ">
      <div className="">
        <h1 className="font-bold text-lg">Preventiva Rep</h1>
      </div>

      <div className="mb-3">
        <Label>Ticket Chamado:</Label>
        <Input name="ticket_chamado" type="number" />
      </div>
      <div className="mb-3">
        <Label>Nome da Empresa:</Label>
        <Input name="nome_empresa" type="text" />
      </div>
      <div className="mb-3">
        <Label>Data:</Label>
        <Input name="date" type="date" />
      </div>
      <div className="mb-3">
        <div className="">
          <Label>Hora Inicial:</Label>
          <div className="flex gap-2 items-center">
            <Input type="text" name="time_start" value={timeStart} />
            <Button onClick={timeStartexecute} variant="default">
              Start
            </Button>
          </div>
        </div>
        <div className="">
          <Label>Hora Inicial:</Label>
          <div className="flex gap-2 items-center">
            <Input name="time_stop" value={timeStop} type="text" />
            <Button onClick={timeStopExecute} variant="destructive">
              Stop
            </Button>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <Label>Empresa Contratante:</Label>
        <Input required type="text" />
      </div>
      <div className="mb-3">
        <p className="mb-2 font-bold">Estado de Funcionamento:</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Escolha..." />
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
        <Select>
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
        <Input type="text" />
      </div>
      <div className="mb-3">
        <Label>Numero de série:</Label>
        <Input type="number" />
      </div>
      <div className="mb-3">
        <Label>Lacre Fiscal:</Label>
        <Input type="number" />
      </div>
      <div className="my-11">
        <h2 className="font-bold text-lg mb-4">Ações de Limpeza</h2>
        <div className="mb-3">
          <p className="mb-2 ">Estética e Externa (Silicone):</p>
          <Select>
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
          <Select name="compartimento_bobina">
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
          <Select name="cabeca_impressao">
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
          <Select>
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
          <Select name="compartimento_bobina">
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
          <Select name="cabeca_impressao">
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
          <Select name="cabeca_impressao">
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
          <Select name="cabeca_impressao">
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
          <Select>
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
          <Select name="compartimento_bobina">
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
          <Select name="cabeca_impressao">
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
          <Select name="cabeca_impressao">
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
          <Select name="cabeca_impressao">
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
          <Select>
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
          <Select>
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
        <Input required type="text" />
      </div>
      <div className="mb-3">
        <Label>Descreva as não conformidades:</Label>
        <Textarea rows={10} placeholder="Descreva as não conformidades." />
      </div>
      <div className="mb-3">
        <Label>Sugestão de melhorias:</Label>
        <Textarea rows={10} placeholder="Descreva as não conformidades." />
      </div>
      <Button className="bg-green-600">Enviar</Button>
    </div>
  );
};

export default Rep;
