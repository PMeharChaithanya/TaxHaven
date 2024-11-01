export interface MessageContent {
  type: 'user' | 'assistant';
  message: string;
  timestamp: number;
  suggestions?: string[];
  calculations?: {
    label: string;
    value: number;
    explanation?: string;
  }[];
  recommendations?: {
    title: string;
    items: string[];
  }[];
} 