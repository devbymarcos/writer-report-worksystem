"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import GetRemoteId from "@/services/remoto/list-single/GetRemoteId";
import GetRepPreventiveId from "@/services/rep/list-single/GetRepPreventiveId";
import { preventivaRepTemplate } from "@/templates/preventivaRep";
import { remoteTemplate } from "@/templates/remote";
import React, { useEffect, useState } from "react";
import { ClipboardPen, Copy } from "lucide-react";
import Link from "next/link";

interface UrlParams {
  params: {
    type: string;
    id: string;
  };
}

const CopyPage = ({ params }: UrlParams) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [ticket, setTicket] = useState("");

  function getCopy() {
    switch (params.type) {
      case "rep":
        const preventlist = new GetRepPreventiveId(Number(params.id)).execute();
        //@ts-ignore
        setTicket(preventlist.numberTicket);
        //@ts-ignore
        setType(preventlist.type);
        //@ts-ignore
        setText(preventivaRepTemplate(preventlist));

        break;
      case "remoto":
        const remotelist = new GetRemoteId(Number(params.id)).execute();
        //@ts-ignore
        setTicket(remotelist.numberTicket);
        //@ts-ignore
        setType(remotelist.type);
        //@ts-ignore
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
      <div className="px-2 relative">
        <Button asChild className="bg-blue-400">
          <Link href={`/${type}?ticket=${ticket}`}>
            <ClipboardPen />
          </Link>
        </Button>
        <Textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="h-screen  mb-4"
          defaultValue={text}
        />
        <Button
          variant="outline"
          className="  fixed bottom-32 bg-indigo-400 text-white right-6 h-11"
          onClick={copyToClipboard}
        >
          <Copy />
          copiar
        </Button>
      </div>
    </>
  );
};

export default CopyPage;
