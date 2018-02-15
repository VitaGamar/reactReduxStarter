import React from "react";
import { createMockStore } from 'redux-test-utils'
import AddCounter from "./AddCounter";
import { shallowWithStore } from "../utils/testsHelper";

const setup = () => {
  const testState = {};
  const store = createMockStore(testState);
  const wrapper = shallowWithStore(<AddCounter />, store);

  return {
    wrapper,
    store
  }
};

describe("AddCounter", () => {

  it('should render component', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it("button on page should exist", () => {
    const { wrapper } = setup();
    const button = wrapper.dive().find('button');
    expect(button).toBeDefined();
  });

  it("button on page should be name as 'Add'", () => {
    const { wrapper } = setup();
    const button = wrapper.dive().find('button').first();
    expect(button.text()).toEqual("Add");
  });

  it("should dispatch an action on button click", () => {
    const { wrapper, store } = setup();
    const button = wrapper.dive().find("button").first();

    button.simulate("click", { preventDefault: jest.fn() });
    expect(store.isActionDispatched({
      type: "ADD_COUNTER",
      payload: 1
    })).toBeTruthy();
  });

});

