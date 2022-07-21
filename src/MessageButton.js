import React from "react";
import { Button, ValueState } from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/information.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";

export const getStyleAndIconForType = (type) => {
  switch (type) {
    case ValueState.Error:
    case "Error":
      return {
        style: {
          background: ThemingParameters.sapNegativeElementColor,
          color: ThemingParameters.sapButton_Emphasized_TextColor
        },
        icon: "error"
      };
    case ValueState.Success:
    case "Success":
      return {
        style: {
          background: ThemingParameters.sapPositiveElementColor,
          color: ThemingParameters.sapButton_Emphasized_TextColor
        },
        icon: "sys-enter-2"
      };
    case ValueState.Warning:
    case "Warning":
      return {
        style: {
          background: ThemingParameters.sapCriticalElementColor,
          color: ThemingParameters.sapButton_Emphasized_TextColor
        },
        icon: "alert"
      };
    default:
      return {
        style: {
          background: ThemingParameters.sapNeutralElementColor,
          color: ThemingParameters.sapButton_Emphasized_TextColor
        },
        icon: "information"
      };
  }
};

export const MessageButton = (props) => {
  const { count, valueState, onClick } = props;
  return (
    <Button onClick={onClick} {...getStyleAndIconForType(valueState)}>
      {count > 1 && count}
    </Button>
  );
};
