import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const { setUser } = useContext(AuthContext)

    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password)
        if (res.data) {
            message.success("Dang nhap thanh cong")
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/")
        } else {
            notification.error({
                message: "Error login",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false)
    }

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Dang nhap</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email khong duoc de trong!"
                                },
                                {
                                    type: "email",
                                    message: "Email phai dung dinh dang!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Password khong duoc de trong!"
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <Button type='primary' onClick={() => form.submit()}
                                    loading={loading}
                                >
                                    Login
                                </Button>
                                <Link to={'/'}>Go to homepage <ArrowRightOutlined /></Link>
                            </div>
                        </Form.Item>
                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chua co tai khoan? <Link to={'/register'}>Dang ky tai day</Link></div>
                </fieldset>
            </Col>
        </Row>
    )
}

export default LoginPage;