import Widget from './Widget';
import { SetStateAction, useEffect, useState } from 'react';
import Modal from './Modal';

const WidgetGroup = (props: {
    data: {
        id: number;
        title: string;
        content: string;
        category: string;
    }[],
    setData: React.Dispatch<SetStateAction<{ id: number, title: string, content: string, category: string }[]>>
}) => {
    console.log(props.data, "ohasd")
    const [isModalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<{
        id: number;
        title: string;
        content: string;
        category: string;
    }[]>([...props.data]);
    const [categoryOne, setCategoryOne] = useState<{ id: number; title: string; content: string; category: string }[]>([]);
    const [categoryTwo, setCategoryTwo] = useState<{ id: number; title: string; content: string; category: string }[]>([]);
    const [categoryThree, setCategoryThree] = useState<{ id: number; title: string; content: string; category: string }[]>([]);
    const [categoryFour, setCategoryFour] = useState<{ id: number; title: string; content: string; category: string }[]>([]);

    useEffect(() => {
        const newCategoryOne = props.data.filter(widget => widget.category === 'CSPM');
        const newCategoryTwo = props.data.filter(widget => widget.category === 'CWPP');
        const newCategoryThree = props.data.filter(widget => widget.category === 'Image');
        const newCategoryFour = props.data.filter(widget => widget.category === 'Ticket');

        setCategoryOne(newCategoryOne);
        setCategoryTwo(newCategoryTwo);
        setCategoryThree(newCategoryThree);
        setCategoryFour(newCategoryFour);
    }, [props.data]);

    const handleWidgetAdd = () => {
        setModalOpen(true);
    };


    const handleRemoveWidget = (id: number) => {
        props.setData(prevData => prevData.filter(widget => widget.id !== id));
    };
    return (
        <div className='bg-slate-200 h-[100%] p-6 justify-around'>
            <Modal
                setData={props.setData}
                data={props.data}
                setIsModalOpen={setModalOpen}
                isModalOpen={isModalOpen}
            />
            <div>
                <h1 className='p-2 text-lg font-bold'>CSPM</h1>
                <div className='grid grid-cols-3'>
                    {categoryOne.map(widget => (
                        <Widget
                            key={widget.id}
                            id={widget.id}
                            title={widget.title}
                            content={widget.content}
                            onRemove={handleRemoveWidget}
                        />
                    ))}
                    <button onClick={handleWidgetAdd}>
                        <div className='bg-white flex justify-center items-center rounded text-3xl p-4 m-2 h-full w-[90%]'>
                            <p>+</p>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='p-2 text-lg font-bold'>CWPP</h1>
                <div className='grid grid-cols-3'>
                    {categoryTwo.map(widget => (
                        <Widget
                            key={widget.id}
                            id={widget.id}
                            title={widget.title}
                            content={widget.content}
                            onRemove={handleRemoveWidget}
                        />
                    ))}
                    <button onClick={handleWidgetAdd}>
                        <div className='bg-white flex justify-center items-center rounded text-3xl p-4 m-2 h-full w-[90%]'>
                            <p>+</p>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='p-2 text-lg font-bold'>Image</h1>
                <div className='grid grid-cols-3'>
                    {categoryThree.map(widget => (
                        <Widget
                            key={widget.id}
                            id={widget.id}
                            title={widget.title}
                            content={widget.content}
                            onRemove={handleRemoveWidget}
                        />
                    ))}
                    <button onClick={handleWidgetAdd}>
                        <div className='bg-white flex justify-center items-center rounded text-3xl p-4 m-2 h-full w-[90%]'>
                            <p>+</p>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='p-2 text-lg font-bold'>Ticket</h1>
                <div className='grid grid-cols-3'>
                    {categoryFour.map(widget => (
                        <Widget
                            key={widget.id}
                            id={widget.id}
                            title={widget.title}
                            content={widget.content}
                            onRemove={handleRemoveWidget}
                        />
                    ))}
                    <button onClick={handleWidgetAdd}>
                        <div className='bg-white flex justify-center items-center rounded text-3xl p-4 m-2 h-full w-[90%]'>
                            <p>+</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WidgetGroup;
