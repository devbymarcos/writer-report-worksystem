"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/functions/formatDate";
import ListItem from "@/services/list-Item/ListItem";
import React, { useEffect, useState } from "react";

const Copy = ({ params }: any) => {
  const [text, setText] = useState("");

  function getCopy() {
    const list = new ListItem(Number(params.id)).execute();

    setText(`
    
    Chamado/Cliente:: ${list.numberTicket} - ${list.titleTicket}
    Data: ${formatDate(String(list.date))}
    Horário: ${list.timeStart} as ${list.timeStop}
    Técnico: Marcos Lopes 
    Tipo: Preventiva
    Acompanhou:

    1 - Descrição das ações realizadas:
    
    Empresa contratante: ${list.nameBusiness}
    Estado de Funcionamento: ${list.stateOperation}
    Marca do Relógio: ${list.brand}
    IP: ${list.ip}
    Número de série: ${list.ns}
    Lacre Fiscal: ${list.fiscalSeal}
    ===============================
    ## Ações de Limpeza: 
    Estética e Externa (Silicone): ${list.cleaningExternal}
    Compartimento de bobina: ${list.cleaningPrinter}
    Cabeça de impressão: ${list.cleaningSpoolCompartment}
    ===============================
    ## Vistoria de recursos essenciais
    Display:  ${list.inspectionDisplay}
    Impressor: :  ${list.inspectionPrinter}
    Teclado:  ${list.inspectionKeyboard}
    Leitores (carão e biometria): ${list.inspectionReadersCardAndBiometrics}
    Guilhotina ou serrilha: : ${list.inspectionCutterOrPerforator}
    ===============================
    ## Condições de Instalação
    Fixação do equipamento: ${list.installationConditionsEquipmentMounting}
    Organização cabos de rede/energia: ${
      list.installationConditionsCableOrganization
    }
    Canaletas e Eletrodutos: ${list.installationConditionsConduitsAndRaceways}
    Exposição a Chuva/Sol:  ${list.installationConditionsExposureToRainOrSun}
    ===============================
    ## Entrevista com Rh
    Funcionamento do equipamento: ${list.hrInterviewEquipmentFunctioning}
    Dúvidas no software: ${list.hrInterviewSoftwareQuestions}
    ===============================
    Numero lacre Work: ${list.sealWork}
    ===============================
    Descreva as não conformidades:  ${list.nonConformitiesDescription}
    ===============================
    Descreva as não conformidades:  ${list.improvementSuggestions}



    `);
  }

  const copyToClipboard = async () => {
    try {
      const contentToCopy = text;
      await navigator.clipboard.writeText(contentToCopy);
      alert("Conteúdo copiado para a área de transferência!");
    } catch (err) {
      alert(err);
      console.error("Erro ao copiar para a área de transferência:", err);
    }
  };

  useEffect(() => {
    getCopy();
  }, []);
  return (
    <>
      <div className="px-2">
        <Textarea className="h-screen mb-4" defaultValue={text} />
        <Button className="bg-blue-500 w-full h-11" onClick={copyToClipboard}>
          Copy
        </Button>
      </div>
    </>
  );
};

export default Copy;
