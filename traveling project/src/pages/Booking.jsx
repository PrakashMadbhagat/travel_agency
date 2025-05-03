import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "react-calendar/dist/Calendar.css";
import Styles from "../css/booking.module.css";
import API from "../api/index"; // Make sure this path is correct

const Booking = () => {
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loadingDestinations, setLoadingDestinations] = useState(false);
  const [formData, setFormData] = useState({
    bookingType: "hotel",
    destination_code: "",
    destination: "",
    checkinTime: "",
    checkoutTime: "",
    adult: "1",
    child: "0",
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
    handleInputChange(e);
    if (pincode.length === 6) {
      setLoadingDestinations(true);
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();
        if (data[0]?.Status === "Success") {
          setDestinations(data[0]?.PostOffice || []);
        } else {
          setDestinations([]);
          alert("No destinations found for this pincode.");
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        alert("Failed to fetch destinations. Please try again later.");
        setDestinations([]);
      } finally {
        setLoadingDestinations(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amount = parseInt(formData.adult) * 1000 + parseInt(formData.child) * 500;

    // ✅ Corrected category mapping to match backend expectations
    const categoryMap = {
      hotel: "Hotel",
      Cabs: "Car Rental",
      crus: "Cruise",
    };

    const payload = {
      category: categoryMap[formData.bookingType],
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      checkIn: new Date(formData.checkinTime).toISOString().split("T")[0],
      checkOut: new Date(formData.checkoutTime).toISOString().split("T")[0],
      adult: parseInt(formData.adult),
      child: parseInt(formData.child),
      amount: amount,
    };

    try {
      const response = await fetch(`${API.BASE_URL}/user/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Backend response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit booking");
      }

      setStep(4); // Show success screen
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  const bookingHeadings = {
    hotel: "Hotel Booking",
    Cabs: "Car Rental",
    crus: "Cruise Booking",
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 mt-5">Booking Form</h2>

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
              {loadingDestinations ? (
                <p>Loading...</p>
              ) : (
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
              )}
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
              <select name="adult" className="form-select" onChange={handleInputChange} value={formData.adult}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Children</label>
              <select name="child" className="form-select" onChange={handleInputChange} value={formData.child}>
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-primary w-100"
              disabled={!formData.destination || !formData.checkinTime || !formData.checkoutTime}
            >
              Continue
            </button>
          </>
        )}

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
                pattern="[0-9]{10}"
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

        {step === 3 && (
          <>
            <h4>Mock Payment</h4>
            <p>Total: ₹{parseInt(formData.adult) * 1000 + parseInt(formData.child) * 500}</p>
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
