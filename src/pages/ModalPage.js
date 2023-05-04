import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setSholModal] = useState(false);

    const handleClick = () => {
        setSholModal((current) => !current);
    };

    const handleClose = () => {
        setSholModal(false);
    };

    const modal =
        <Modal onClose={handleClose}>
            <div className="flex flex-col justify-between h-full">
                <p>Here is some important agreement for you to accept</p>
                <div className="flex justify-end">
                    <Button onClick={handleClose} outline className="text-blue-600 border-2 border-blue-600">I Accept</Button>
                </div>
            </div>
        </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary rounded>Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit beatae fugiat sed debitis aliquid voluptatem cum quis, cumque odio placeat odit blanditiis omnis, dolorem assumenda sapiente unde illum dolor sequi ratione possimus! Accusamus fugiat, libero dolorem porro ducimus dolore magni nisi odit maiores nam doloribus? Consectetur, repellat quos nisi adipisci doloribus reiciendis a nulla totam et repellendus excepturi quas facilis ducimus fugiat quibusdam harum officiis natus quidem in facere hic possimus ut? Libero modi facilis, fugit iusto, accusantium, voluptatibus accusamus asperiores commodi a maiores facere similique! Quasi eos itaque nam necessitatibus reiciendis laborum, voluptatum nesciunt doloremque amet temporibus sint velit rerum magnam! Quasi voluptate corrupti sint aperiam! Repudiandae voluptatum, rerum et earum dolorem quis pariatur quas, explicabo laboriosam aut quam eos tenetur cum! Iste eveniet deserunt rem velit nesciunt odio cumque explicabo laudantium doloribus quos, eius sit sint harum voluptas corrupti, quo laborum, doloremque illum ad incidunt iusto minus sunt! Libero ipsam deserunt, expedita, mollitia enim officia soluta, nisi voluptatem dolorem aspernatur necessitatibus exercitationem unde? Ut perferendis reprehenderit voluptates adipisci magnam porro aliquam ducimus inventore nemo, quam, beatae odit incidunt exercitationem iusto! Ipsam voluptas iste reiciendis, neque suscipit vitae doloribus odit nesciunt, esse eligendi nobis laboriosam voluptatum earum sunt vero ipsa quaerat blanditiis dicta? Culpa ipsa tenetur cum necessitatibus deserunt doloremque, voluptates neque, cumque voluptatum provident perspiciatis voluptas nesciunt fuga repudiandae voluptatem! Enim sed veniam pariatur ipsam repudiandae ratione aspernatur ab deserunt. Nostrum, illo at sint perspiciatis pariatur tenetur id itaque quaerat tempora sit distinctio nobis earum molestias architecto modi. Ipsam, debitis odio, corporis dignissimos explicabo minus exercitationem ratione consectetur ipsum perferendis tempore, repudiandae itaque quasi adipisci temporibus facilis maiores libero ex fugiat necessitatibus eius blanditiis? Obcaecati deleniti, quas ipsa tempore possimus quod ipsum mollitia quia beatae sapiente quam eos ullam perspiciatis non atque, culpa amet vitae iusto eaque veniam praesentium cum! Debitis, cumque. Corrupti perspiciatis optio a vero est! Laudantium tempora deserunt ut ipsum atque reiciendis ullam minima a dicta incidunt aut, explicabo, nam sapiente magnam quod ab tenetur quos alias officia, autem sit perferendis quis? Architecto rerum dignissimos labore ipsum a inventore natus totam cupiditate at alias reiciendis necessitatibus non, maxime veniam illum error dolorem quibusdam cumque, itaque tempora est? Fugit esse assumenda fuga quae voluptatem quia eligendi rem perspiciatis culpa totam vitae molestiae nesciunt debitis sint neque, temporibus cumque ad voluptatibus, cupiditate nisi quasi. A, culpa dolorem iure eum magni nobis consequatur eligendi! Officiis est aut animi ipsam explicabo! Laudantium accusamus incidunt quo inventore minima fuga quaerat ratione, earum, ea ut repudiandae enim facere vero ducimus necessitatibus ipsam id beatae consectetur quis deleniti iure alias dolorem? Reprehenderit molestiae enim delectus labore illo, tempora voluptates beatae illum, commodi vitae nihil nobis quam, soluta blanditiis quis aliquam deleniti a natus maxime minus! Ipsa, optio unde quae inventore nulla omnis! Quae dolorem repellat ad velit at obcaecati consequatur cum molestiae, nostrum sunt! Fuga quod tempora amet est in ratione tenetur ipsa aspernatur. Porro totam error ab, neque, architecto ut odit amet fugiat voluptatum nulla voluptates assumenda dolore? Provident odio consequuntur, quos eius, suscipit assumenda quam cumque modi nihil incidunt possimus aliquid animi vero dignissimos tenetur iusto eos. Necessitatibus repellendus minima blanditiis harum alias, velit, vitae, tempore nostrum veritatis quae ducimus aliquid molestiae odit officia! Eius inventore quaerat rem provident reprehenderit doloremque ex blanditiis quo eaque voluptate, est aut tempora minima error aspernatur suscipit? Eaque sint provident blanditiis porro cupiditate asperiores enim nesciunt quo. Voluptates necessitatibus, voluptatem laborum quisquam minima repudiandae molestias veniam similique temporibus eveniet. Quasi ex accusamus quis? Cupiditate debitis praesentium delectus rerum facere libero architecto omnis animi adipisci veritatis sequi odio sit aspernatur error perferendis, ea ipsam eum in assumenda sint tenetur officiis quia! Magnam quis fugit debitis corrupti illo soluta sequi consequuntur consequatur. Exercitationem quis possimus commodi ipsa, nisi labore quam deleniti perferendis alias nesciunt consequuntur, deserunt magni
            </p>
        </div>
    );
};

export default ModalPage;