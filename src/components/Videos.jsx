import React from 'react';
import Card from 'antd/lib/card/Card';

const Videos = () => {
  return (
    <>
    <div div className='test'>
      <h1 className='text-white text-center meetup'>Our Videos</h1>
      <div className='d-flex justify-content-left  videos'>
        <Card
          hoverable
          style={{
            width: 240,
            height:0,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/video1.jpeg" />}
        ></Card>
        <Card
          hoverable
          style={{
            width: 240,
            height:0,
            position:'relative',
          }}
          cover={<img alt="example" src="/images/video2.jpeg" />}
        ></Card>
      </div>
    </div>
    </>
  )
}

export default Videos