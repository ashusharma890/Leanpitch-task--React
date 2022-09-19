import React from 'react';
import Card from 'antd/lib/card/Card';

const Blog = () => {
  return (
  <>
  < div className='test'>
    <h1 className='text-white text-center meetup'>Our Blogs</h1>
    <div className=' d-flex justify-content-evenly pms'>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/b1.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/b2.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/b3.jpeg" />}
      ></Card>
      <Card
        hoverable
        style={{
          width: 240,
          height:0,
        }}
        cover={<img alt="example" src="/images/b4.jpeg" />}
      ></Card>
    </div>
    </div>
  </>
  )
}

export default Blog