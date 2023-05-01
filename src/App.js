import Button from "./Button";
import { GoBell, GoEye, GoHome, GoPulse } from "react-icons/go";

function App() {
    function handleClick () {
        console.log("click!!!");
    }

    const handleMove = () => {
        console.log("mouse move!");
    }

    return (
        <div>
            <div>
                <Button primary rounded outline onClick={handleClick}>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary rounded onMouseEnter={handleClick} onMouseMove={handleMove}>
                    <GoPulse />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success outline onMouseLeave={handleClick}>
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