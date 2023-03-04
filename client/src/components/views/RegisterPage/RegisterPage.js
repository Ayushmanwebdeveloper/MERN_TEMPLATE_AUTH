import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter, Link } from "react-router-dom";
import { Row, Form, Input, Button, Checkbox, message } from "antd";

// ============================================================================
function RegisterPage(props) {
  const dispatch = useDispatch();

  const onSubmitHandler = (values) => {
    dispatch(registerUser(values)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Row justify="center" align="middle" style={{ height: "85vh" }}>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: "27rem", padding: "4rem", border: "1px solid rgba(0, 0, 0, 0.10)",borderRadius:"10px" }}
        initialValues={{ remember: true }}
        onFinish={onSubmitHandler}
      >
        {/* HEADER ---------------------------------------------------------*/}
        <h2 className="card-title" style={{fontWeight:"Bold",margin: "0 0 2rem 0" }}>Register</h2>

        {/* NAME -----------------------------------------------------------*/}
        <Form.Item
          label="Name"
          style={{ fontWeight: "Bold", fontSize: "20px" }}
          name="name"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type your name:",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        {/* EMAIL ----------------------------------------------------------*/}
        <Form.Item
          label="Email"
          style={{ fontWeight: "Bold", fontSize: "20px" }}
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type your email:",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        {/* PASSWORD -------------------------------------------------------*/}
        <Form.Item
          label="Enter Password"
          style={{ fontWeight: "Bold", fontSize: "20px" }}
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type your Password:",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* CONFIRM PASSWORD -----------------------------------------------*/}
        <Form.Item
          label="Enter Confirm Password"
          style={{fontWeight:"Bold", fontSize:"20px"}}
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password.",
            },
            // Check if password and confirmPassword match
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Please make sure your passwords match."));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

      

        {/* SUBMIT BUTTON --------------------------------------------------*/}
        <Form.Item>
          <button type="primary" className="btn btn-warning" htmlType="submit">
            Register
          </button>
        </Form.Item>

        {/* LINK -----------------------------------------------------------*/}
        <Form.Item>
          Already have an account? <Link to="/login">Sign in</Link>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default withRouter(RegisterPage);
