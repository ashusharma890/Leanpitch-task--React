import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const Conference = () => {
  return (
    <>
    < div className='test '>
      <h1 className='text-white text-center'>Our Conferences</h1>

      <div className="d-flex justify-content-center ">
        <img src="/images/meeting1.jpeg" alt="" srcset="" />
      </div>

      <div className="d-block col-md-6 text-white text-center conft">
        <p>Conferences are not just about learning from the speakers. It's also about meeting new people, learning from attendees, making connections, getting to know each other and being part of a community. </p>
        <p>Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.</p>
        <p>We will be back with more information once COVID subsides</p>
      </div>
      <div className="d-flex justify-content-center confb">
        <Button type="primary" shape={"round"} icon={<ArrowRightOutlined/>} size={'large'} danger >
        Notify me
      </Button>
      </div>
      </div>
    </>
  )
}

export default Conference