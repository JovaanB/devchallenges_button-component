import React from "react";
import styled from "styled-components";
import { colors } from "../config/colors";
import MaterialIcon from "material-icons-react";

const convertToRGB = (hex) => {
  if (hex.length !== 7) {
    console.log("La couleur n'est pas valide.");
    return;
  }

  const removeFirst = hex.substring(1);

  var aRgbHex = removeFirst.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

const handleSize = (size) => {
  switch (size) {
    case "sm":
      return "6px 12px";
    case "lg":
      return "11px 22px";
    default:
      return "8px 16px";
  }
};

const handleVariant = (variant, color) => {
  const AltColor = `rgba(${convertToRGB(color.alt)}, 0.1)`;
  switch (variant) {
    case "outlined":
      return `background-color: inherit; 
       color: ${
         variant === "outlined" && color.label === "default"
           ? `${color.textColor}`
           : `${color.value}`
       }};
       &:hover, &:focus, &.isFocus { 
        background-color: ${AltColor}; 
       }`;
    case "text":
      return `background-color: inherit; 
      color: ${color.value}; 
      box-shadow: inherit; 
      border: none; 
      &:hover, &:focus, &.isFocus { 
        background-color: ${AltColor}; 
      }; 
      &:disabled { 
        background-color: inherit; 
        &:hover { 
          background-color: inherit; 
        } 
      }`;
    default:
      return `background-color: ${color.value}; color: ${color.textColor}; border: none;`;
  }
};

const StyledButton = styled.button`
  border: ${({ variant, chooseColor }) =>
    `${
      variant === "outlined" && chooseColor.label === "default"
        ? `1px solid ${chooseColor.textColor}`
        : `1px solid ${chooseColor.value}`
    }`};

  &:hover,
  &:focus,
  &.isFocus {
    background-color: ${({ chooseColor }) => chooseColor.alt};
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;

    &:hover {
      background-color: $e0e0e0;
    }
  }

  ${({ variant, chooseColor }) => handleVariant(variant, chooseColor)}

  box-shadow: ${({ disableShadow }) =>
    !disableShadow && `0px 2px 3px rgba(51, 51, 51, 0.2)`};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  padding: ${({ size }) => handleSize(size)};
  text-align: center;
  font-size: 14px;
`;

const TextContainer = styled.span`
  margin-left: ${({ startIcon }) => (startIcon?.length > 0 ? `10px` : "0px")};
  margin-right: ${({ endIcon }) => (endIcon?.length > 0 ? `10px` : "0px")};
  width: 49px;
  height: 20px;
`;

const CustomButton = ({
  text = "Default",
  variant,
  size,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  isFocus,
  color = "default",
  ...props
}) => {
  const chooseColor = colors.find((oneColor) => oneColor.label === color);

  return (
    <StyledButton
      variant={variant}
      size={size}
      disableShadow={disableShadow}
      disabled={disabled}
      chooseColor={chooseColor}
      className={isFocus && "isFocus"}
      {...props}
    >
      <MaterialIcon
        icon={startIcon}
        size={14}
        inactive={disabled}
        color="inherit"
      />
      <TextContainer startIcon={startIcon} endIcon={endIcon}>
        {text}
      </TextContainer>
      <MaterialIcon
        icon={endIcon}
        size={14}
        inactive={disabled}
        color="inherit"
      />
    </StyledButton>
  );
};

export default CustomButton;
