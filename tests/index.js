import Rumpup from "../scenarios/rampup_test.js"; // teste de rampup e rumpdown
import Smoke from "../scenarios/smoke_test.js"; // teste de fumaça
import Load from "../scenarios/load_test.js"; // teste de carga
import Login from "../scenarios/login_test.js";
import { group } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "relatorio.html": htmlReport(data),
  };
}

export const options = {
  discardResponseBodies: true,
  scenarios: {
    rampup: {
      executor: "ramping-vus",
      exec: "rampup",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 100 },
        { duration: "10s", target: 50 },
        { duration: "10s", target: 40 },
        { duration: "10s", target: 30 },
        { duration: "10s", target: 20 },
        { duration: "10s", target: 0 },
      ],
      gracefulRampDown: "0s",
    },
    smoke: {
      executor: "shared-iterations",
      exec: "smoke",
      vus: 10,
      iterations: 200,
      maxDuration: "30s",
    },
    load: {
      executor: "constant-vus",
      exec: "load",
      vus: 10,
      duration: "30s",
    },
    login: {
      executor: "constant-vus",
      vus: 10,
      duration: "30s",
      exec: "login",
    },
  },
  thresholds: {
    'http_req_duration': ["p(95)<500"], // 95% das requisições devem ser menores que 500ms
    'http_req_failed': ["rate<0.01"], // Taxa de falha menor que 1%
    'http_reqs': ['count>500'], // As requisições totais devem ser maiores que 500
    'iteration_duration': ['p(95)<2000'], // 95% das iterações devem ter duração menor que 1 segundo
    'group_duration': ['p(95)<1500'], // 95% dos grupos de requisições devem ter duração inferior a 1500ms
  },
};

export function rampup() {
  group("endpoint get - rampup test", () => {
    Rumpup();
  });
}

export function smoke() {
  group("endpoint get - smoke test", () => {
    Smoke();
  });
}

export function load() {
  group("endpoint get - load test", () => {
    Load();
  });
}

export function login() {
  group("endpoint post - Validação de login", () => {
    Login()
  })
}
