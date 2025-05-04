// src/components/AdminProfile.jsx
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from 'react-bootstrap';

const AdminProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      setPreviewPic(URL.createObjectURL(file));
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Normally, form data would be sent here.
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordUpdated(true);
    // Normally, password update request would go here.
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Admin Profile</h3>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <div className="mb-3">
                <img
                  src={
                    previewPic ||
                    'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png'
                  }
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
              <Form.Group controlId="profilePic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.Control type="file" onChange={handlePicChange} />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Edit Personal Info</Card.Header>
            <Card.Body>
              {formSubmitted && (
                <Alert variant="success">Profile updated successfully!</Alert>
              )}
              <Form onSubmit={handleProfileSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" defaultValue="Admin User" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" defaultValue="admin@example.com" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Change Password</Card.Header>
            <Card.Body>
              {passwordUpdated && (
                <Alert variant="success">Password updated successfully!</Alert>
              )}
              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Current password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
