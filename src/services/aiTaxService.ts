export interface AIResponse {
  message: string;
  calculations?: {
    label: string;
    value: number;
    explanation?: string;
  }[];
} 