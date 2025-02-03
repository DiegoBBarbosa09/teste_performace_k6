import http from "k6/http";
import { check, fail, sleep } from "k6";

export default function () {
  const url = "http://test.k6.io/login";
  const payload = JSON.stringify({
    email: "teste.email@email.com",
    password: "teste123",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // let durationMsg = "Falha na execução do cenario de teste Login ${res.status}";

  http.post(url, payload, params);

  // if (
  //   !check(res, {
  //     "status code é 200 - Login test": (r) => r.status === 200,
  //   })
  // ) {
  //   fail(durationMsg);
  // }


  sleep(1);
}
