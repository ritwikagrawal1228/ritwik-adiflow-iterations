import React from "react";

import { Img, Text, Line, Input, Switch, SelectBox, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[492px] md:w-[100%] w-[88%]">
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[71%]"
                  onClick={() => navigate("/dashboardone")}
                >
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[66%]"
                  onClick={() => navigate("/customer")}
                >
                  <Img
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between mt-[32px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] w-[39%]"
                  onClick={() => navigate("/filemanagementdefault")}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] w-[63%]"
                  onClick={() => navigate("/calendermonth")}
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[46%]"
                  onClick={() => navigate("/shippinginfo")}
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[43%]"
                  onClick={() => navigate("/cartproductlist")}
                >
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="mail"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[62%]">
                  <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-deep_orange_300 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[870px] mb-[154px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[19px] items-end justify-between mb-[155px] mt-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[67%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Settings
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter gap-[32px] items-start justify-start mt-[32px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Account info.
                      </Text>
                      <Text
                        className="common-pointer font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                        onClick={() => navigate("/ekycbegin")}
                      >
                        <span className="text-bluegray_900 text-[14px] font-inter">
                          Verify your information to proctect your account.{" "}
                        </span>
                        <span className="text-deep_orange_300 text-[14px] font-inter font-semibold">
                          Verify now
                        </span>
                      </Text>
                    </div>
                    <div className="gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Username
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group16007"
                          placeholder="Sam"
                          shape="RoundedBorder4"
                          size="2xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Email address
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="email"
                          placeholder="sambrown@gmail.com"
                          shape="RoundedBorder4"
                          size="4xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          First name
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group16009"
                          placeholder="Sam"
                          shape="RoundedBorder4"
                          size="2xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Last name
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group16010"
                          placeholder="Brown"
                          shape="RoundedBorder4"
                          size="2xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[21px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex items-center justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Password Reset
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start pt-[5px] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Current password
                          </Text>
                          <Input
                            className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            type="password"
                            name="password"
                            placeholder="************"
                            shape="RoundedBorder4"
                            size="lg"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            New password
                          </Text>
                          <Input
                            className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            type="password"
                            name="password One"
                            placeholder="************"
                            shape="RoundedBorder4"
                            size="lg"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Notifications
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Open notification to receive our news fastly
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-center justify-start mt-[42px] md:w-[100%] w-[84%]">
                        <Switch value={true} className="w-[19%]" />
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send notification to mail
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-end justify-start mt-[32px] md:w-[100%] w-[75%]">
                        <Switch value={true} className="w-[21%]" />
                        <Text
                          className="font-normal mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send new promotion
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-end justify-start mb-[20px] mt-[32px] md:w-[100%] w-[70%]">
                        <Switch value={false} className="w-[23%]" />
                        <Text
                          className="font-normal mt-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Notice my balance
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-start md:mt-[0] mt-[56px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[33%]">
                  <div className="flex items-start justify-end md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold mt-[7px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Payment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start mt-[32px] w-[100%]">
                    <SelectBox
                      className="font-semibold text-[16px] text-bluegray_800 text-left w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="Paypal"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[20px] mr-[0] pl-[35px] pr-[20px] sm:pl-[20px] border-indigo_51 border-[1px] border-solid w-[20px] rounded-[4px] py-[18px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="bg-indigo_401 flex flex-row items-start justify-between pt-[6px] rounded-[4px] w-[100%]">
                      <div className="md:h-[177px] h-[83px] mt-[94px] relative w-[60%]">
                        <Text
                          className="absolute bottom-[33%] font-medium right-[0] text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1234 **** 4567 8901{" "}
                        </Text>
                        <Img
                          src="images/img_group_140X140.png"
                          className="absolute h-[83px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[4px] w-[54%]"
                          alt="Group Two"
                        />
                      </div>
                      <div className="h-[161px] md:h-[177px] mb-[16px] relative w-[26%]">
                        <Img
                          src="images/img_group_12X40.svg"
                          className="h-[12px] mt-[13px] mx-[auto] rounded-[4px] w-[51%]"
                          alt="Group Three"
                        />
                        <Img
                          src="images/img_group_161X165.png"
                          className="absolute h-[161px] inset-[0] justify-center m-[auto] object-cover rounded-[4px] w-[100%]"
                          alt="Group Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[37px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Type your email
                    </Text>
                    <Input
                      className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="email"
                      name="email One"
                      placeholder="Ackermanlhn@gmail.com"
                      shape="RoundedBorder4"
                      size="4xl"
                      variant="OutlineIndigo51"
                    ></Input>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] md:ml-[0] ml-[45px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[70%]"
                    as="h6"
                    variant="h6"
                  >
                    Please make sure that all your information precisely
                  </Text>
                  <Button
                    className="cursor-pointer font-bold min-w-[306px] mt-[60px] text-[14px] text-center text-white_A700 w-[auto]"
                    shape="CircleBorder24"
                    size="4xl"
                    variant="FillDeeporange300"
                  >
                    Save change
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
