import React from "react";
import { Button } from "./button.component";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/eHvxf9SAJx2BZ57z13txpN/Material-UI-for-Figma-(and-MUI-X)-(Community)?node-id=6594%3A974380",
  {
    props: {
      label: figma.string("Label"),
      endIcon: figma.boolean("End Icon"),
      startIcon: figma.boolean("Start Icon"),
      size: figma.enum("Size", {
        Large: "large",
        Medium: "medium",
        Small: "small",
      }),
      color: figma.enum("Color", {
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Warning: "warning",
        Info: "info",
        Success: "success",
        Inherit: "inherit",
      }),
      state: figma.enum("State", {
        Enabled: "enabled",
        Hovered: "hovered",
        Focused: "focused",
        Pressed: "pressed",
        Disabled: "disabled",
      }),
      variant: figma.enum("Variant", {
        Contained: "contained",
        Outlined: "outlined",
        Text: "text",
      }),
    },
    example: (props) => (
      <Button
        buttonProps={{
          variant: props.variant,
          color: props.color,
          size: props.size,
        }}
      >
        {props.label}
      </Button>
    ),
  }
);
