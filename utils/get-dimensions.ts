import { Dimensions } from "react-native";

const dimensions = Dimensions.get("window");

export const isTablet = (): boolean => dimensions.width >= 600;