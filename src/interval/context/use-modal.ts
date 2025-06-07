import { useContext } from "react";
import { IntervalModalContext } from "./Context";

export const useIntervalModal = () => useContext(IntervalModalContext);
