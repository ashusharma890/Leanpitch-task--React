import React,{useState,useEffect} from 'react';
import { Menu,Typography,Button,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,BulbOutlined,MenuOutlined} from '@ant-design/icons';



const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();
        return () => window.removeEventListener('resize',handleResize);
    },[]);

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false);
        }
        else{
            setActiveMenu(true);
        }
    },[screenSize]);

  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to='/homepage'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/trainings'>Trainings</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/meetups'>Meetups</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/webinars'>Webinars</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/conferences'>Conferences</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/videos'>Videos</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/pmspeakseries'>PM Speak Series</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/blogs'>Blogs</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/podcasts'>Podcasts</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/beaspeaker'>Be a Speaker</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/beavolunteer'>Be a Volunteer</Link>
                </Menu.Item>
            </Menu>
        )}
    </div>
  )
}

export default NavBar