export type IntervalModalContextProps = {
  initialText: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (updatedText: string) => void;
  open: (initialText: string) => void;
};
