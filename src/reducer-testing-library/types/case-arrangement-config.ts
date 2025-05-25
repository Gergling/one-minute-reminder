type CaseArrangeSetupStateProps<Model> = {
  state: Partial<Model>;
  states?: never;
} | {
  state?: never;
  states: Partial<Model>[];
};

type CaseArrangeSetupProps<Model> = {
  setup: () => unknown;
} & CaseArrangeSetupStateProps<Model>;
type CaseArrangeSetupCallbackProps<Model> = () => (CaseArrangeSetupProps<Model>[]
  | CaseArrangeSetupProps<Model>);

export type CaseArrangeConfigProps<Model> = CaseArrangeSetupCallbackProps<Model>
  | Partial<Model>[]
  | Partial<Model>;
