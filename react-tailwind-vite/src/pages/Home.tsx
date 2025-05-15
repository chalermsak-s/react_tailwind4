import ContactList from "@/components/ContactList"

const Home = () => {
  return (
    <>
    <ContactList/>
    <h1 className="text-center text-3xl bg-mint-700 no-underline">Hello Tailwind</h1>
      {/* Utility Class in Tailwind Css */}
      <div className="mt-10 flex items-center max-w-sm bg-white mx-auto rounded-xl shadow-lg outline-black/5 p-6 gap-x-4 dark:bg-slate-800 dark:shadow-none">
        <img className="size-12" src="/images/chaticon.svg" alt="Logo App" />
        <div>
          <div className="text-xl font-bold text-black dark:text-white">Kuma Chat</div>
          <p className="text-gray-500 dark:text-slate-400">You have a new message!</p>
        </div>
      </div>

      {/* Create Button in Tailwind Css */}
      <div className="flex flex-col items-center gap-4 p-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer">Primary</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-xs hover:bg-gray-600 cursor-pointer">Secondary</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-xs hover:bg-red-600 cursor-pointer">Danger</button>

        {/* Create Button Gadient */}
        <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xs hover:from-green-600 hover:to-blue-600 cursor-pointer">Gadient</button>

        {/* Button with Shadow */}
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-xs hover:bg-indigo-600 cursor-pointer shadow-lg">Shadow Button</button>

        {/* Button Rounded Full */}
        <button className="px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 cursor-pointer shadow-lg rounded-full">Rounded Button</button>

        {/* Small */}
        <button className="px-4 py-2 text-sm min-w-36 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer">Small</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer">Medium</button>
        <button className="px-4 py-2 text-lg min-w-36 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer">Large</button>

        {/* Disabled */}
        <button className="px-4 py-2 text-lg min-w-36 bg-blue-500 text-white rounded-xs opacity-50 cursor-not-allowed" disabled>Disabled</button>

        {/* Button With Icon */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer flex items-center gap-2"><img className="size-5" src="/images/chaticon.svg" alt="Chat Icon" />Chat</button>

        {/* Button Animation */}
        <button className="px-4 py-2 text-sm min-w-36 bg-blue-500 text-white rounded-xs hover:bg-blue-600 cursor-pointer hover:scale-110 transition-transform">Small</button>
      </div>


    </>
  )
}

export default Home