import React from "react";

import Header1 from "components/Header1";
import { Text, Img, CheckBox, Slider, List, Button } from "components";

const CustomerPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-white_A700 flex items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start sm:pl-[20px] pl-[243px] md:pl-[40px] w-[100%]">
            <Header1 className="bg-white_A700 flex items-center justify-center md:px-[20px] w-[100%]" />
            <div className="bg-gray_51 flex flex-col font-poppins gap-[37px] items-start justify-center p-[23px] md:px-[20px] w-[100%]">
              <Text
                className="mt-[15px] text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Customer
              </Text>
              <div className="bg-white_A700 font-inter md:h-[1059px] h-[810px] mb-[35px] sm:pr-[20px] pr-[32px] relative rounded-[4px] shadow-bs w-[100%]">
                <div className="absolute flex flex-row md:gap-[40px] items-end justify-between left-[3%] top-[4%] w-[91%]">
                  <Text
                    className="font-bold mt-[5px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_bluegray_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="search"
                  />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] pr-[2px] py-[2px] top-[12%] w-[91%]">
                  <div className="flex h-[20px] items-center justify-end sm:w-[100%] w-[20px]">
                    <CheckBox
                      className="h-[16px]"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      name="file"
                    ></CheckBox>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[55px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[104px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[197px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Phone
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[155px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[80px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Status
                  </Text>
                </div>
                <Slider
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="absolute left-[0] top-[0] w-[100%]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <List
                        className="flex-col md:gap-[20px] grid mx-[10px]"
                        orientation="vertical"
                      >
                        <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file One"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[7%]">
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="RobotoToyFaceFi"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Jack
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[106px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2371 Reppert Coal Road
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[75px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            601-540-6298
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[89px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12931
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[99px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user"
                          />
                        </div>
                        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Two"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-end justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[12%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="Fidenza978Toy"
                            />
                            <Text
                              className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fort Myers
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[59px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            927 Sunburst Drive
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[112px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            239-346-5244
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[86px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12932
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[96px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user One"
                          />
                        </div>
                        <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Three"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-end justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[11%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="VanGoghByAmrit"
                            />
                            <Text
                              className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Benjamin
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[71px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1671 Carriage Court
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[107px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            760-390-1331
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[93px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12933
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[95px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Two"
                          />
                        </div>
                        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Four"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-end justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[11%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="Fidenza978Toy One"
                            />
                            <Text
                              className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Flanagan
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[72px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            121 Courtright Street
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[100px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[89px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12934
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[95px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed600"
                          >
                            Error
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Three"
                          />
                        </div>
                        <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Five"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] w-[10%] md:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="VanGoghByAmrit One"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Nicoletti
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[78px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1060 Stark Hollow Road
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[81px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            {" "}
                            970-757-0036
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[85px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12935
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[96px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Four"
                          />
                        </div>
                        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Six"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[9%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="Fidenza978Toy Two"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Robert
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[90px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            424 Charter Street
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[115px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            913-207-2627
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[92px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12936
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[95px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Five"
                          />
                        </div>
                        <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Seven"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[9%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="VanGoghByAmrit Two"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Rankin
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[90px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            60 Corpening Drive
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[111px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            248-930-4978
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[87px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12937
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[96px] text-[14px] text-bluegray_800 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillAmber300"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Six"
                          />
                        </div>
                        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Eight"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] md:w-[100%] w-[12%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="Fidenza978Toy Three"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Clementine
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[54px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4337 Fleming Way
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[118px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            757-735-4769
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[91px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12938
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[95px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Seven"
                          />
                        </div>
                        <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] p-[17px] w-[100%]">
                          <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[3px] sm:w-[100%] w-[20px]">
                            <CheckBox
                              className="h-[16px]"
                              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                              name="file Nine"
                            ></CheckBox>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[55px] w-[10%] md:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                              alt="VanGoghByAmrit Three"
                            />
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Mitchell
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[81px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2758 My Drive
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[149px] text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            631-827-7596
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[91px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12939
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[93px] md:ml-[0] ml-[95px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="h-[24px] md:ml-[0] ml-[59px] w-[24px]"
                            alt="user Eight"
                          />
                        </div>
                      </List>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Img
                  src="images/img_close_24X24.svg"
                  className="absolute h-[24px] right-[4%] top-[4%] w-[24px]"
                  alt="close"
                />
                <div className="absolute bottom-[4%] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] w-[95%]">
                  <Button
                    className="cursor-pointer flex h-[32px] items-center justify-center w-[32px]"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[20px]"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] text-[14px] text-bluegray_900 text-center w-[32px]"
                    size="2xl"
                    variant="OutlineBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] text-[14px] text-bluegray_800 text-center w-[32px]"
                    size="2xl"
                    variant="OutlineIndigo51_1"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] text-[14px] text-bluegray_800 text-center w-[32px]"
                    size="2xl"
                    variant="OutlineIndigo51_1"
                  >
                    ...
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-[32px] md:ml-[0] ml-[8px] text-[14px] text-bluegray_800 text-center w-[32px]"
                    size="2xl"
                    variant="OutlineIndigo51_1"
                  >
                    9
                  </Button>
                  <Button
                    className="cursor-pointer flex h-[32px] items-center justify-center md:ml-[0] ml-[8px] w-[32px]"
                    onClick={() => sliderRef.current?.slideNext?.()}
                    size="lgIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className=""
                      alt="arrowright"
                    />
                  </Button>
                  <Text
                    className="font-medium md:ml-[0] ml-[764px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    9 of 200 data
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
