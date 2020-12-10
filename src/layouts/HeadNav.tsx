// 头部导航
import React from "react";
import { Menu } from "antd";
import { Link } from "umi";
const navData = [
  { name: "首页", key: "home", path: "/" },
  { name: "可视化", key: "visual", path: "/visual" }
];
const HeadNav = () => {
  return (
    <Menu theme="dark" mode="horizontal">
      {navData.map(v => {
        return (
          <Menu.Item key={v.key}>
            <Link to={v.path}>{v.name}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default HeadNav;
