
import React, { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    // Simulate OTP sending
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    alert("OTP Verified (dummy)");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login via OTP</h2>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        {otpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
        )}
        {!otpSent ? (
          <button onClick={handleSendOTP} className="w-full bg-blue-500 text-white p-2 rounded">
            Send OTP
          </button>
        ) : (
          <button onClick={handleVerifyOTP} className="w-full bg-green-500 text-white p-2 rounded">
            Verify OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
