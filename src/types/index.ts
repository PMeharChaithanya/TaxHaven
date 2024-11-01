export type BusinessType = 
  | 'Sole Proprietorship'
  | 'Partnership'
  | 'Private Limited'
  | 'Limited Liability Partnership';

export interface TaxCalculation {
  grossIncome: number;
  netIncome: number;
  taxableIncome: number;
  taxPayable: number;
  effectiveTaxRate: number;
}

export interface Option {
  value: string;
  label: string;
}

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Option[];
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export interface BusinessFormData {
  businessType: string;
  financialYear: string;
  income: number;
  deductions: {
    rent?: number;
    utilities?: number;
    salaries?: number;
    other?: number;
  };
}

export interface SalariedFormData {
  income: number;
  financialYear: string;
  regime: 'old' | 'new';
  deductions: {
    hra?: number;
    lta?: number;
    section80C?: number;
    other?: number;
  };
}

export interface DeductionBreakup {
  section: string;
  amount: number;
  description: string;
}

export interface TaxCalculationResult {
  taxableIncome: number;
  totalTax: number;
  effectiveRate: number;
  breakup: {
    label: string;
    amount: number;
  }[];
  deductionBreakup: DeductionBreakup[];
} 