import { logRoles, render, screen } from "@testing-library/react";
import App from "../App";

test('App renders a heading', () => {
  render(<App />)

  screen.getByRole('heading', {
    name: "Welcome to biztrips-App",
  })

});

const sum = function sum(a, b) {
  return a + b;
};
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//----
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
