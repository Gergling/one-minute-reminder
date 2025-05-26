import { getEntries } from "./get-entries";

export const isStateChange = <StateProps>(
  change: Partial<StateProps>,
  state: StateProps
) => {
  if (change === state) return false;
  if (change === null) return true;
  if (typeof change === 'object') {
    return getEntries(change).filter(({
      key
    }) => change[key] !== state[key]).length > 0;
  }

  return true;
};
