import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const TripCard = ({ trip }) => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    persons: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePayment = () => {
    setTimeout(() => {
      console.log('Booking Successful!', { ...formData, tripId: trip._id });
      setStep(3);
    }, 1500);
  };

  const resetModal = () => {
    setShowModal(false);
    setStep(1);
    setFormData({
      email: '',
      name: '',
      phone: '',
      persons: 1,
    });
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 border-0 shadow-lg rounded-4 trip-card overflow-hidden">
        <div className="position-relative">
          <img
            src={trip.img}
            className="card-img-top"
            alt={trip.tripName}
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <div className="trip-badge position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
            {trip.tripName}
          </div>
        </div>
        <div className="card-body d-flex flex-column p-4 bg-light">
          <p className="text-muted small mb-3" style={{ flexGrow: 1 }}>
            {trip.discription.length > 110
              ? trip.discription.substring(0, 110) + '...'
              : trip.discription}
          </p>

          <div className="trip-details mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark fw-bold">Price:</span>
              <span className="text-success fw-bold">
                ₹{trip.price} <small className="text-muted">/person</small>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="text-dark fw-bold">Limit:</span>
              <span className="text-secondary">{trip.personLimitation} People</span>
            </div>
          </div>

          <button className="btn trip-btn mt-auto w-100 fw-bold" onClick={() => setShowModal(true)}>
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={resetModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {step === 1 ? 'Enter Your Details' : step === 2 ? 'Payment' : 'Success'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 1 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
              <input
                type="number"
                name="persons"
                placeholder="How Many Persons?"
                min="1"
                value={formData.persons}
                onChange={handleInputChange}
                className="form-control"
              />
              <Button className="btn btn-primary w-100 mt-3" onClick={handleNext}>
                Continue to Payment
              </Button>
            </>
          )}

          {step === 2 && (
            <div className="text-center">
              <h5>Total Payable:</h5>
              <h4 className="text-success mb-4">₹{trip.price * formData.persons}</h4>
              <p className="text-muted mb-3">Proceed to secure payment</p>
              <Button className="btn btn-success w-100" onClick={handlePayment}>
                Pay Now
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <h4 className="text-success mb-3">🎉 Payment Successful!</h4>
              <p>Thank you <strong>{formData.name}</strong> for booking your trip to <strong>{trip.tripName}</strong>!</p>
              <Button className="btn btn-primary w-100 mt-3" onClick={resetModal}>
                Done
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style jsx="true">{`
        .trip-card {
          background: #ffffff;
          transition: all 0.4s ease;
        }

        .trip-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .trip-badge {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        }

        .trip-btn {
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          border: none;
          color: white;
          transition: background 0.4s ease;
          font-size: 1rem;
        }

        .trip-btn:hover {
          background: linear-gradient(135deg, #feb47b, #ff7e5f);
          color: white;
        }

        @media (max-width: 768px) {
          .trip-card {
            margin: 0 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default TripCard;
