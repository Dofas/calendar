import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router";
import { RouteNames } from "../router";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const NavBar: FC = () => {
  const router = useHistory();
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <>
            <div style={{ color: "green", marginRight: "10px" }}>User name</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("loguted")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="vertical" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
