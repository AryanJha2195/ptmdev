import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <>
    <Container className="text-center mt-4 ml-3 p-5">
        <h1 style={{fontFamily: "cursive", color: "#2C2A50"}}>Free Parent-Teacher Communication App that Just Works</h1>
        <h3 style={{fontFamily: "cursive", color: "#545382"}}>Teach2Parent connects teachers and families with one easy-to-use app for all their communication needs. And - it’s free!</h3>
        <Button variant="warning">Get Started</Button>
    </Container>

    <Container className='d-flex justify-content-center'>
    <Figure style={{cursor: 'pointer'}}>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src="https://img.freepik.com/free-vector/teacher-talking-with-her-students-white-background_1308-69937.jpg?w=2000"
      />
      <h6 className='d-flex justify-content-center'>Teacher</h6>
      <Figure.Caption className='d-flex justify-content-center'>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Figure.Caption>
    </Figure>

    <Figure style={{cursor: 'pointer'}}>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src="https://img.freepik.com/free-vector/parents-preparing-cute-daughter-school-love-study-backpack-flat-illustration-cartoon-illustration_74855-14475.jpg?w=2000"
      />
        <h6 className='d-flex justify-content-center'>Parent</h6>
      <Figure.Caption className='d-flex justify-content-center cursor-pointer'>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Figure.Caption>
    </Figure>

    <Figure style={{cursor: 'pointer'}}>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=2000"
      />
      <h6 className='d-flex justify-content-center'>Student</h6>
      <Figure.Caption className='d-flex justify-content-center'>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Figure.Caption>
    </Figure>
    </Container>
    </>
  )
}

export default HeroSection