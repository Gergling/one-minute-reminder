import { getInitialIteration } from "./get-initial-iteration";
import { getTotalIterations } from "./get-total-iterations";
import { simpleMockModelCaseValues } from "./mock-data";

describe('getTotalIterations', () => {
  it('should return the total number of possible iterations based on an iteration', () => {
    const totalIterations = getTotalIterations(getInitialIteration(simpleMockModelCaseValues));
    expect(totalIterations).toBe(4);
  });
});
