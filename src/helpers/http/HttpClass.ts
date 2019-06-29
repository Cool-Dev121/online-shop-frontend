import { buildUrl, serializeRequestBody, buildQuery } from '../url';

function buildCall<TResponse, TBody = undefined>(
  method: string,
  serverUrl: string,
  url: string,
  headers?: Record<string, string>,
  body?: TBody,
): Promise<TResponse> {
  return new Promise((res, rej) => {
    fetch(buildUrl(serverUrl, url), {
      method,
      headers,
      body: body ? serializeRequestBody<TBody>(body) : undefined,
    })
      .then((d) => {
        res(d.json());
      })
      .catch((e) => {
        rej(e);
      });
  });
}

export class HttpClass {
  _serverUrl: string;

  _headers: Record<string, string> | undefined;

  _headersFormDataContent: Record<string, string> | undefined;

  constructor(
    serverUrl: string,
    headers?: Record<string, string>,
    headersFormDataContent?: Record<string, string>,
  ) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._headersFormDataContent = headersFormDataContent;
  }

  get<TResponse>(url: string, params?: Record<string, string | number>): Promise<TResponse> {
    return buildCall('GET', this._serverUrl, buildQuery(url, params), this._headers);
  }

  post<TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> {
    return buildCall('POST', this._serverUrl, url, this._headers, body);
  }

  upload<TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> {
    return buildCall('POST', this._serverUrl, url, this._headersFormDataContent, body);
  }
}
