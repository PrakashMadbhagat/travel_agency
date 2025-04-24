import React from "react";
import {Row, Container, Col} from "react-bootstrap";
import BookingTable from "../../components/admin/BookingTable";

const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                    <BookingTable />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Dashboard;