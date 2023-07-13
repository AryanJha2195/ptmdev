import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHouseChimneyWindow, faCalendar, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <div>
    <div className='d-flex justify-content-center mt-5'>
    <div>
        <Figure>
        <Figure.Image
        width={1600}
        height={1600}
        alt="171x180"
        src="https://static.classdojo.com/img/page_home/features-2022/feature1.svg"
      />
    </Figure>
    </div>
    <div>
        <FontAwesomeIcon style={{fontSize: '50px', color: '#08a7ff'}} icon={faMessage} />
        <h3 style={{color: "#2C2A50"}}>Stay connected—instantly</h3>
        <p>Our communication platform revolutionizes the way you connect with teachers,
            families, and staff members. With our intuitive messaging system, you can easily
            initiate conversations and exchange information anytime, anywhere. Whether you 
            have a quick question for a teacher, need to share important updates with families,
            or want to communicate with staff members, our messaging feature is designed to 
            streamline communication and ensure that everyone stays connected.  🌎</p>
    </div>
    </div>


    <div className='d-flex justify-content-center mt-5 mx-4'>    
    <div>
        <FontAwesomeIcon style={{fontSize: '50px', color: 'F6B03E'}} icon={faHouseChimneyWindow} />
        <h3 style={{color: "#2C2A50"}}>Offer a window into their world</h3>
        <p>Experience the magic of the classroom through our innovative Stories feature.
           With Stories, teachers have a secure and private platform to share captivating photos, engaging videos, and exciting updates with parents.
           It's like having a window into the classroom, allowing parents to witness and celebrate the remarkable moments of their child's educational journey.✨</p>
    </div>
    <div>
        <Figure>
        <Figure.Image
        width={1500}
        height={1500}
        alt="171x180"
        src="https://static.classdojo.com/img/page_home/features-2022/feature2.svg"
      />
    </Figure>
    </div>
    </div>

    <div className='d-flex justify-content-center mt-5'>
    <div>
        <Figure>
        <Figure.Image
        width={1600}
        height={1600}
        alt="171x180"
        src="https://static.classdojo.com/img/page_home/features-2022/feature3.svg"
      />
    </Figure>
    </div>
    <div>
        <FontAwesomeIcon style={{fontSize: '50px', color: '#E9C2F6'}} icon={faCalendar} />
        <h3 style={{color: "#2C2A50"}}>Keep everyone up-to-date</h3>
        <p>Keep everyone in the loop and ensure that important events are never 
            missed with our convenient calendar feature. Adding events to the 
            calendar is a breeze, allowing teachers, parents, and staff to stay
            organized and informed. Whether it's parent-teacher conferences,
            school holidays, special events, or deadlines, our calendar feature
            simplifies event management and helps foster effective communication within the community. 📅</p>
    </div>
    </div>

    <div className='d-flex justify-content-center mt-5 mx-4'>    
    <div>
        <FontAwesomeIcon style={{fontSize: '50px', color: '#49F028'}} icon={faTrophy} />
        <h3 style={{color: "#2C2A50"}}>Help them grow their own way</h3>
        <p>At ClassDojo, we believe in the power of collaboration between teachers and
             families to support social-emotional learning. With our innovative Points
              and Big Ideas features, we provide a platform where teachers and families
               can work together to foster positive behaviors and nurture important life skills.
                By aligning efforts and sharing insights, we create a strong foundation for students
                 to thrive academically, socially, and emotionally.🎨</p>
    </div>
    <div>
        <Figure>
        <Figure.Image
        width={1500}
        height={1500}
        alt="171x180"
        src="https://static.classdojo.com/img/page_home/features-2022/feature4.svg"
      />
    </Figure>
    </div>
    </div>
    </div>
  )
}

export default Content