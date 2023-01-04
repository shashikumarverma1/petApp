import { expect , test } from "vitest";
import Pet from "../components/Pet";
import { render } from "@testing-library/react";

test("display somthing" , async()=>{
    const  pet =render(<Pet/>)
    const petthumbnil= await pet.findByTestId("thumbnil") ;
    expect(petthumbnil.src).toContain("none.jpg")
    pet.unmount()
})