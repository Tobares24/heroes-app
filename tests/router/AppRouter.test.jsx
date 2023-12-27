/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";

describe("Pruebas en <AppRouter/>", () => {
  test("debe mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ contextValue }}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe de mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Juan",
        id: "123",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={{ contextValue }}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });
});
