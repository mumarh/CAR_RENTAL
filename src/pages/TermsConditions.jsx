import React from 'react'
import Footer from '../components/Footer'

const TermsConditions = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg border border-blue-200 rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
          Terms & Conditions
        </h1>
        
        <p className="mb-6 text-gray-700 leading-relaxed text-center">
          Welcome to our website! By using our services, you agree to the following terms and conditions. 
          Please read them carefully.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2 text-blue-600">1. Use of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use our services only for lawful purposes and in a way that does not infringe 
              on the rights of others or restrict their use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-blue-600">2. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your personal information will be handled according to our Privacy Policy. 
              Please review it to understand how we collect and use data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-blue-600">3. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for any damages or losses resulting from the use of our services. 
              Use the website at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-blue-600">4. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify these Terms & Conditions at any time. 
              Please check this page regularly for updates.
            </p>
          </section>
        </div>

        <p className="mt-10 text-center text-gray-700 font-medium">
          If you have any questions about these Terms & Conditions, feel free to contact us.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default TermsConditions
