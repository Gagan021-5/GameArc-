import React from 'react';
import { useState ,useEffect} from 'react';

const Terms = () => {
  const [date, setdate] = useState()

useEffect(() => {
    const Setthedate = ()=>{
  const today = new Date();
  const option = { day: 'numeric', month: 'long', year: 'numeric' };
  const finaldate = today.toLocaleDateString('en-GB', option);
  setdate(finaldate);
  }
Setthedate();

}, [date])



  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <p className="mb-6 text-sm text-gray-400 text-center">Last updated: {date}</p>

        <div className="space-y-6 text-gray-200 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to GameArc. By accessing or using our website, you agree to be bound by these terms and conditions.
              If you do not agree with any part of these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
            <p>
              You may use our website for personal and non-commercial purposes only. You agree not to misuse the content,
              attempt unauthorized access, or disrupt the service in any way.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Purchases and Refunds</h2>
            <p>
              All sales are final unless stated otherwise. If you encounter an issue with a game you purchased, please contact
              our support team within 7 days. We reserve the right to approve or deny refund requests at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content on this website, including game assets, logos, and UI design, is the property of GamingWorld or its
              licensors. You may not use or copy any content without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Modifications</h2>
            <p>
              We reserve the right to modify or update these terms at any time. Changes will be posted on this page with the
              updated date. Continued use of the website constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, you can contact us at: support@gamearc.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
