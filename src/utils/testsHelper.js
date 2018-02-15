import {shallow} from "enzyme/build/index";

export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};
