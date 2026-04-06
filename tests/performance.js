import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://kaktusvs.github.io/lab1_SE/');

  console.log("STATUS:", res.status); // для дебагу

  check(res, {
    'status is OK': (r) => r.status >= 200 && r.status < 500,
    'response time < 500ms': (r) => r.timings.duration < 500,
    'body not empty': (r) => r.body.length > 0,
  });
}