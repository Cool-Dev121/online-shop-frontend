export const buildQueryParams = (params: Record<string, string | number>): string => {
  const paramsKeys = Object.keys(params);
  if (paramsKeys.length === 0) {
    return '';
  }
  return paramsKeys
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key].toString())}`)
    .join('&');
};

export function buildQuery(url: string, params?: Record<string, string | number>) {
  return `${url}${params ? `?${buildQueryParams(params)}` : ''}`;
}

export function buildUrl(serverUrl: string, apiPath: string): string {
  return `${serverUrl}/${apiPath}`;
}

export function serializeRequestBody<TBody>(
  body?: string | TBody | Blob | FormData,
): string | Blob | FormData | null {
  debugger;
  if (body == null) {
    return null;
  }
  if (body instanceof Blob || body instanceof FormData || typeof body === 'string') {
    return body;
  }
  return JSON.stringify(body);
}

export function getFullImageUrl(imagePath: string) {
  return `${getServerUrl()}${imagePath}`;
}

export function getServerUrl(): string {
  return process.env.REACT_APP_SERVER_URL!;
}
