# API Documentation

## User Routes

### Authentication
- **POST /user/register** - Register a new user
- **POST /user/login** - Login user
- **POST /user/forgot-password** - Request password reset OTP
- **POST /user/verify-otp** - Verify password reset OTP
- **POST /user/reset-password** - Reset user password
- **POST /user/logout** - Logout user

### Booking
- **POST /user/create-trip** - Create a new trip booking

## Admin Routes

### Trips
- **POST /admin/create-trip** - Create a new trip (admin only)
- **GET /admin/bookings** - Get all bookings
- **GET /admin/hotels** - Get all hotel bookings
- **GET /admin/flights** - Get all flight bookings
- **GET /admin/cars** - Get all car rental bookings

