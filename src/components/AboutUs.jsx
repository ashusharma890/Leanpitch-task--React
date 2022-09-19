import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className="matter-heading">
      <h1 className='matter-head'>Why We Matter</h1>
    </div>
    <img src="/images/red_arrow.png" alt="red_arrow" srcset="" className='arrow'/>
    <div className="matter-imgs d-flex">
      <img src="/images/left_img.jpeg" alt="" srcset="" />
      <img src="/images/rightimg.jpeg" alt="" srcset="" />
    </div>
    <h1 className='heading'>Leanpitch Thinking Labs</h1>
    <div className="aboutus col-md-6 col-lg-3">
        <p>
          Leanpitch helps Organizations build the culture of #HappilyDeliveringHappiness, a state of Agility where everybody in the organization (sponsors, customers and developers) believe in common set of values and happy with the pace at which they deliver valuable Products. 

          We train and coach Organizations
          •	Build the right product for their end users. Learn about our Product Management tool leanGears Discovery @ leangears.com 
          •	Build the right culture using Scrum as a catalyst. Learn about our Agile Coaching services @ leanpitch.com 
          •	Build quality product faster using Engineering Practices

          We also offer:
          - Certified Scrum Trainings from Scrum Alliance
          - ICAgile Certified Programs
          - Atlasssian Product Trainings
          Leanpitch helps Organizations build the culture of #HappilyDeliveringHappiness, a state of Agility where everybody in the organization (sponsors, customers and developers) believe in common set of values and happy with the pace at which they deliver valuable Products. 

        </p>
        </div>
        <div className="btns">
        <Button type="primary" shape={"round"} icon={<ArrowRightOutlined/>} size={'large'} className='abbtn' danger >
        View Details
      </Button>
      <Button type="primary" shape={"round"} icon={<ArrowRightOutlined/>} size={'large'} className='abbtn' danger >
        Register Now
      </Button>
        </div>
        <div className="labimg d-flex">
          <img src="/images/pt_lab_image.png" alt="pt_lab_img" srcset="" />
        </div>
       
    </>
  )
}

export default AboutUs