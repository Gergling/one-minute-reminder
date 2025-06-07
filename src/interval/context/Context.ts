import { createContext } from "react";
import { IntervalModalContextProps } from "../types";

const noop = () => {};

export const IntervalModalContext = createContext<IntervalModalContextProps>({
  initialText: '',
  isOpen: false,
  onClose: noop,
  onSubmit: noop,
  open: noop,
});
