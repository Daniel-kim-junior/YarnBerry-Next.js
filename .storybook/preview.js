import { configure, addDecorator } from "@storybook/react"; // <- or your view layer
import { withTests } from "@storybook/addon-jest";

import results from "../.jest-test-results.json";
import { ThemeProvider } from "styled-components";
import { loadStories } from "./load-stories";

import { Default as Theme } from "../src/themes";

addDecorator((story) => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

addDecorator(
  withTests({
    results,
  })
);

configure(() => {
  loadStories();
}, module);
