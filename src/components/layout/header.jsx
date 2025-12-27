import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { BookOutlined, HomeOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('home');

    const { user } = useContext(AuthContext)

    console.log(">>> check data:", user);

    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <TeamOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        {
            label: "Setting",
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={'/login'}>Dang nhap</Link>,
                    key: 'login'
                },
                {
                    label: 'Dang xuat',
                    key: 'log out'
                }
            ]
        }
    ]
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default Header;