import { check, fail, sleep } from "k6";
import http from "k6/http";

export default function () {
  let res = http.get("https://test.k6.io/contacts.php");
  let durationMsg = "Falha na execução do cenario de teste de fumaça contacts";

  if (
    !check(res, {
      "is status code 200 - endoint contacts": (r) => r.status === 200,
    })
  ) {
    fail(durationMsg);
  }

  sleep(1);
}
