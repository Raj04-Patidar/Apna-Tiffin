import React, { useState } from "react";
import background from '../assets/images/book.jpg';
import { bookTiffin } from "../services/ApiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const BookTiffin = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    gender: "",
    address: "",
    tiffinType: "",
    paymentMode: "",
    upiId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, contactNo, gender, address, tiffinType, paymentMode, upiId } = formData;

    if (!fullName || !contactNo || !gender || !address || !tiffinType || !paymentMode) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
      });
      return false;
    }

    if (paymentMode === "Online" && !upiId) {
      toast.error("Please provide your UPI ID for online payments.", {
        position: "top-center",
      });
      return false;
    }

    return true;
  };

  const handleBooking = async (e) => {
    e.preventDefault(); // Prevent form default submission

    if (!validateForm()) {
      return;
    }

    try {
      const bookingResponse = await bookTiffin(formData);
      console.log(bookingResponse);

      // ✅ Fix: Use string for position instead of toast.POSITION.TOP_CENTER
      toast.success("Tiffin booked successfully!", {
        position: "top-center",
      });

      setFormData({
        fullName: "",
        contactNo: "",
        gender: "",
        address: "",
        tiffinType: "",
        paymentMode: "",
        upiId: "",
      });
    } catch (error) {
      toast.error("Error during booking. Please try again.", {
        position: "top-center",
      });
      console.error("Error during booking:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}
      ></div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <form
          onSubmit={handleBooking}
          style={{
            backgroundColor: "#d2d7db",
            padding: "20px",
            borderRadius: "20px",
            maxWidth: "600px",
            width: "100%",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "cursive", color: "#10375c" }}
          >
            Book Your Tiffin
          </h2>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contactNo" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label htmlFor="male" className="ms-2 me-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label htmlFor="female" className="ms-2">
                Female
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Tiffin Type */}
          <div className="mb-3">
            <label className="form-label">Tiffin Type</label>
            <select
              className="form-select"
              name="tiffinType"
              value={formData.tiffinType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="One Time">One Time</option>
              <option value="Two Time">Two Time</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Payment Mode</label>
            <select
              className="form-select"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Payment Mode
              </option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
            </select>
          </div>

          {/* Payment Details */}
          {formData.paymentMode === "Cash" && (
            <div className="alert alert-info">Payment will be collected in cash.</div>
          )}
          {formData.paymentMode === "Online" && (
            <div className="mb-3">
              <label htmlFor="upiId" className="form-label">
                Enter UPI ID
              </label>
              <input
                type="text"
                className="form-control"
                id="upiId"
                name="upiId"
                value={formData.upiId}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "#10375c", color: "white", width: "100%" }}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTiffin;
