import { useEffect, useState } from "react";
import { EDeviceScreen } from "../utils/enum/IDevices";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(EDeviceScreen.unknown);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const determineDeviceType = () => {
      if (screenWidth <= 480 && screenHeight <= 640) {
        return EDeviceScreen.smartphone;
      } else if (screenWidth <= 768 && screenHeight <= 1024) {
        return EDeviceScreen.tablet;
      } else {
        return EDeviceScreen.computer;
      }
    };

    const newDeviceType = determineDeviceType();
    setDeviceType(newDeviceType);
  }, []);

  return deviceType;
};
