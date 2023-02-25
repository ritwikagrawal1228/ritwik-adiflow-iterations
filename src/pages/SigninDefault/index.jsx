import React from "react";

import { TextArea, Img, Text, Button, Line, Input, CheckBox } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SigninDefaultPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <div className="bg-colors h-[1030px] m-[auto] w-[100%]"></div>
        <div className="absolute flex md:flex-col flex-row gap-[59px] h-[max-content] inset-[0] items-start justify-center m-[auto] max-w-[1260px] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[132px] md:gap-[40px] justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[50%]">
            <TextArea
              className="bg-transparent border-[0] font-bold leading-[40.00px] md:ml-[0] ml-[173px] sm:text-[24px] md:text-[26px] text-[28px] placeholder:text-bluegray_900 text-bluegray_900 text-center sm:w-[100%] w-[50%]"
              name="Manageyourwor"
              placeholder="Manage your work more effectively"
            ></TextArea>
            <Img
              src="images/img_workingtime.svg"
              className="h-[483px] w-[100%]"
              alt="WorkingTime"
            />
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[46px] items-center justify-end p-[44px] sm:px-[20px] md:px-[40px] rounded-[20px] shadow-bs1 md:w-[100%] w-[46%]">
            <Text
              className="mt-[22px] text-bluegray_800 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Login to Utillia
            </Text>
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[88%]">
              <Button
                className="flex items-center justify-center text-center"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="mr-[35px] text-center"
                    alt="google"
                  />
                }
                shape="RoundedBorder4"
                size="6xl"
                variant="OutlineIndigo51"
              >
                <div className="common-pointer bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_800 text-left">
                  Login with Google
                </div>
              </Button>
              <div className="flex flex-row items-start justify-between mt-[54px] w-[100%]">
                <Line className="bg-indigo_51 h-[1px] my-[6px] w-[39%]" />
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Or
                </Text>
                <Line className="bg-indigo_51 h-[1px] my-[6px] w-[39%]" />
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start mt-[56px] md:w-[100%] w-[98%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="flex w-[100%]"
                  type="email"
                  name="email One"
                  placeholder="Infor@gmail.com"
                  prefix={
                    <Img
                      src="images/img_mail.svg"
                      className="ml-[20px] mr-[16px] my-[auto]"
                      alt="mail"
                    />
                  }
                  shape="RoundedBorder4"
                  size="3xl"
                  variant="OutlineIndigo51"
                ></Input>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start mt-[31px] md:w-[100%] w-[98%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="flex w-[100%]"
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_lock.svg"
                      className="ml-[20px] mr-[16px] my-[auto]"
                      alt="lock"
                    />
                  }
                  shape="RoundedBorder4"
                  size="xl"
                  variant="OutlineIndigo51"
                ></Input>
              </div>
              <div className="flex flex-row items-start justify-between mt-[113px] md:w-[100%] w-[99%]">
                <CheckBox
                  className="font-medium text-[14px] text-bluegray_800 text-left"
                  inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                  label="Remember"
                  name="Remember"
                  size="sm"
                ></CheckBox>
                <a
                  className="font-medium mt-[5px] text-[14px] text-bluegray_800 text-left underline w-[auto]"
                  href="javascript:"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold sm:min-w-[100%] min-w-[414px] mt-[80px] text-[14px] text-center text-white_A700 w-[auto]"
                onClick={() => navigate("/dashboardone")}
                shape="CircleBorder28"
                size="7xl"
                variant="FillDeeporange300"
              >
                LOGIN
              </Button>
              <div
                className="common-pointer flex flex-row gap-[4px] items-start justify-start mt-[56px] w-[auto]"
                onClick={() => navigate("/dashboardone")}
              >
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  You don’t have an account yet?
                </Text>
                <a
                  className="font-medium text-[14px] text-deep_orange_300 text-left underline w-[auto]"
                  href="javascript:"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;
