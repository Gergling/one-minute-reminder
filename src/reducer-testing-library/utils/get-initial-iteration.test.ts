import { CaseValues } from "../types";
import { getInitialIteration } from "./get-initial-iteration";

type SimpleModel = {
  explicit: 'a' | 'b';
  numeric: number;
};
const caseValues: CaseValues<SimpleModel> = {
  explicit: ['a', 'b'],
  numeric: [0, 1],
};

describe('getInitialIteration', () => {
  it('should generate an iteration with keys set to 0', () => {
    const iteration = getInitialIteration<SimpleModel>(caseValues);
    expect(iteration).toStrictEqual([
      {
        index: 0,
        key: 'explicit',
        length: 2,
      },
      {
        index: 0,
        key: 'numeric',
        length: 2,
      }
    ]);
  });
});
