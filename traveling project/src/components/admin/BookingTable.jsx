// src/components/BookingTable.jsx
import React, { useEffect, useState } from 'react';
import { Table, Spinner, Container, Button, Alert } from 'react-bootstrap';
import API from '../../api/index'

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Admin token not found in localStorage.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API.BASE_URL}/admin/booking-get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch bookings.');
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Recent Bookings</h4>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : bookings.length === 0 ? (
        <Alert variant="info">No bookings available.</Alert>
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
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id.slice(0, 6).toUpperCase()}</td>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.destination}</td>
                <td>{formatDate(booking.checkIn)}</td>
                <td>{booking.checkOut ? formatDate(booking.checkOut) : '-'}</td>
                <td>{booking.adult}</td>
                <td>{booking.child}</td>
                <td>₹{booking.amount}</td>
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

export default BookingTable;
