import React from 'react';
import Card from 'antd/lib/card/Card';

const PmSpeakSeries = () => {
  return (
  <>
  < div className='test'>
    <h1 className='text-white text-center meetup'>Our PM Speak Series</h1>
    <div className=' d-flex justify-content-evenly pms'>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/pms1.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/pms2.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/pms3.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/pms4.jpeg" />}
      ></Card>
    </div>
    </div>
  </>
  )
}

export default PmSpeakSeries