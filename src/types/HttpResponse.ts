import { HttpStatusCode } from "axios";

export default interface HttpResponse<T> {
  data: T | null;
  status?: HttpStatusCode;
  statusText?: string;
  errorMessage?: string;
}
