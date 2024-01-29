import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type RenderWithRouterOptions = {
  route?: string;
} & RenderOptions;

const renderWithWrapper = (
  ui: ReactElement,
  { route = "/", ...renderOptions }: RenderWithRouterOptions = {},
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </QueryClientProvider>
    ),
    ...renderOptions,
  });
};
export { renderWithWrapper };
