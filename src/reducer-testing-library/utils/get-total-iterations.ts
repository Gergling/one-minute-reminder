import { CaseValueIteration } from "../types";

export const getTotalIterations = <Model>(
  iteration: CaseValueIteration<Model>[]
): number => iteration.reduce((total, { length }) => length * total, 1);
