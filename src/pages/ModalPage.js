import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setSholModal] = useState(false);

    const handleClick = () => {
        setSholModal((current) => !current)
    }
    return (
        <div>
            <Button onClick={handleClick} primary rounded>Open Modal</Button>
            {showModal && <Modal />}
        </div>
    );
};

export default ModalPage;