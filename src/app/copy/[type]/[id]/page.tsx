"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import RemoteList from "@/services/remoto/remote-list/remoteList";
import PreventiList from "@/services/rep/preventive-list/preventiveList";
import { preventivaRepTemplate } from "@/templates/preventivaRep";
import { remoteTemplate } from "@/templates/remote";
import React, { useEffect, useState } from "react";

interface UrlParams {
  params: {
    type: string;
    id: string;
  };
}

const Copy = ({ params }: UrlParams) => {
  const [text, setText] = useState("");

  function getCopy() {
    switch (params.type) {
      case "preventiva":
        const preventlist = new PreventiList(Number(params.id)).execute();
        setText(preventivaRepTemplate(preventlist));

        break;
      case "remote":
        const remotelist = new RemoteList(Number(params.id)).execute();
        setText(remoteTemplate(remotelist));
        break;
      default:
      // Código a ser executado se a expressão não corresponder a nenhum valor
    }
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
