import {getByTestId, render, screen, renderHook, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import Buy from "./Buy";
import renderer  from 'react-test-renderer';

describe("Buy Product Page testing",()=>{
    it("Check if Buy now button is enabled",()=>{       
        render(<Buy/>);
        expect(screen.getByTestId('product-list')).toBeInTheDocument();
    });
});


test(" Buy page test",()=>{
    const component=renderer.create(
      <Buy/>
    );
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot();
  }
  )