import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../components/Search";

describe("Search tests", () => {
  test("should render search query in the search bar", () => {
    const { getByTestId } = render(
      <Router>
        <Search searchQuery="book" />
      </Router>
    );
    // When testing external React components, need to pass down
    // props to the actual HTML element (via inputProps in Material)
    const input = getByTestId("search-input");
    expect(input.value).toBe("book");
  });
});
