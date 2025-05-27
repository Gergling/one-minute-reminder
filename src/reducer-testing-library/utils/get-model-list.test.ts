import { getModelList } from "./get-model-list";
import { simpleMockModel, SimpleMockModel, simpleMockModelCaseValues } from "./mock-data";

describe('getModelList', () => {
  it('should return a complete list of models based on the case value', () => {
    const actual = getModelList(simpleMockModel, simpleMockModelCaseValues);
    const expected: SimpleMockModel[] = [
      {
        explicit: 'a',
        numeric: 0,
      },
      {
        explicit: 'b',
        numeric: 0,
      },
      {
        explicit: 'a',
        numeric: 1,
      },
      {
        explicit: 'b',
        numeric: 1,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
