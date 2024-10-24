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
        <div className="absolute right-4 top-2 flex gap-4">
          <Button asChild variant="outline" className=" ">
            <Link href={`/${type}?ticket=${ticket}`}>
              <ClipboardPen />
            </Link>
          </Button>
          <Button variant="outline" onClick={copyToClipboard}>
            <Copy />
          </Button>
        </div>
        <Textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="h-screen  mb-4 pt-12"
          defaultValue={text}
        />
      </div>
    </>
  );
};

export default CopyPage;
