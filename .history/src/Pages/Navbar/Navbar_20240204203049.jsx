import React from 'react'
import { AudioOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Space } from 'antd';
import Ebay from '../../Img/Ebay.png'
import '../../Stayle/navbar.css'
import Search from 'antd/es/input/Search';
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const items = [
    {
        key: '1',
        label: (
            <p>1st menu item</p>
        ),
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

export default function Navbar() {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

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
                        <Space style={{ cursor: "pointer" }}>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            <div>
                <div>
                    <Badge count={5}>
                        <Avatar shape="square" size="large" />
                    </Badge>
                </div>
            </div>
        </div>
    )
}
