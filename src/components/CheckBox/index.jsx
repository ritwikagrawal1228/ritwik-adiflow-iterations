import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray40087: "outline outline-[0.7px] outline-bluegray_400_87",
};

const sizes = { sm: "pl-[4px] py-[4px]", md: "pt-[7px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],

      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${className} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
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

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineBluegray40087"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { CheckBox };
