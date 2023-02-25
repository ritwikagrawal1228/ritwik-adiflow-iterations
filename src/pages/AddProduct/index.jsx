import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  TextArea,
  Button,
} from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="flex flex-col gap-[36px] items-center justify-start mb-[524px] ml-[32px] mr-[54px] mt-[36px] w-[65%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] w-[57%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start w-[100%]">
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
                    src="images/img_trash_1.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash One"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[62%]"
                  onClick={() => navigate("/settings")}
                >
                  <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 h-[1071px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start my-[13px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Add Product
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Ecommerce/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Add Product
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-end mt-[35px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[5px] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic information
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[40px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:w-[100%] w-[57%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product name
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          type="text"
                          name="Group16056"
                          placeholder="Enter product’s name"
                          shape="RoundedBorder4"
                          size="4xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[39%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Select category
                        </Text>
                        <SelectBox
                          className="font-semibold text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="group18058"
                          placeholder="Data project"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="h-[6px] mr-[24px] w-[11px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          variant="OutlineIndigo51_1"
                        ></SelectBox>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[28px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start md:w-[100%] w-[57%]">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Branch
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            name="Group16057"
                            placeholder="Enter brach"
                            shape="RoundedBorder4"
                            size="2xl"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            name="Group16058"
                            placeholder="Enter brach"
                            shape="RoundedBorder4"
                            size="2xl"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[39%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product description
                        </Text>
                        <TextArea
                          className="font-normal not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="Group16059"
                          placeholder="Write something..."
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo51"
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-bold mt-[7px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Product image
                    </Text>
                    <div className="border-[2px] border-dashed border-indigo_51 flex items-center justify-end p-[87px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-center justify-start mt-[10px] md:w-[100%] w-[67%]">
                        <Img
                          src="images/img_image_bluegray_900.svg"
                          className="h-[28px] w-[28px]"
                          alt="image"
                        />
                        <div className="flex flex-col gap-[13px] items-center justify-end pt-[5px] px-[5px] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Upload image
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col justify-end p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[6px] mr-[435px] mt-[11px] text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Add link
                    </Text>
                    <div className="flex flex-col gap-[29px] items-center justify-start mr-[6px] mt-[36px] pt-[3px] md:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product Link
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group16060"
                          placeholder="Enter link"
                          shape="RoundedBorder4"
                          size="2xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Hashtag
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group16061"
                          placeholder="Enter tag"
                          shape="RoundedBorder4"
                          size="4xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end mb-[6px] md:ml-[0] ml-[195px] mr-[6px] mt-[62px] md:w-[100%] w-[61%]">
                      <Button
                        className="cursor-pointer font-bold min-w-[148px] text-[14px] text-center text-white_A700 w-[auto]"
                        shape="CircleBorder24"
                        size="4xl"
                        variant="FillDeeporange300"
                      >
                        Save
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[148px] text-[14px] text-bluegray_800 text-center w-[auto]"
                        shape="CircleBorder24"
                        size="4xl"
                        variant="FillGray51"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
