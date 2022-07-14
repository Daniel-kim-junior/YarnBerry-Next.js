import HomePage from "../../pages/index";
export default {
  title: "MyComponent",
};

export const defaultView = () => <HomePage />;
defaultView.parameters = {
  jest: ["index.test.tsx"],
};
