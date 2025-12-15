export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
          Cancellation & Refund Policy
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">A. Money Safe Guarantee</h2>
            <p>
              If the course batch is full and you cannot be adjusted in it, we will either refund your entire money or
              place you in a different batch, as per your convenience. Once the refund is initiated, it will take 3-5
              working days to be reflected in your account as per the standard bank rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">B. Cancellation</h2>
            <p>
              You can cancel the order prior to 72 hours of starting the course. To cancel the booking please send an
              email with your Order ID and registered mobile to <strong>support@palash.app</strong>. Our team will get
              in touch with you in the next 24 hours to understand the cancellation reason. Post this, the refund will
              be initiated. Once the refund is initiated, it will take 3-5 working days to be reflected in your account
              as per the standard bank rules.
            </p>
            <p className="mt-4 font-semibold text-purple-900">
              Order will not be canceled if the course PDF is shared with you via Palash App, WhatsApp, Email, or any
              other mode.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              C. Cancellation and Refund for Demo or Basic Courses
            </h2>
            <p>
              No refund will be provided for any demo or basic courses purchased on Palash App. Once the fees for the
              demo or basic course are paid, your order is confirmed and cannot be canceled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">D. Abuse of Refund Policies</h2>
            <p>
              Participants who purchase and refund multiple courses over an extended period may be subject to suspension
              for abuse of the refund policy. In such cases the refund will not be provided and the account of the user
              will be terminated which might result in no further access to Palash App or any of its services including
              the recordings of the previous courses.
            </p>
          </section>

          <section className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
            <h3 className="text-xl font-bold text-purple-900 mb-3">Need Help?</h3>
            <p>
              If you have any questions about our refund policy or need assistance with a cancellation, please contact
              us at:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Email:</strong> support@pankhuri.co
              </li>
              <li>
                <strong>Phone:</strong> +91 63661 32227
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-purple-200 text-sm text-gray-600">
            <p>Last Updated: January 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
