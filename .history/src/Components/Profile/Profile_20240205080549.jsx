import React from 'react';
import { Button, Dropdown } from 'antd';

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
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
export default function Profile(){

} 
    <>
    <Dropdown
        menu={{
            items,
        }}
        placement="bottomRight"
        arrow
    >
        <Button>bottomRight</Button>
    </Dropdown>
    </>
);
export default Profile;