import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Schedule = () => {
  return (
    <div style={{ backgroundColor: '#D0DAE0' }}>
      <div className='text-center mb-5'>
        <h2>Schedule Management</h2>
      </div>
      <Form>
        <Row className="mb-3 mx-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Enter Student Name</Form.Label>
            <Form.Control type="password" placeholder="Enter Student Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 mx-5" controlId="formGridAddress1">
          <Form.Label>Enter School Name & Address</Form.Label>
          <Form.Control placeholder="School Name" />
        </Form.Group>

        <Row className="mb-3 mx-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Enter Teacher Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Teacher Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Enter your Time to Meet</Form.Label>
            <Form.Control type="password" placeholder="Enter Time" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 mx-5" controlId="formGridAddress2">
          <Form.Label>Enter Your Residential Address</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3 mx-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Class</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Section</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Roll No.</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button className='mx-5 text-center' variant="info" type="submit">
          Book Your Appointment
        </Button>
      </Form>
    </div>
  )
}

export default Schedule