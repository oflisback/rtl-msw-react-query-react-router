import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";
type RenderWithRouterOptions = {
  route?: string;
} & RenderOptions;
function renderWithRouter(
  ui: ReactElement,
  { route = "/", ...renderOptions }: RenderWithRouterOptions = {},
) {
  window.history.pushState({}, "Test page", route);
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    ),
    ...renderOptions,
  });
}
export { renderWithRouter };
