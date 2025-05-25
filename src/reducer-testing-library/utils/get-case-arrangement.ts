import { CaseArrangeConfigProps, CaseArrangement } from "../types";

export const getCaseArrangement = <StateProps>(
  initialState: StateProps,
  arrangementConfig?: CaseArrangeConfigProps<StateProps>,
): CaseArrangement<StateProps>[] => {
  // It's easiest to handle an undefined config here.
  if (!arrangementConfig) return getCaseArrangement<StateProps>(
    initialState,
    () => [{ setup: () => {}, state: initialState }]
  );

  if (typeof arrangementConfig === 'function') {
    const arrangementData = arrangementConfig();
    const caseArrangements: CaseArrangement<StateProps>[] = [];
    if (Array.isArray(arrangementData)) {
      if (arrangementData.length === 0) throw new Error(`An arrangement function returning an empty array has no use.`);
      arrangementData.forEach(({ setup, state, states }) => {
        if (states) {
          if (states.length > 0) {
            states.forEach((state) => caseArrangements.push({ setup, state: { ...initialState, ...state } }));
            return;
          }

          caseArrangements.push({ setup, state: initialState })
          return;
        }
        
        caseArrangements.push({ setup, state: { ...initialState, ...state } });
      });

      return caseArrangements;
    }

    return getCaseArrangement<StateProps>(initialState, () => [arrangementData])
  }

  if (Array.isArray(arrangementConfig)) {
    return getCaseArrangement<StateProps>(initialState, () => [{ setup: () => {}, states: arrangementConfig }]);
  }

  return getCaseArrangement<StateProps>(initialState, () => [{ setup: () => {}, state: arrangementConfig }]);
};
