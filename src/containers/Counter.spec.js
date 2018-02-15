import React from "react";
import { shallow } from 'enzyme';
import { Counter } from "./Counter";

const setup = propsOverrides => {
  const props = Object.assign({
    count: 0
  }, propsOverrides);

  const wrapper = shallow(<Counter {...props}/>);

  return {
    props,
    wrapper
  }
};

describe("Counter", () => {

  it('render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it("contain text with counter data", () => {
    const { wrapper } = setup({count: 2});
    expect(wrapper.text()).toEqual("2");
  });

});

