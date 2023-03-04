import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter, Link } from "react-router-dom";
import { Row, Form, Input, Button, Checkbox, message } from "antd";

// ============================================================================
// Error Message for Email/Password validation process.

const onSubmitErrorHandler = (error_message) => {
  message.error({
    content: error_message,
    style: { marginTop: "10vh" },
  });
};

// ============================================================================
function LoginPage(props) {
  const dispatch = useDispatch();

  const onSubmitHandler = (values) => {
    // values = {email: "", password: "", remember: true/false}
    // values.preventDefault();

    dispatch(loginUser(values)).then((response) => {
      if (response.payload.loginSuccess) {
        window.localStorage.setItem("userId", response.payload.userId);
        if (values.remember === true) {
          window.localStorage.setItem("remember", true);
        } else {
          window.localStorage.removeItem("remember");
        }
        props.history.push("/");
      } else {
        onSubmitErrorHandler(response.payload.message);
      }
    });
  };

  return (
    <Row justify="center" align="middle" style={{ height: "80vh" }}>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: "27rem", padding: "4rem", border: "1px solid rgba(0, 0, 0, 0.10)" }}
        initialValues={{ remember: true }}
        onFinish={onSubmitHandler}
        onFinishFailed={onSubmitErrorHandler}
      >
        {/* HEADER ---------------------------------------------------------*/}
        <h2 style={{ fontWeight: "Bold",margin: "0 0 2rem 0" }}>Sign In</h2>

        {/* EMAIL ----------------------------------------------------------*/}
        <Form.Item
          label="Email"
          style={{ fontWeight: "Bold", fontSize: "20px" }}
          name="email"
          rules={[
            {
              required: true,
              message: "Please type in your email.",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        {/* PASSWORD -------------------------------------------------------*/}
        <Form.Item
          label="Password"
          style={{ fontWeight: "Bold", fontSize: "20px" }}
          name="password"
          rules={[
            {
              required: true,
              message: "Please type in your password.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* REMEMBER ME CHECKBOX -------------------------------------------*/}
        <Form.Item name="remember" valuePropName="checked" style={{ fontWeight: "Bold", fontSize: "20px" }}>
          
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>

        {/* SUBMIT BUTTON --------------------------------------------------*/}
        <Form.Item>
          <button type="primary" className="btn btn-warning" htmlType="submit">
            Sign In
          </button>
        </Form.Item>

        {/* LINK -----------------------------------------------------------*/}
        <Form.Item>
          Or <Link to="/register">Register Here</Link>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default withRouter(LoginPage);
