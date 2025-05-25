type CasePropertyValues<ModelPropertyType> = ModelPropertyType[];

export type CaseValues<Model> = {
  [key in keyof Model]: CasePropertyValues<Model[key]>;
};
