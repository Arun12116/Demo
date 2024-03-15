
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("onChange event updates input value", () => {
    render(<App />);
    const inputBox = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputBox, { target: { value: "new value" } });
    expect(inputBox.value).toBe("new value");
  });

  test("component contains expected 1 button", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);


  });
  test("button is disabled", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "submit" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("component contains expected 1 button", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "login" });
    expect(button).toBeInTheDocument();
  });

  test("event test click", async () => {
    render(<App />);
    const btn = screen.getByRole("button", { name: "login" });
    fireEvent.click(btn);

    // Wait for the state to update
    await waitFor(() => {
      expect(screen.getByText("hello")).toBeInTheDocument();

    });



  })

  //  check boxes
  test("test check boxes", () => {
    render(<App />)
    let checkBox = screen.getByLabelText("Male")
    expect(checkBox).toBeInTheDocument();

    expect(checkBox).toBeChecked();


  })


  // test("input field has correct placeholder text", () => {
  //   render(<App />);
  //   const inputField = screen.getByPlaceholderText("enter a name");
  //   expect(inputField).toBeInTheDocument();
  // });




});










