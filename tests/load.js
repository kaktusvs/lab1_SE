import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 5 },   // плавно до 5 користувачів
    { duration: '20s', target: 10 },  // до 10
    { duration: '10s', target: 0 },   // спад
  ],
};

export default function () {
  http.get('https://kaktusvs.github.io/lab1_SE/');
  sleep(1);
}