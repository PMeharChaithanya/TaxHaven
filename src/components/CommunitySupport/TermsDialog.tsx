import React from 'react';
import { Dialog } from '@headlessui/react';

interface TermsDialogProps {
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
}

export const TermsDialog: React.FC<TermsDialogProps> = ({ isOpen, onAccept, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full">
          <Dialog.Title className="text-xl font-semibold text-gray-900">
            Community Guidelines
          </Dialog.Title>
          <div className="mt-4 space-y-3 text-gray-600">
            <p>By participating in our community, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>No hate speech or discriminatory content</li>
              <li>No violent or threatening language</li>
              <li>Respect others' privacy and opinions</li>
              <li>Share only tax-related content and discussions</li>
              <li>No spam or promotional content</li>
            </ul>
          </div>
          <div className="mt-6 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Accept & Continue
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}; 