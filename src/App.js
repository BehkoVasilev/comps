import Button from "./Button"

function App() {
    return <div>
        <div>
            <Button primary>Click me!</Button>
        </div>
        <div>
            <Button secondary rounded>Buy Now!</Button>
        </div>
        <div>
            <Button success outline>Submit</Button>
        </div>
        <div>
            <Button warning rounded>Hide Ads!</Button>
        </div>
        <div>
            <Button danger outline rounded>See Deal!</Button>
        </div>
    </div>
};

export default App