import React from 'react';
import { Form, Input } from 'src/Components/FormElements';

const Login = () => (
  <React.Fragment>
    <Form width={[1, 1/2, 1/3]} mt={[3, 4, 5]}>
      <Input
        id="login-username"
        label="Username"
        width="100%"
        placeholder="Enter your username"
        mb={3}
      />

      <Input
        id="login-email"
        label="Email"
        width="100%"
        placeholder="Enter your email"
        type="email"
        mb={3}
      />

      <Input
        id="login-password"
        label="Password"
        width="100%"
        placeholder="Enter your password"
        type="password"
      />
    </Form>
  </React.Fragment>
);

export default Login;
