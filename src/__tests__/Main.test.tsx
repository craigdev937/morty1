/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { Main } from "../containers/Main";

describe("Main", () => {
    test("renders Main component", () => {
        render(<Main />);
        screen.debug();
    })
});




