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

export default NetworkService;

// Example usage:
// const networkService = new NetworkService('https://api.example.com');

// (async () => {
//   try {
//     const response = await networkService.get<{data: any}>('data');
//     console.log('GET response:', response);

//     const postData = {key: 'value'};
//     const postResponse = await networkService.post('data', postData);
//     console.log('POST response:', postResponse);

//     const putData = {id: 123, updatedKey: 'updatedValue'};
//     const putResponse = await networkService.put('data/123', putData);
//     console.log('PUT response:', putResponse);

//     const deleteResponse = await networkService.delete('data/123');
//     console.log('DELETE response:', deleteResponse);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();
