import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router';


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function index() {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values);
    localStorage.setItem('user',values.username)
    navigate('/admin/home')
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='w-full h-full relative  bg-cyan-300'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='sm:w-[400px] lg:w-[500px] 
          absolute left-1/2 top-1/2 -translate-x-1/2
           -translate-y-1/2
           sm:h-[300px] lg:h-[400px]
           '
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" className='bg-emerald-600' htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
