declare module '@apiverve/countryboundaries' {
  export interface countryboundariesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface countryboundariesResponse {
    status: string;
    error: string | null;
    data: CountryBoundariesData;
    code?: number;
  }


  interface CountryBoundariesData {
      features: Feature[];
      type:     string;
  }
  
  interface Feature {
      geometry:   Geometry;
      id:         string;
      properties: Properties;
      type:       string;
  }
  
  interface Geometry {
      coordinates: Array<Array<Array<number[]>>>;
      type:        string;
  }
  
  interface Properties {
      name: string;
  }

  export default class countryboundariesWrapper {
    constructor(options: countryboundariesOptions);

    execute(callback: (error: any, data: countryboundariesResponse | null) => void): Promise<countryboundariesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: countryboundariesResponse | null) => void): Promise<countryboundariesResponse>;
    execute(query?: Record<string, any>): Promise<countryboundariesResponse>;
  }
}
