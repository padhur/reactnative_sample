import {NETWORK_BASE_URL} from '../constants';

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: {[key: string]: string};
  body?: any;
}

class NetworkService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(url: string, options: RequestOptions): Promise<T> {
    const requestOptions: RequestInit = {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = response.json();
    return jsonData;
  }

  async get<T>(
    endpoint: string,
    headers?: {[key: string]: string},
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    console.log(`GET ${url}`);
    return this.request<T>(url, {method: 'GET', headers});
  }

  async post<T>(
    endpoint: string,
    body: any,
    headers?: {[key: string]: string},
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.request<T>(url, {method: 'POST', headers, body});
  }

  async put<T>(
    endpoint: string,
    body: any,
    headers?: {[key: string]: string},
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.request<T>(url, {method: 'PUT', headers, body});
  }

  async delete<T>(
    endpoint: string,
    headers?: {[key: string]: string},
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.request<T>(url, {method: 'DELETE', headers});
  }
}

export default new NetworkService(NETWORK_BASE_URL);
