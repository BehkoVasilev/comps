import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div>
            <Sidebar />
            <div>
                <Route path={'/buttons'}>
                    <ButtonPage />
                </Route>
                <Route path={'/accordion'}>
                    <AccordionPage />
                </Route>
                <Route path={'/'}>
                    <DropdownPage />
                </Route>
            </div>
        </div>)
};

export default App