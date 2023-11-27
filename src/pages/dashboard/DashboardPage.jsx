import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <Container>
      <h2 className="mt-4 mb-4">Dashboard Page</h2>

      <Row>
        {/* Card 1 */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Data 1</Card.Title>
              <Card.Text>Informasi tentang Data 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Data 2</Card.Title>
              <Card.Text>Informasi tentang Data 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Data 3</Card.Title>
              <Card.Text>Informasi tentang Data 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Data 4</Card.Title>
              <Card.Text>Informasi tentang Data 4</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Informasi Tambahan */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Informasi Tambahan 1</Card.Title>
              <Card.Text>Deskripsi informasi tambahan 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Informasi Tambahan 2</Card.Title>
              <Card.Text>Deskripsi informasi tambahan 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
