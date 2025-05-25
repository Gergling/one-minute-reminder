import { getIncrementedIteration } from "./get-incremented-iteration";
import { getInitialIteration } from "./get-initial-iteration";
import { getModel } from "./get-model";
import { simpleMockModelCaseValues } from "./mock-data";

describe('getModel', () => {
  it('should get a model based on the case values and an iteration', () => {
    const initialIteration = getInitialIteration(simpleMockModelCaseValues);
    const initialModel = getModel(simpleMockModelCaseValues, initialIteration);
    const incrementedIteration = getIncrementedIteration(initialIteration);
    const incrementedModel = getModel(simpleMockModelCaseValues, incrementedIteration);
    expect(initialModel).toStrictEqual({
      explicit: 'a',
      numeric: 0,
    });
    expect(incrementedModel).toStrictEqual({
      explicit: 'b',
      numeric: 0,
    });
  });
});
