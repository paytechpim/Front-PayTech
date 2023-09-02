import type {
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

export type HttpRequestOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  responseType?: 'json';
  reportProgress?: boolean;
  withCredentials?: boolean;
};
