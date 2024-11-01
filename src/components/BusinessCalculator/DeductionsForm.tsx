import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui/Input';
import { BusinessFormData } from '../../types';

interface DeductionsFormProps {
  initialData: BusinessFormData;
  onNext: (values: BusinessFormData) => void;
  onBack: () => void;
}

const DEDUCTION_FIELDS = [
  { name: 'rent', label: 'Rent Expenses', placeholder: 'Enter rent amount' },
  { name: 'utilities', label: 'Utilities', placeholder: 'Enter utilities expenses' },
  { name: 'salaries', label: 'Employee Salaries', placeholder: 'Enter salary expenses' },
  { name: 'other', label: 'Other Deductions', placeholder: 'Enter other deductions' }
];

const validationSchema = Yup.object({
  deductions: Yup.object({
    rent: Yup.number().min(0, 'Must be positive'),
    utilities: Yup.number().min(0, 'Must be positive'),
    salaries: Yup.number().min(0, 'Must be positive'),
    other: Yup.number().min(0, 'Must be positive')
  })
});

export const DeductionsForm: React.FC<DeductionsFormProps> = ({ initialData, onNext, onBack }) => {
  return (
    <Formik
      initialValues={initialData}
      validationSchema={validationSchema}
      onSubmit={onNext}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEDUCTION_FIELDS.map((field) => (
              <div key={field.name} className="group transform transition-all duration-300 hover:translate-y-[-2px]">
                <Input
                  type="number"
                  name={`deductions.${field.name}`}
                  label={field.label}
                  value={values.deductions[field.name as keyof typeof values.deductions] || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.deductions?.[field.name as keyof typeof values.deductions] 
                    ? errors.deductions?.[field.name as keyof typeof values.deductions] 
                    : undefined
                  }
                  placeholder={field.placeholder}
                  prefix="₹"
                  className="input-currency"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-4 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="group relative px-8 py-3 overflow-hidden rounded-xl bg-gray-100 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Back
              </span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-8 py-3 overflow-hidden rounded-xl bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? 'Processing...' : 'Calculate Tax'}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/10"></div>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}; 