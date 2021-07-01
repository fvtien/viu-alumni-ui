import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

import ViuLogo from "@/app/assets/images/viu-logo.png";
import Banner from "@/app/components/banner";
import "./login.component.scss";
import UserAPI from "@/app/shared/apis/user.api";
import StorageService from "@/core/services/storage";

const LoginPage = () => {
  const [form] = Form.useForm();

  const history = useHistory();

  const [isFormValid, setFormValid] = useState(false);

  const checkValidForm = useCallback(() => {
    const isValid =
      form.getFieldValue("username") &&
      form.getFieldValue("username").length > 0 &&
      form.getFieldValue("password") &&
      form.getFieldValue("password").length > 0;

    if (isValid !== isFormValid) {
      setFormValid(isValid);
    }
  }, [form, isFormValid, setFormValid]);

  const login = useCallback(() => {
    const username = form.getFieldValue("username");
    const password = form.getFieldValue("password");

    UserAPI.login(username, password).subscribe(loginData => {
      if (loginData) {
        StorageService.set("token", loginData.token);
        history.push("/");
      }
    });
  }, [form, history]);

  return (
    <div className="login-page">
      <div className="login-page__bg">
        <div className="login-page__carousel">
          <Banner />
        </div>
      </div>
      <div className="login-page__form">
        <div className="login-page__inner">
          <div className="login-page__logo">
            <img src={ViuLogo} alt="" />
          </div>
          <h2 className="login-page__title text-center">VIU Alumni</h2>
          <Form form={form} onChange={() => checkValidForm()}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Nhập mã sinh viên",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Mã sinh viên" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!isFormValid}
                type="primary"
                htmlType="submit"
                className="login-page__form__btn"
                onClick={login}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
          <p>
            <Link to="/">
              <LeftCircleOutlined /> Quay lại trang chủ
            </Link>
          </p>
          <p className="text-center">
            Copyright © 2021 Đại học Công nghiệp Việt-Hung. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
