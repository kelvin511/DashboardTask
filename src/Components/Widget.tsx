
const Widget = (props: { id: number; title: string; content: string; onRemove: (id: number) => void }) => {
  return (
      <div className='bg-white flex flex-col flex-1 p-4 m-2 rounded h-full w-[90%]'>
          <h1 className='text-3xl'>{props.title}</h1>
          <p>{props.content}</p>
          <div className="flex">
          <button 
              onClick={() => props.onRemove(props.id)}
              className='bg-red-200 px-2 py-1 rounded mt-2'
          >
          
              Remove
          </button>
          </div>
      </div>
  );
}

export default Widget;
