import HttpResponse from "@/types/HttpResponse";
import { AxiosError } from "axios";

export const getErrorMessage = (error: AxiosError): string => {
  if (error.response) {
    // Запрос был сделан, и сервер ответил кодом состояния, который
    // выходит за пределы 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    // todo specify a type for the data
    return (
      (error.response.data as any)?.errorMessage ||
      error.response.statusText ||
      error.message
    );
  } else if (error.request) {
    // Запрос был сделан, но ответ не получен
    // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
    // http.ClientRequest в node.js
    console.log(error.request);
  } else {
    // Произошло что-то при настройке запроса, вызвавшее ошибку
    console.log("Error", error.message);
  }

  console.log(error.config);
  return error.message ?? "error message look console";
};

export const createEmptyHttpResponse = <T = any>(): HttpResponse<T> => ({
  data: null,
  status: 200,
});
