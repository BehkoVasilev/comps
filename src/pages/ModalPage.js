import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    return (
        <div>
            <Button primary rounded>Open Modal</Button>
            <Modal />
        </div>
    );
};

export default ModalPage;