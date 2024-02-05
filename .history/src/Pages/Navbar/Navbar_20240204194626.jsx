import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Ebay from '../../Img/Ebay.png'
import '../../Stayle/navbar.css'
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

export default function Navbar() {
    return (
        <div>
            <div><img src={Ebay} /></div>
            <div>
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{cursor:"pointer"}}>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div></div>
        </div>
    )
}
