import React, { useRef } from "react";
import {
  ThemeProvider,
  ResponsivePopover,
  MessageView,
  ValueState,
  BarDesign,
  Bar
} from "@ui5/webcomponents-react";
import { MessageButton } from "./MessageButton";
import { generateMessageItems } from "./generateMessageItems";

// change the number of MessageItems here,
// the button is displayed according to the most critical message (Error -> Warning -> Success -> Information)
const numberOfItems = {
  information: 0,
  warning: 5,
  success: 3,
  error: 12
};

export default function App() {
  const ref = useRef();
  // just for demo purposes, should be adapted to specific use-case
  const mostCriticalMessageType = (() => {
    if (numberOfItems?.error > 0) return ValueState.Error;
    if (numberOfItems?.warning > 0) return ValueState.Warning;
    if (numberOfItems?.success > 0) return ValueState.Success;
    if (numberOfItems?.information > 0) return ValueState.Information;
    return null;
  })();

  return (
    <ThemeProvider>
      <Bar
        style={{ position: "absolute", bottom: 0 }}
        design={BarDesign.FloatingFooter}
        startContent={
          mostCriticalMessageType && (
            <div>
              <MessageButton
                valueState={mostCriticalMessageType}
                count={numberOfItems[mostCriticalMessageType.toLowerCase()]}
                onClick={(e) => {
                  ref.current.showAt(e.target);
                }}
              />
              <ResponsivePopover placementType="Top" ref={ref}>
                <MessageView showDetailsPageHeader groupItems>
                  {generateMessageItems(numberOfItems)}
                </MessageView>
              </ResponsivePopover>
            </div>
          )
        }
      ></Bar>
    </ThemeProvider>
  );
}
