"use client";

import { Layout, Menu } from "antd";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      {children}
    </Content>
  );
};

export default Contents;
