import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-blue">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
          Privacy Policy
        </span>
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-600">
            We collect only essential information needed for tax calculations and planning:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Income details and sources</li>
            <li>Business expense information</li>
            <li>Investment details for tax saving calculations</li>
            <li>Basic profile information (optional)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>To provide accurate tax calculations and recommendations</li>
            <li>To improve our tax planning algorithms</li>
            <li>To send relevant tax updates and deadlines (if opted in)</li>
            <li>To enhance your user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
          <p className="text-gray-600">
            We implement industry-standard security measures:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>End-to-end encryption for all sensitive data</li>
            <li>Regular security audits and updates</li>
            <li>Secure data storage with regular backups</li>
            <li>No sharing of personal information with third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Access your stored information</li>
            <li>Request data deletion</li>
            <li>Opt out of communications</li>
            <li>Update your preferences</li>
          </ul>
        </section>
      </div>
    </div>
  );
}; 