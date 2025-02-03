import http from "k6/http";
import { check, fail, sleep } from "k6";

export default function () {
  const res = http.get("https://test-api.k6.io/public/crocodiles/");
  let durationMsg = "Falha na execução do cenario de teste rumpup";

  if (
    !check(res, {
      "status code é 200 - rumpup": (r) => r.status === 200,
    })
  ) {
    fail(durationMsg);
  }

  sleep(1);
}
