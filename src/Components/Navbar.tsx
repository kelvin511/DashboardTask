

const Navbar = () => {
  return (
    <header className='bg-slate-500 flex flex-row py-2 w-[100vw]'>
    <div className='ml-10 text-white text-xl w-full'>
      <h1>Admin Dashboard</h1>
    </div>
    <div className='mr-10 flex flex-row items-center rounded bg-slate-200'>
      <img src='search-icon.png' className='mx-1' />
      <input
        className='bg-slate-200 rounded py-0.5 outline-none'
        type='text'
        placeholder='Search anything...'
      />
    </div>
  </header>
  )
}

export default Navbar