import React, { useState } from 'react';
import { Button, Dropdown, Avatar } from 'antd';

const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
};
const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
};
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
const Profile = () => (
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
        <Avatar
            style={{
                backgroundColor: color,
                verticalAlign: 'middle',
            }}
            size="large"
            gap={gap}
        >
            {user}
        </Avatar>
        <Button
            size="small"
            style={{
                margin: '0 16px',
                verticalAlign: 'middle',
            }}
            onClick={changeUser}
        >
            ChangeUser
        </Button>
        <Button
            size="small"
            style={{
                verticalAlign: 'middle',
            }}
            onClick={changeGap}
        >
            changeGap
        </Button>
    </>
);
export default Profile;