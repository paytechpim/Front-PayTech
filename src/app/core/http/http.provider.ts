/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';
import { BaseError } from '../errors';
import { HttpMethods } from './http.enums';
import { HttpRequestOptions } from './http.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpProvider {
  timeout = 30000;
  retries = 2;

  constructor(private readonly http: HttpClient) {}

  get<T>(
    url: string,
    queryParms?: HttpRequestOptions['params'],
    options?: HttpRequestOptions
  ): Promise<T> {
    return this.request<T>(HttpMethods.get, url, {
      params: queryParms,
      ...options,
    });
  }

  delete<T>(
    url: string,
    queryParms?: HttpRequestOptions['params'],
    options?: HttpRequestOptions
  ): Promise<T> {
    return this.request<T>(HttpMethods.delete, url, {
      params: queryParms,
      ...options,
    });
  }

  post<T>(url: string, body: any, options?: HttpRequestOptions): Promise<T> {
    return this.request<T>(HttpMethods.post, url, { body, ...options });
  }

  patch<T>(url: string, body: any, options?: HttpRequestOptions): Promise<T> {
    return this.request<T>(HttpMethods.patch, url, { body, ...options });
  }

  put<T>(url: string, body: any, options?: HttpRequestOptions): Promise<T> {
    return this.request<T>(HttpMethods.put, url, { body, ...options });
  }

  /**
   * Cabeçalho que será chamado para qualquer chamada de API, onde
   * o header Authorization será definido pelo intercetpr de security
   */
  defineHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    return new HttpHeaders(headers);
  }

  private async request<T>(
    method: HttpMethods,
    url: string,
    options?: HttpRequestOptions
  ): Promise<T> {
    try {
      const headers = await this.defineHeaders();

      const response = await this.http
        .request<T>(method, url, {
          responseType: 'json',
          headers,
          ...options,
        })
        .pipe(retry(this.retries), timeout(this.timeout));

      return lastValueFrom(response);
    } catch (err: unknown) {
      if (err instanceof HttpErrorResponse) {
        throw new BaseError(err.error.mensagem, err);
      } else {
        throw err;
      }
    }
  }
}
