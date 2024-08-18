
import { SetStateAction, useState } from 'react';
import ReactModal from 'react-modal'
// import props.data from "../assets/Data.json"
const customStyles = {
    content: {
        height: '80vh',
        left: '60%',
        backgroundColor: "white",
        width: 500,
    },

};
const Modal = (props: { isModalOpen: boolean, setIsModalOpen: React.Dispatch<SetStateAction<boolean>>, data: { id: number, title: string, content: string, category: string }[], setData: React.Dispatch<SetStateAction<{ id: number, title: string, content: string, category: string }[]>> }) => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    const handleWidgetAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior

        const form = event.currentTarget;
        const formData = new FormData(form);
        const widget1 = formData.get('widget1') === 'on';
        const widget2 = formData.get('widget2') === 'on';


        const newWidget = (id: number, title: string, category: string, content: string) => ({
            id,
            title,
            category,
            content,
        });

        const newId = props.data.length + 1;

        // Create a new array with the updated widgets
        let updatedData = [...props.data];

        if (widget1) {
            switch (activeTab) {
                case 1:
                    updatedData.push(newWidget(newId, "Widget 1", 'CSPM', 'Random text for Widget 1'));
                    break;
                case 2:
                    updatedData.push(newWidget(newId, "Widget 1", 'CWPP', 'Random text for Widget 1'));
                    break;
                case 3:
                    updatedData.push(newWidget(newId, "Widget 1", 'Image', 'Random text for Widget 1'));
                    break;
                case 4:
                    updatedData.push(newWidget(newId, "Widget 1", 'Ticket', 'Random text for Widget 1'));
                    break;
                default:
                    break;
            }
        }

        if (widget2) {
            switch (activeTab) {
                case 1:
                    updatedData.push(newWidget(newId + 1, "Widget New", 'CSPM', 'Random text for Widget New'));
                    break;
                case 2:
                    updatedData.push(newWidget(newId + 1, "Widget New", 'CWPP', 'Random text for Widget New'));
                    break;
                case 3:
                    updatedData.push(newWidget(newId + 1, "Widget New", 'Image', 'Random text for Widget New'));
                    break;
                case 4:
                    updatedData.push(newWidget(newId + 1, "Widget New", 'Ticket', 'Random text for Widget New'));
                    break;
                default:
                    break;
            }
        }

        // Update the state with the new data
        props.setData(updatedData);

        console.log('Updated data:', updatedData);
        props.setIsModalOpen(false);
    };
    return (
        <ReactModal style={customStyles} isOpen={props.isModalOpen} ariaHideApp={false}>
            <div className="flex flex-col">
                <div className=' bg-blue-900 text-white'>
                    <h1 className='ml-2'>Add widget</h1>
                </div>

                <div className="mt-4 flex flex-row gap-4 ">
                    <button className={activeTab === 1 ? 'bg-blue-400 rounded px-2 active' : 'bg-blue-200 rounded px-2'} onClick={() => handleTabClick(1)}>
                        CSPM
                    </button>
                    <button className={activeTab === 2 ? 'bg-blue-400 rounded px-2 active' : 'bg-blue-200 rounded px-2'} onClick={() => handleTabClick(2)}>
                        CWPP
                    </button>
                    <button className={activeTab === 3 ? 'bg-blue-400 rounded px-2 active' : 'bg-blue-200 rounded px-2'} onClick={() => handleTabClick(3)}>
                        Image
                    </button>
                    <button className={activeTab === 4 ? 'bg-blue-400 rounded px-2 active' : 'bg-blue-200 rounded px-2'} onClick={() => handleTabClick(4)}>
                        Ticket
                    </button>
                </div>
                <div className='mt-6 flex flex-col '>

                    <form onSubmit={handleWidgetAdd} className='' >
                        <div className='grid grid-cols-2 gap-2'>
                            <label htmlFor="title">Widget 1  </label>
                            <input className='outline-none rounded p-1' type="checkbox" name="widget1" id="title" />
                            <label htmlFor="title">Widget 2  </label>
                            <input className='outline-none rounded p-1' type="checkbox" name="widget2" id="title" />
                        </div>

                        <div className='flex flex-row gap-8 mt-10'>
                            <button className='bg-red-900 text-white px-2 rounded' onClick={() => props.setIsModalOpen(false)}>Close</button>
                            <button type='submit' className='bg-blue-900 text-white px-2 rounded'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </ReactModal>
    )
}

export default Modal