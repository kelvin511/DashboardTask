

const Widget = (props:{title:string,content:string}) => {
  return (
    <div className='bg-slate-200 flex flex-col flex-1 p-4 m-2 rounded '>
        <h1 className='text-3xl'>{props.title}</h1>
        <p>{props.content}</p>

      </div>
  )
}

export default Widget