import { CaseArrangeConfigProps, CaseArrangement } from "../types";
import { getCaseArrangement } from "./get-case-arrangement";

type ReducerCase<StateProps, ActionProps> = {
  arrangement: CaseArrangement<StateProps>;
  action: ActionProps;
  assertion: StateProps;
};

const getReducerCases = <StateProps, ActionProps>(
  initialState: StateProps,
  arrangementConfig: CaseArrangeConfigProps<StateProps> | undefined,
  action: ActionProps,
  assertion: Partial<StateProps>,
): ReducerCase<StateProps, ActionProps>[] => {
  const arrangements = getCaseArrangement<StateProps>(initialState, arrangementConfig);

  return arrangements.map((arrangement) => ({
    arrangement,
    action,
    assertion: { ...initialState, ...arrangement.state, ...assertion },
  }));
};

type CaseProps<StateProps, ActionProps> = {
  arrange?: CaseArrangeConfigProps<StateProps>;
  act: ActionProps;
  assert: Partial<StateProps>;
};

export const initialiseCases = <
  StateProps,
  ActionProps
>(
  reducer: (state: StateProps, action: ActionProps) => StateProps,
  initialState: StateProps,
) => {
  const cases: (ReducerCase<StateProps, ActionProps> & { description: string; })[] = [];
  const obj = {
    cases,
    case: (description: string, { arrange, act, assert }: CaseProps<StateProps, ActionProps>) => {
      const newCases = getReducerCases<StateProps, ActionProps>(
        initialState,
        arrange,
        act,
        assert,
      );
      newCases.forEach((newCase) => cases.push({ description, ...newCase}));
      return obj;
    },
    done: () => {
      // TODO: We can multiply out all possible arrangements against each other and the initial arrangement
      // for all initialState properties, and use them to create a group of tests where the action is not
      // expected to change the state.
      // TODO: MVP. Create the suite of tests.
      cases.forEach(({ arrangement: { setup, state }, action, assertion, description }) => {
        it(description, () => {
          setup();
          const actual = reducer(state, action);
          const expected: StateProps = assertion;
          expect(actual).toStrictEqual(expected);
        });
      });
    },
  };

  return obj;
};
