import React from "react";

import { Text, Input, Img } from "components";
import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[96%]">
          <div className="header-row mt-[14px] mb-[11px]">
            <Text
              className="font-inter font-medium text-bluegray_800 text-left"
              as="h6"
              variant="h6"
            >
              Welcomback, Team!
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-inter font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
            wrapClassName="flex md:ml-[0] md:w-[100%] ml-[227px] sm:hidden sm:w-[100%] w-[38%]"
            name="SearchBox"
            placeholder="Search..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[16px] mr-[8px] sm:hidden my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  color="#828fa2"
                  className="cursor-pointer ml-[10px] mr-[22px] sm:hidden my-[auto]"
                  onClick={() => setInputvalue("")}
                />
              ) : (
                ""
              )
            }
            shape="srcRoundedBorder4"
            size="smSrc"
            variant="srcOutlineBluegray200"
          ></Input>
          <Img
            src="images/img_shoppingbag.svg"
            className="h-[24px] sm:hidden md:ml-[0] ml-[132px] w-[24px]"
            alt="shoppingbag"
          />
          <div
            className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[24px] w-[24px]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <div className="bg-red_600 h-[8px] mb-[14px] outline outline-[2px] outline-white_A700 rounded-[50%] w-[8px]"></div>
          </div>
          <Text
            className="font-inter font-normal sm:hidden md:ml-[0] ml-[24px] not-italic text-gray_500 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            <span className="text-gray_500 text-[16px]">Hello,</span>
            <span className="text-bluegray_900 text-[16px]"> </span>
            <span className="text-bluegray_900 text-[16px] font-medium">
              Sam
            </span>
          </Text>
          <Img
            src="images/img_sherlocktoyfa.png"
            className="h-[40px] md:h-[auto] sm:hidden md:ml-[0] ml-[13px] rounded-[50%] w-[40px]"
            alt="SherlockToyFa"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
