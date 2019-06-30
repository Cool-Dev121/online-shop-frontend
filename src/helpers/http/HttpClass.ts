import { buildUrl, serializeRequestBody, buildQuery } from '../url';

function buildCall<TResponse, TBody = undefined>(
  method: string,
  serverUrl: string,
  url: string,
  getHeaders?: () => Record<string, string>,
  body?: TBody,
): Promise<TResponse> {
  return new Promise((res, rej) => {
    fetch(buildUrl(serverUrl, url), {
      method,
      headers: getHeaders && getHeaders(),
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

  _getHeaders: (() => Record<string, string>) | undefined;

  _getHeadersFormDataContent: (() => Record<string, string>) | undefined;

  constructor(
    serverUrl: string,
    getHeaders?: () => Record<string, string>,
    getHeadersFormDataContent?: () => Record<string, string>,
  ) {
    this._serverUrl = serverUrl;
    this._getHeaders = getHeaders;
    this._getHeadersFormDataContent = getHeadersFormDataContent;
  }

  get<TResponse>(url: string, params?: Record<string, string | number>): Promise<TResponse> {
    return buildCall('GET', this._serverUrl, buildQuery(url, params), this._getHeaders);
  }

  post<TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> {
    return buildCall('POST', this._serverUrl, url, this._getHeaders, body);
  }

  upload<TBody, TResponse>(url: string, body?: TBody): Promise<TResponse> {
    return buildCall('POST', this._serverUrl, url, this._getHeadersFormDataContent, body);
  }
}
