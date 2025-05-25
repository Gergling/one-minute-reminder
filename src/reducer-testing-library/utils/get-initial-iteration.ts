import { CaseValueIteration, CaseValues } from "../types";

export const getInitialIteration = <Model>(
  caseValues: CaseValues<Model>
): CaseValueIteration<Model>[] => Object
  .keys(caseValues)
  .map((keyStr): CaseValueIteration<Model> => {
    const key = keyStr as keyof Model;
    return {
      index: 0,
      key,
      length: caseValues[key].length,
    };
  });