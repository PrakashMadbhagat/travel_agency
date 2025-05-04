// src/components/HotelTable.jsx
import React, { useEffect, useState } from 'react';
import { Table, Spinner, Container, Button, Alert } from 'react-bootstrap';
import API from '../../api/index';

const HotelTable = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Admin token not found in localStorage.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API.BASE_URL}/admin/hotel-get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch hotel bookings.');
        }

        const data = await response.json();
        setHotels(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Hotel Bookings</h4>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : hotels.length === 0 ? (
        <Alert variant="info">No hotel bookings available.</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Destination</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel._id}>
                <td>{hotel._id.slice(0, 6).toUpperCase()}</td>
                <td>{hotel.fullName}</td>
                <td>{hotel.email}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.destination}</td>
                <td>{formatDate(hotel.checkIn)}</td>
                <td>{formatDate(hotel.checkOut)}</td>
                <td>{hotel.adult}</td>
                <td>{hotel.child}</td>
                <td>₹{hotel.amount}</td>
                <td>
                  <Button variant="outline-danger btn-danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default HotelTable;
