import Accordion from '../components/Accordion'

function AccordionPage() {
    const items = [
        {
            id: '12dsad',
            label: 'Can I use React on the project?',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate, vero deleniti, mollitia dolorem saepe dignissimos voluptate laborum deserunt, ipsam distinctio. Tempore ea sunt necessitatibus voluptatem rerum saepe adipisci incidunt?'
        },
        {
            id: 'safdw4321',
            label: 'Can I use JavaScript on the project?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptatum quisquam alias magnam doloribus. Aperiam, quisquam optio ipsum assumenda, dolore esse nulla harum voluptate enim quibusdam, odit atque officiis laboriosam!'
        },
        {
            id: 'fs3245',
            label: 'Can I use CSS on the project?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde sunt ab cupiditate in quod officia ullam quas reiciendis sequi! Unde sapiente illo harum doloremque exercitationem repellat magnam ab? Beatae?'
        }
    ];

    return (
        <Accordion items={items}/>
    )
};

export default AccordionPage