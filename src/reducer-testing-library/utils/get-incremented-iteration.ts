import { CaseValueIteration } from "../types";

export const getIncrementedIteration = <Model>(
  original: CaseValueIteration<Model>[]
): CaseValueIteration<Model>[] => {
  let incremented = false;
  return original.map((iteration) => {
    const { index, length } = iteration;
    if (incremented) return iteration;

    if (index >= length - 1) {
      return {
        ...iteration,
        index: 0,
      };
    }

    incremented = true;
    return {
      ...iteration,
      index: index + 1,
    };
  });
};
