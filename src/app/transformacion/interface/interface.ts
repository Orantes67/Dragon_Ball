export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
  }
  
  export interface TransformationResponse {
    data: Transformation[];
    total: number;
    limit: number;
    offset: number;
  }
  