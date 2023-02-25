import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillGreen700_1: "bg-green_700",
  FillRed600: "bg-red_600",
  FillGreen700: "bg-green_700",
  FillIndigo401: "bg-indigo_401",
  FillAmber300: "bg-amber_300",
  FillRed600_1: "bg-red_600",
  FillWhiteA700: "bg-white_A700",
  FillGreen700_2: "bg-green_700",
};

const sizes = { sm: "pt-[5px]", md: "pb-[6px]" };

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],

      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${className} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,

  variant: PropTypes.oneOf([
    "FillGreen700_1",
    "FillRed600",
    "FillGreen700",
    "FillIndigo401",
    "FillAmber300",
    "FillRed600_1",
    "FillWhiteA700",
    "FillGreen700_2",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { Radio };
