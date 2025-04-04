import styles from "./navbar.module.css";
import React, { useState } from 'react';
import Image from 'next/image'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

const items: MenuItem[] = [
    { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
    { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
    { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        { key: '5', label: 'Option 5' },
        { key: '6', label: 'Option 6' },
        { key: '7', label: 'Option 7' },
        { key: '8', label: 'Option 8' },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
          ],
        },
      ],
    },
  ];

type MenuItem = Required<MenuProps>['items'][number];

const Navbar: React.FC = () => {
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };

    return (
      <div className={styles.navbar}>
        <div className={styles.user}>
          
          <Image
            className={styles.logo}
            src="/logo/goodyear-logo-yellow.png"
            width={120}
            height={20}
            alt="Goodyear logo"
          />
          
        </div>
        <div className={styles.userDescription}>
          <Avatar size={48} icon={<UserOutlined />} />
          <div className={styles.userDescription}>
            <p className={styles.name}>Haim Guel Quiroz</p>
            <p className={styles.description}>Application Development Specialist</p>
          </div>
        </div>

        
        
    </div>  
    );

}

export default Navbar;


