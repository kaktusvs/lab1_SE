import http from 'k6/http';

export let options = {
  vus: 50,          // багато користувачів
  duration: '15s',  // короткий час
};

export default function () {
  http.get('https://kaktusvs.github.io/lab1_SE/');
}