declare module '@apiverve/countryboundaries' {
  export interface countryboundariesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface countryboundariesResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class countryboundariesWrapper {
    constructor(options: countryboundariesOptions);

    execute(callback: (error: any, data: countryboundariesResponse | null) => void): Promise<countryboundariesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: countryboundariesResponse | null) => void): Promise<countryboundariesResponse>;
    execute(query?: Record<string, any>): Promise<countryboundariesResponse>;
  }
}
