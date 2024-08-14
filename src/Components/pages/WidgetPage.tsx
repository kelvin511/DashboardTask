import Widget from '../Widget';
import data from '../../assets/Data.json';

const WidgetPage = () => {
  console.log(data);
    const handleWidgetAdd = ()=>{
        console.log("called")
    }
  return (
    <div className='grid grid-cols-3 justify-around'>
      {data.map((widget) => (
        <Widget key={widget.id} title={widget.title} content={widget.content} />
      ))}
      <button onClick={handleWidgetAdd}>
        <div className='bg-slate-200 flex justify-center items-center rounded text-3xl  p-4 m-2 '>
          <p>+</p>
        </div>
      </button>
    </div>
  );
};

export default WidgetPage;
