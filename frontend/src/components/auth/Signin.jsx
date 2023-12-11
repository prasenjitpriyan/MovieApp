import React from "react";
import Container from "../Container";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModalClasses } from "../../utils/theme";

const Signin = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-72"}>
          <Title>Sign in </Title>
          <FormInput label="Email" placeholder="john@email.com" name="email" />
          <FormInput label="Password" placeholder="********" name="password" />
          <Submit value="Sign in" />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/signup">Signup</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default Signin;
