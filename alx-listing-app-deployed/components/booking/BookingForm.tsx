
```tsx
const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>
    <form className="space-y-4">
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-gray-700">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">CVV</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-gray-700">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700">City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;

