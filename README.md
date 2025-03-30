# Travel Booking API

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
EMAIL_USER=<your-email-for-nodemailer>
EMAIL_PASS=<your-email-password-for-nodemailer>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

## API Endpoints

### User Routes

#### Register a new user

- **URL**: `/user/register`
- **Method**: `POST`
- **Auth required**: No
- **Request Body**:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "phoneNumber": "1234567890",
  "role": "user"
}
```

- **Success Response**:

- **Code**: 201
- **Content**: `{ "msg": "Registration Successful" }`

- **Error Response**:

- **Code**: 400
- **Content**: `{ "msg": "Please enter all fields" }` or `{ "msg": "Passwords do not match" }` or `{ "msg": "User already exists with this email." }`

#### Login a user

- **URL**: `/user/login`
- **Method**: `POST`
- **Auth required**: No
- **Request Body**:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- **Success Response**:

- **Code**: 200
- **Content**: `{ "message": "Login successful", "token": "JWT_TOKEN", "role": "user" }`

- **Error Response**:

- **Code**: 404
- **Content**: `{ "message": "User not found" }`
- **Code**: 401
- **Content**: `{ "message": "Invalid password" }`

### Booking Routes

#### Create a new booking

- **URL**: `/user/booking`
- **Method**: `POST`
- **Auth required**: Yes (User role)
- **Headers**: `Authorization: Bearer YOUR_TOKEN`
- **Request Body for Hotel Booking**:

```json
{
  "category": "Hotel",
  "destination": "Paris",
  "checkIn": "2023-12-01",
  "checkOut": "2023-12-05",
  "adult": 2,
  "child": 1,
  "amount": 1200
}
```

- **Success Response**:

- **Code**: 201
- **Content**: Created booking object

- **Error Response**:

- **Code**: 400
- **Content**: `{ "message": "Invalid category" }` or `{ "message": "Error creating trip", "error": "error message" }`

### Authentication

The API uses JWT (JSON Web Token) for authentication. After successful login, a token is provided which should be included in the Authorization header for protected routes:

```plaintext
Authorization: Bearer <token>
```

## Database Models

### User Model

- fullName: String (required)
- email: String (required, unique, lowercase)
- phoneNumber: String (required, unique)
- password: String (required, hashed)
- role: String (enum: ["user", "admin"], default: "user")

### Booking Model

- userId: ObjectId (reference to User)
- category: String (enum: ["Hotel", "Flight", "Car Rental"])
- destination: String (for Hotel)
- checkIn: Date (for Hotel)
- checkOut: Date (for Hotel)
- amount: Number

## Technologies Used

- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Token for authentication
- **bcrypt**: Password hashing
- **Nodemailer**: Sending emails for OTP
- **Multer**: Handling file uploads
- **Cloudinary**: Cloud storage for images

## Project Structure

```plaintext
├── config/
│   ├── db.js                # Database connection
│   ├── nodemailer.js        # Email configuration
│   └── otpService.js        # OTP generation service
├── controllers/
│   ├── admin.controller.js  # Admin route handlers
│   ├── booking.controller.js # Booking route handlers
│   └── user.controller.js   # User route handlers
├── middlewares/
│   ├── authentication.js    # JWT verification
│   ├── cloudinary.js        # Image upload to Cloudinary
│   └── multer.js            # File upload handling
├── models/
│   ├── booking.model.js     # Booking schema
│   ├── trip.model.js        # Trip schema
│   └── user.model.js        # User schema
├── routes/
│   ├── admin.route.js       # Admin routes
│   ├── booking.route.js     # Booking routes
│   └── user.route.js        # User routes
├── .env                     # Environment variables
├── index.js                 # Entry point
└── package.json             # Dependencies
```

