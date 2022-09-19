import { Card } from 'antd';
import React from 'react';

const Trainings = () => {
  return (
    < div className='test'>
      <h1 className='text-white text-center'>Our Trainings</h1>
        <div className="d-flex justify-content-evenly trainings">
            <Card
          hoverable
          style={{
            width: 233,
            height:233,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/img1.jpeg" />}
          >
          </Card>
            <Card
          hoverable
          style={{
            width: 230,
            height:230,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/img2.jpeg" />}
          >
          </Card>
            <Card
          hoverable
          style={{
            width: 240,
            height:253,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/img3.jpeg" />}
          >
          </Card>
        <Card
          hoverable
          style={{
            width: 230,
            height:230,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/img5.jpeg" />}
          >
          </Card>
          <Card
          hoverable
          style={{
            width: 230,
            height:230,
            position:'relative',
          }}
          className='t2'
          cover={<img alt="example" src="/images/img4.jpeg" />}
          >
          </Card>
          </div>
    </div>
  )
}

export default Trainings