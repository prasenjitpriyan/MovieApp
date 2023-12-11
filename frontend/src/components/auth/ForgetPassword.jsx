import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";

const ForgetPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="john@email.com" name="email" />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Signin</CustomLink>
            <CustomLink to="/auth/signup">Signup</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgetPassword;
