import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SalariedFormData } from '../../types';
import { Input } from '../ui/Input';
import { Dropdown } from '../ui/Dropdown';

interface SalariedFormProps {
  initialData: SalariedFormData;
  onNext: (data: Partial<SalariedFormData>) => void;
}

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Annual income is required')
    .min(0, 'Income must be positive'),
  financialYear: Yup.string().required('Financial year is required'),
  regime: Yup.string().required('Tax regime is required')
});

const REGIME_OPTIONS = [
  { id: 'new', label: 'New Tax Regime', description: 'Lower tax rates without deductions' },
  { id: 'old', label: 'Old Tax Regime', description: 'Higher rates with deductions & exemptions' }
];



export const SalariedForm: React.FC<SalariedFormProps> = ({ initialData, onNext }) => {
  return (
    <Formik
      initialValues={initialData}
      validationSchema={validationSchema}
      onSubmit={onNext}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className="space-y-8">
          <div className="space-y-6">
            <div className="group transform transition-all duration-300 hover:translate-y-[-2px]">
              <Input
                name="income"
                label="Annual Income"
                value={values.income}
                onChange={handleChange}
                prefix="₹"
                required
                error={touched.income ? errors.income : undefined}
              />
            </div>

            <div className="group transform transition-all duration-300 hover:translate-y-[-2px]">
              <Dropdown
                name="financialYear"
                label="Financial Year"
                value={values.financialYear}
                onChange={handleChange}
                onBlur={handleBlur}
                options={[
                  { value: '2024-2025', label: 'FY 2024-25' },
                  { value: '2023-2024', label: 'FY 2023-24' }
                ]}
                required
              />
            </div>

            <div className="group transform transition-all duration-300 hover:translate-y-[-2px]">
              <Dropdown
                name="regime"
                label="Tax Regime"
                value={values.regime}
                onChange={handleChange}
                onBlur={handleBlur}
                options={REGIME_OPTIONS.map(opt => ({
                  value: opt.id,
                  label: `${opt.label} - ${opt.description}`
                }))}
                required
                error={touched.regime ? errors.regime : undefined}
              />
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-8 py-3 overflow-hidden rounded-xl bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/25 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? 'Processing...' : 'Next Step'}
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