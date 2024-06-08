import React, { useState } from 'react';
import axios from 'axios';
const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.name.match(nameRegex)) {
      alert('Please enter a valid name (only letters and spaces allowed).');
      return;
    }
    if (!formData.phoneNumber.match(phoneRegex)) {
      alert('Please enter a valid phone number (exactly 10 digits, no characters or symbols).');
      return;
    }
    try {
      await axios.post('https://leader-9ro9.onrender.com/api/submitFormData', formData);
      
      window.alert('Demo booked successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error in submitting Form Data', error);
      window.alert('Error submitting form data. Please try again.');
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dK2vUXGp7kg33oLvIZcQ8KN2kY81jma1_A&usqp=CAU")', backgroundSize: 'cover' }}>
        <div className="min-h-screen flex items-center justify-center bg-chess-background bg-cover">
          <div className="bg-white p-10 rounded shadow-md w-120">
            <h1 className="text-3xl font-bold mb-6">Book a Demo Class</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-600">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded mt-1"
                  placeholder="Enter Your Name"
                  pattern="[A-Za-z\s]+"
                  title="Only letters and spaces are allowed"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-600">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded mt-1"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border p-3 rounded mt-1"
                  placeholder="Enter Your Phone Number"
                  pattern="[0-9]{10}"
                  title="Exactly 10 digits, no characters or symbols"
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600"
                >
                  Book Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
