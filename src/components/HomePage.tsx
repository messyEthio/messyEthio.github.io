import { Button, Form, Input } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigation = useNavigate();
  const onLogin = (values: any) => {
    setLoading(true);
    setMessage("");
    const username = values.email;
    const passwords = values.password;
    const DB_USERNAME = process.env.REACT_APP_EMAIL;
    const DB_PASSWORD = process.env.REACT_APP_PASSWORD;
    if (username === DB_USERNAME && passwords === DB_PASSWORD) {
      navigation("/dashboard");
    } else {
      setMessage("Incorrect username and password is used. please try again):");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col w-4/12 items-center justify-center">
        <span className="flex flex-col items-center text-center text-lg mb-6">
          Login to your Eprint account
        </span>
        <Form
          className={"w-full"}
          form={loginForm}
          layout="vertical"
          onFinish={onLogin}
          requiredMark={false}
        >
          <div className="mb-2">
            <span className="text-red-600 text-center mb-8">{message}</span>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "please enter your email address.",
                },
              ]}
            >
              <Input
                autoComplete="email"
                type="email"
                placeholder={"Email address"}
                name="email"
              />
            </Form.Item>
          </div>

          <div className="mb-2">
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <Input type={"password"} placeholder="Password" name="password" />
            </Form.Item>
          </div>

          <div className="mt-10 text-center">
            <Button
              id="submit"
              type="primary"
              htmlType="submit"
              className="w-full flex justify-center space-x-3"
              loading={loading ? true : false}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default HomePage;
