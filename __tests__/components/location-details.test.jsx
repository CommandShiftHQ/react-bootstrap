import React from "react";
import Enzyme from "enzyme";
import LocationDetails from "../../components/location-details";

it("takes a city and country and renders inside a h1", () => {
  const wrapper = Enzyme.shallow(<LocationDetails city="foo" country="bar" />);

  const text = wrapper.find("h1").text();
  expect(text).toBe("foo, bar");
});
