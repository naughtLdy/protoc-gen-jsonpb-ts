import { Method } from 'axios';

export type HTTPMethod =
  | "get"
  | "post"
  | "put"
  | "head"
  | "delete"
  | "patch"
  | "trace"
  | "options"
  | "connect";

export interface CoreAPIRequest<Request, Response> {
  _response?: Response;
  parameter?: Request;
  path: string;
}

export interface APIRequest<Request, Response> extends CoreAPIRequest<Request, Response> {
  method: HTTPMethod;
}

export interface AxiosAPIRequest<Request, Response> extends CoreAPIRequest<Request, Response> {
  method: Method;
}
