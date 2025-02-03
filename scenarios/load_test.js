import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  const res = http.get("https://test.k6.io/contacts.php");
  let durationMsg =
    "Falha na execução do cenario de teste de Carga no endpoint contacts";

  if (
    !check(res, {
      "status code é 200 - Load test": (r) => r.status === 200,
    })
  ) {
    fail(durationMsg);
  }
  sleep(1);
}
