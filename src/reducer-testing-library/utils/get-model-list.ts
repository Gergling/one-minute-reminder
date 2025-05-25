import { CaseValueIteration, CaseValues } from "../types";
import { getEntries } from "./get-entries";
import { getIncrementedIteration } from "./get-incremented-iteration";
import { getInitialIteration } from "./get-initial-iteration";
import { getModel } from "./get-model";
import { getTotalIterations } from "./get-total-iterations";

export const getModelList = <Model extends object>(
  baseInitialState: Model,
  caseValues: CaseValues<Partial<Model>>
): Model[] => {
  const baseInitialCaseValues = getEntries<Model>(baseInitialState);
  const fullStateCaseValues = baseInitialCaseValues.reduce((acc, { key, value }) => {
    const casePropertyValues = caseValues[key];
    return {
      ...acc,
      [key]: casePropertyValues || [value] 
    };
  }, {} as CaseValues<Model>);
  const initialIteration = getInitialIteration(caseValues);

  const length = getTotalIterations(initialIteration);
  const { models } = Array.from({ length }).reduce(
    ({
      iteration,
      models
    }: {
      iteration: CaseValueIteration<Model>[];
      models: Model[];
    }, _: unknown) => {
      // Generate model.
      const model = getModel(fullStateCaseValues, iteration);

      // Increment.
      const updatedIteration = getIncrementedIteration(iteration);

      return {
        iteration: updatedIteration,
        models: [
          ...models,
          model,
        ],
      };
    },
    {
      iteration: initialIteration,
      models: []
    }
  );

  return models;
};
