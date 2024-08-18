import { useEffect, useState } from 'react';
import WidgetGroup from './Components/WidgetGroup';
import widgetData from './assets/Data.json'

function App() {
  const [data, setData] = useState(widgetData);
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<{
    id: number;
    title: string;
    content: string;
    category: string;
  }[]>([])
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '' || search != undefined) {
      setFilteredData(
        widgetData.filter(widget =>
          widget.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else{
      setFilteredData(widgetData)
    }
  }, [search]);
  console.log('file',filteredData)
  return (
    <div className='text-black'>
      <header className='bg-slate-500 flex flex-row py-2 w-[100vw]'>
        <div className='ml-10 text-white text-xl w-full'>
          <h1>Admin Dashboard</h1>
        </div>
        <div className='mr-10 flex flex-row items-center rounded bg-slate-200'>
          <img src='search-icon.png' className='mx-1' />
          <input
            onChange={handleSearchChange}
            value={search}
            className='bg-slate-200 rounded py-0.5 outline-none'
            type='text'
            placeholder='Search anything...'
          />
        </div>
      </header>
      <div className='h-full '>
        <WidgetGroup data={filteredData} setData={setFilteredData}/>
      </div>
    </div>
  );
}

export default App;

