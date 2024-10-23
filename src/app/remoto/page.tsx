import { Suspense } from "react";
import PageFormRemoto from "./PageFormRemoto";

export default function PageRemoto() {
  return (
    <Suspense fallback={<div>Carregando conteúdo...</div>}>
      <PageFormRemoto />
    </Suspense>
  );
}
