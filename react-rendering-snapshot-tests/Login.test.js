import {getByTestId, render, screen, renderHook, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import Login from "./Login";
import renderer  from 'react-test-renderer';
describe("Login component test",()=>{
    it("login button rendering",()=>{
        const {getByTestId}=render(<Login/>);
        const login=getByTestId("login_button");
        expect(login).toBeTruthy();
    });
    it('should render the component onto the screen', () => {
        render(<Login/>);
        expect(screen.getByTestId('username')).toBeInTheDocument();
    });
    it('Checking Submit button is enabled or not', () => {
        render(<Login/>);
        expect(screen.getByTestId('login_button')).toBeDisplay();
    });
    test('render user input correctly', () => {
        render(<Login />);
     
        const inputEl = screen.getByTestId("username");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
    });
    test('pass valid user to test user input field', () => {
        render(<Login/>);
     
        const inputEl = screen.getByTestId("username");
        userEvent.type(inputEl, "pragya");
     
        expect(screen.getByTestId("username")).toHaveValue("pragya");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    test('render password input correctly', () => {
        render(<Login />);
        
        const inputEl = screen.getByTestId("password");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password");
    });
    it("render input",()=>{
        const {getByTestId}=render(<Login/>);
        const login=getByTestId("login_button");
        expect(login).toBeTruthy();

    });
    it("render div",()=>{
        const {getByTestId} =render(<Login/>);
        const div=getByTestId("form1");
        expect(div).toBeTruthy();
    });
    it("check user session data",()=>{
        var value = "Nikunj";
        localStorage.setItem("user", value);
        var expectedValue = localStorage.getItem("user");
        console.log(expectedValue);
        expect(value).toEqual(expectedValue);
    });
    it("Test Click Event",()=>{
        const {getByTestId} =render(<Login/>);
        const div=getByTestId("form1");
        expect(div).toBeTruthy();
    });
});
test("username input should be rendered", () => {
    render(<Login/>);
    const userInputEl = screen.getAllByTestId("username");
    expect(userInputEl).toBeTruthy();
 })

test("login page test",()=>{
    const component=renderer.create(
      <Login/>
    );
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
  }
);