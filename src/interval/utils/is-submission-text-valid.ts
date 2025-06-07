const isNumericTextSubmissionValid = (
  text: string
): boolean => {
  const numericText = +text;
  if (!isNaN(numericText)) return false;
  if (numericText < 1) return false;

  return true;
};

export const isSubmissionTextValid = (
  initialText: string,
  text: string,
): boolean => {
  if (text === '') return false;
  if (text === initialText) return false;

  return isNumericTextSubmissionValid(text);
};
