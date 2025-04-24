// src/components/BookingTable.jsx
import React from 'react';
import styles from '../../css/BookingTable.module.css';

const BookingTable = () => {
  const bookings = [
    { id: '#1234', customer: 'John Doe', date: '2025-04-20', status: 'Pending' },
    { id: '#1235', customer: 'Jane Doe', date: '2025-04-19', status: 'Completed' },
    { id: '#1236', customer: 'Mike Ross', date: '2025-04-18', status: 'Cancelled' },
    { id: '#1237', customer: 'Rachel Zane', date: '2025-04-17', status: 'Pending' },
  ];

  return (
    <div className={styles.tableContainer}>
      <h4>Recent Bookings</h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.date}</td>
              <td>
                <span className={`${styles.status} ${styles[booking.status.toLowerCase()]}`}>
                  {booking.status}
                </span>
              </td>
              <td>
                <button className={styles.actionBtn}>View / Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
