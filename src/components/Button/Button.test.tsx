import {render, screen} from "@testing-library/react";
import {Button} from "@/components";
import userEvent from "@testing-library/user-event";

describe('<Button />',   () => {
    it('should be able to click on it', async() =>{
        const user = userEvent.setup();
        const clickEvent = jest.fn();
        render(<Button onClick={clickEvent}>Button test</Button>);

        await user.click(screen.getByRole('button'))

        expect(clickEvent).toHaveBeenCalledTimes(1);

    })
});