import {getByTestId, render, screen, renderHook, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import Buyproduct from "./Buyproduct";
let obj = {
    name : "first product",
    price: 100,
    details: "some detials"
}
describe("Buy Product Page testing",()=>{
    it("Check if Buy now button is enabled",()=>{       
        render(<Buyproduct product1={obj}/>);
        expect(screen.getByTestId('buynow')).toBeEnabled();
    });
    test('render product name correctly', () => {
        render(<Buyproduct product1={obj}/>);
        const inputEl = screen.getByTestId("productName");
        expect(inputEl).toBeTruthy();
    });
    test('render product details correctly', () => {
        render(<Buyproduct product1={obj}/>);
        const inputEl = screen.getByTestId("productDetails");
        expect(inputEl).toBeTruthy();
    });
    test('render product price correctly', () => {
        render(<Buyproduct product1={obj}/>);
        const inputEl = screen.getByTestId("productPrice");
        expect(inputEl).toBeTruthy();
    });
});