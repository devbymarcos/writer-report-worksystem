import { Suspense } from "react";
import PageFormRep from "./PageFormRep";

export default function PageRemoto() {
  return (
    <Suspense fallback={<div>Carregando conteúdo...</div>}>
      <PageFormRep />
    </Suspense>
  );
}
