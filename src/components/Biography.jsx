import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="whoweare" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>We are all in 2024!</h3>
        <p>
        ZeeCare Medical Hospital and Institute is a premier healthcare facility committed to providing exceptional medical services and advancing medical education. With a legacy of excellence, we have established ourselves as a trusted name in the healthcare industry. Our state-of-the-art infrastructure, combined with a team of highly skilled professionals, ensures that we deliver the highest quality of care to our patients.
        </p>
        <p>We are all in 2024!</p>
        <p>We are working on a Visionary Healthcare Project..</p>
        <p>
        At ZeeCare, we are currently engaged in a visionary healthcare project aimed at integrating modern medical technologies and practices to revolutionize patient care. Our project involves the development of comprehensive healthcare systems that leverage digital tools and innovative treatments to provide personalized care and improve health outcomes.
        </p>
        <p>Our team is dedicated to fostering a culture of continuous improvement and innovation in healthcare. We believe in the power of education, research, and collaboration to achieve the best possible outcomes for our patients and the broader community.</p>
        <p>Healthcare is our passion!</p>
      </div>
    </div>
  </>
);
};

export default Biography