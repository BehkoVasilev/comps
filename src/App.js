import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
    return (
        <div>
            <Link to={'/accordion'}>Go to Accordion</Link>
            <Link to={'/dropdown'}>Go to Dropdown</Link>
            <Link to={'/buttons'}>Go to Buttons</Link>
            <div>
                <Route path={'/buttons'}>
                    <ButtonPage />
                </Route>
                <Route path={'/accordion'}>
                    <AccordionPage />
                </Route>
                <Route path={'/dropdown'}>
                    <DropdownPage />
                </Route>
            </div>
        </div>)
};

export default App