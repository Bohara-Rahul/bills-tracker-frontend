const Header = () => {
  return (
    <nav className="bg-gray-800">
        <div className="max-w-3xl flex justify-between items-center p-5 m-auto">
            <h1 className="text-2xl">Bills Tracker</h1>
            <a href="/add-bill" className="bg-gray-700 px-5 py-2 rounded-md">Add Bill</a>
        </div>
    </nav>
  )
}

export default Header