import React from "react";

import { Img, Text, Line, Button } from "components";
import Header from "components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { useNavigate } from "react-router-dom";

const TracktasksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
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
                    src="images/img_folder_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[19px] w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start mb-[173px] mt-[18px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="sm:mt-[0] mt-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Product design
                  </Text>
                  <Text
                    className="font-normal mb-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px] font-poppins">
                      File management/
                    </span>
                    <span className="text-bluegray_800 text-[16px] font-poppins">
                      {" "}
                      Product design
                    </span>
                  </Text>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="font-inter gap-[20px] w-[100%]"
                >
                  {" "}
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start py-[24px] rounded-[4px] shadow-bs w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col md:gap-[16px] items-center justify-between w-[100%]">
                                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[auto]">
                                    <Img
                                      src="images/img_arrowup_24X24.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="arrowup"
                                    />
                                    <div className="flex flex-row font-poppins items-center justify-center md:ml-[0] ml-[16px] md:w-[100%] w-[14%]">
                                      {expanded && (
                                        <Img
                                          src="images/img_television.svg"
                                          className="h-[24px] w-[24px]"
                                          alt="television"
                                        />
                                      )}
                                      <Text
                                        className="font-normal ml-[12px] not-italic text-bluegray_900 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        In process (10)
                                      </Text>
                                      {!expanded && (
                                        <Img
                                          src="images/img_television.svg"
                                          className="h-[24px] w-[24px]"
                                          alt="television One"
                                        />
                                      )}
                                    </div>
                                    <Button
                                      className="cursor-pointer font-semibold md:ml-[0] ml-[797px] text-[14px] text-bluegray_800 text-center w-[98px]"
                                      shape="CircleBorder20"
                                      size="2xl"
                                      variant="FillGray51"
                                    >
                                      Edit{" "}
                                    </Button>
                                  </div>
                                  <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <div className="font-poppins gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mb-[8px] md:w-[100%] w-[95%]">
                            <div className="border-[2px] border-indigo_51 border-solid flex items-center justify-center p-[55px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                              <div className="flex flex-col gap-[43px] items-center justify-start my-[17px] w-[100%]">
                                <Button
                                  className="flex h-[56px] items-center justify-center rounded-[50%] w-[56px]"
                                  size="2xlIcn"
                                  variant="icbFillRed52"
                                >
                                  <Img
                                    src="images/img_plus_24X24.svg"
                                    className="h-[20px]"
                                    alt="plus"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-bold text-bluegray_800 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Add file
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Add file to manage your vital task
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start pt-[5px] w-[100%]">
                                <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    LD presentation file
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex items-center justify-start mt-[24px] w-[100%]">
                                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Process (80%)
                                    </Text>
                                    <div className="flex flex-row gap-[6px] items-center justify-between w-[100%]">
                                      <Line className="bg-indigo_401 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_401 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_401 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_401 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-[32px] relative rounded-[16px] w-[64%]">
                                      <Img
                                        src="images/img_robototoyfacefi.png"
                                        className="absolute h-[32px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[32px]"
                                        alt="RobotoToyFaceFi"
                                      />
                                      <Img
                                        src="images/img_fidenza978toy.png"
                                        className="absolute h-[32px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[32px]"
                                        alt="Fidenza978Toy"
                                      />
                                    </div>
                                  </div>
                                  <Button
                                    className="flex h-[32px] items-center justify-center mt-[35px] rounded-[50%] w-[32px]"
                                    size="mdIcn"
                                    variant="icbFillGray51"
                                  >
                                    <Img
                                      src="images/img_overflowmenu.svg"
                                      className="h-[20px]"
                                      alt="overflowmenu"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start pt-[6px] w-[100%]">
                                <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Urgent Tasks
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex items-center justify-start mt-[24px] w-[100%]">
                                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Process (10%)
                                    </Text>
                                    <div className="flex flex-row gap-[6px] items-center justify-between w-[100%]">
                                      <Line className="bg-indigo_401 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-[32px] relative rounded-[16px] w-[64%]">
                                      <Img
                                        src="images/img_robototoyfacefi.png"
                                        className="absolute h-[32px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[32px]"
                                        alt="RobotoToyFaceFi One"
                                      />
                                      <Img
                                        src="images/img_fidenza978toy.png"
                                        className="absolute h-[32px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[32px]"
                                        alt="Fidenza978Toy One"
                                      />
                                    </div>
                                  </div>
                                  <Button
                                    className="flex h-[32px] items-center justify-center mt-[35px] rounded-[50%] w-[32px]"
                                    size="mdIcn"
                                    variant="icbFillGray51"
                                  >
                                    <Img
                                      src="images/img_overflowmenu.svg"
                                      className="h-[20px]"
                                      alt="overflowmenu One"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col items-start justify-start pt-[4px] w-[100%]">
                                <div className="flex flex-col gap-[17px] items-start justify-start md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Plan for 2022
                                  </Text>
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Introduction about LD
                                    <br />
                                    Project in detail
                                  </Text>
                                </div>
                                <div className="flex items-center justify-start mt-[24px] w-[100%]">
                                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Process (0%)
                                    </Text>
                                    <div className="flex flex-row gap-[6px] items-center justify-between w-[100%]">
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                      <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between mt-[28px] w-[100%]">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Members
                                    </Text>
                                    <Img
                                      src="images/img_tintin22.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="TinTinTwentyTwo"
                                    />
                                  </div>
                                  <Button
                                    className="flex h-[32px] items-center justify-center mt-[35px] rounded-[50%] w-[32px]"
                                    size="mdIcn"
                                    variant="icbFillGray51"
                                  >
                                    <Img
                                      src="images/img_overflowmenu.svg"
                                      className="h-[20px]"
                                      alt="overflowmenu Two"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TracktasksPage;
