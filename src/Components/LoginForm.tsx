import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useActions()

  const submit = () => {
    login(username,password)
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <label>yevhen</label> <br />
      <label>liuklian</label>
      <Form.Item
        label="Введіть імя"
        name="username"
        rules={[rules.required("Поле для імені не може бути пустим")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <label>123</label> <br />
      <label>234</label>
      <Form.Item
        label="Введіть пароль"
        name="password"
        rules={[rules.required("Пароль не може бути пустим")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Увійти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
