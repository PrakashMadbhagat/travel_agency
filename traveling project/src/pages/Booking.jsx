import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "react-calendar/dist/Calendar.css";
import Styles from "../css/booking.module.css";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    bookingType: "hotel",
    destination_code: "",
    destination: "",
    checkinTime: "",
    checkoutTime: "",
    adult: "",
    child: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    if (pincode.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();
        setDestinations(data[0]?.PostOffice || []);
      } catch (error) {
        console.error(error);
      }
    }
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Confirmed:", formData);
    setStep(4);
  };

  const bookingHeadings = {
    hotel: "Hotel Booking",
    Cabs: "Cabs Booking",
    crus: "Cruise Booking",
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 mt-5">Booking Form</h2>

      {/* Step Indicators */}
      <div className="mb-4 text-center">
        {["Select Plan", "Your Info", "Payment", "Success"].map((label, index) => (
          <span
            key={index}
            className={`badge mx-2 ${step === index + 1 ? "bg-primary" : "bg-secondary"}`}
          >
            {label}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Booking Type and Destination */}
        {step === 1 && (
          <>
            <h4 className="mb-4 text-center text-capitalize">
              {bookingHeadings[formData.bookingType] || "Booking"}
            </h4>

            <div className="mb-3">
              <label>Booking Type</label>
              <div className="d-flex gap-2">
                {["hotel", "Cabs", "crus"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`btn ${formData.bookingType === type ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setFormData((prev) => ({ ...prev, bookingType: type }))}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label>Destination Pincode</label>
              <input
                type="number"
                name="destination_code"
                className="form-control"
                placeholder="Enter destination pincode"
                onChange={handlePincodeChange}
              />
            </div>

            <div className="mb-3">
              <label>Select Destination</label>
              <select
                name="destination"
                className="form-select"
                onChange={handleInputChange}
              >
                <option value="">Select destination</option>
                {destinations.map((item, index) => (
                  <option key={index} value={item.Name}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Check In</label>
              <Datetime onChange={(date) => handleDateChange("checkinTime", date)} />
            </div>

            <div className="mb-3">
              <label>Check Out</label>
              <Datetime onChange={(date) => handleDateChange("checkoutTime", date)} />
            </div>

            <div className="mb-3">
              <label>Adults</label>
              <select name="adult" className="form-select" onChange={handleInputChange}>
                <option value="">Select adults</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Children</label>
              <select name="child" className="form-select" onChange={handleInputChange}>
                <option value="">Select children</option>
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" onClick={() => setStep(2)} className="btn btn-primary w-100">
              Continue
            </button>
          </>
        )}

        {/* Step 2: User Info */}
        {step === 2 && (
          <>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                Back
              </button>
              <button type="button" onClick={() => setStep(3)} className="btn btn-primary">
                Continue to Payment
              </button>
            </div>
          </>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <>
            <h4>Mock Payment</h4>
            <p>Total: ₹{(formData.adult * 1000) + (formData.child * 500)}</p>

            <div className="d-flex justify-content-between">
              <button type="button" onClick={() => setStep(2)} className="btn btn-secondary">
                Back
              </button>
              <button type="submit" className="btn btn-success">
                Confirm Booking
              </button>
            </div>
          </>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center">
            <h3 className="text-success">🎉 Booking Confirmed!</h3>
            <p>Thank you {formData.fullName}, your booking has been received.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Booking;
