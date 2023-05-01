import Button from "./Button";
import { GoBell, GoEye, GoHome, GoPulse } from "react-icons/go";

function App() {
    return (
        <div>
            <div>
                <Button primary rounded outline>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoPulse />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success outline>
                    Submit
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    <GoEye />
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    <GoHome />
                    See Deal!
                </Button>
            </div>
        </div>
    )
};

export default App