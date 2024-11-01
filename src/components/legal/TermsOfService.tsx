import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-blue">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
          Terms of Service
        </span>
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Service Usage</h2>
          <p className="text-gray-600">
            By using our tax planning tools, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide accurate information for calculations</li>
            <li>Use the service for personal or business tax planning only</li>
            <li>Not attempt to manipulate or misuse the calculators</li>
            <li>Not share your account access with others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Disclaimer</h2>
          <div className="bg-blue-50 p-4 rounded-lg text-gray-600">
            <p>Our tax calculators and recommendations are:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>For informational purposes only</li>
              <li>Not a substitute for professional tax advice</li>
              <li>Based on current tax laws and regulations</li>
              <li>Subject to change with tax law updates</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Verify calculations with a tax professional</li>
            <li>Keep your account information secure</li>
            <li>Report any issues or discrepancies</li>
            <li>Stay informed about tax law changes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Service Modifications</h2>
          <p className="text-gray-600">
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Update calculator algorithms</li>
            <li>Modify features and services</li>
            <li>Change or discontinue any part of the service</li>
            <li>Update these terms as needed</li>
          </ul>
        </section>
      </div>
    </div>
  );
}; 