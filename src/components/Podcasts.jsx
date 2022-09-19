import React from 'react';
import Card from 'antd/lib/card/Card';

const Podcasts = () => {
  return (
  <>
  <div div className='test'>
    <h1 className='text-white text-center meetup'>Our Podcasts</h1>
    <div className=' d-flex justify-content-evenly pds'>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/p1.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/p2.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/p3.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/p4.jpeg" />}
      ></Card>

      <button type="button" class="btn btn-warning msg">Send Message</button>
    </div>
    </div>
  </>
  )
}

export default Podcasts