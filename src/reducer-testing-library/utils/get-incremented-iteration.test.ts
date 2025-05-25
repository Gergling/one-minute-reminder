import { CaseValueIteration } from "../types";
import { getIncrementedIteration } from "./get-incremented-iteration";
import { getInitialIteration } from "./get-initial-iteration";
import { SimpleMockModel, simpleMockModelCaseValues } from "./mock-data";

const initialIteration = getInitialIteration<SimpleMockModel>(simpleMockModelCaseValues);

describe('getIncrementedIteration', () => {
  it('iterates', () => {
    const iteration = getIncrementedIteration<SimpleMockModel>(initialIteration);
    expect(iteration).toStrictEqual([
      {
        ...initialIteration[0],
        index: 1,
      },
      initialIteration[1],
    ]);
  });
  it('resets the index when it reaches the length and increments the next index', () => {
    const actual = getIncrementedIteration<SimpleMockModel>([
      {
        ...initialIteration[0],
        index: 1,
      },
      initialIteration[1],
    ]);
    const expected: CaseValueIteration<SimpleMockModel>[] = [
      initialIteration[0],
      {
        ...initialIteration[1],
        index: 1,
      }
    ];
    expect(actual).toStrictEqual(expected);
  });
});
