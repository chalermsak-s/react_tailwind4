import { useState } from "react"

// สร้างตัวแปรเก็บรายการ List
const contacts = [
    { name: "Tighten Co.", type: "Team" },
    { name: "Taylor Otwell", type: "Member" },
    { name: "Adam Wathan", type: "Member" },
    { name: "Duke Street Studio, Inc", type: "Member" },
    { name: "Jeffrey Way", type: "Member" },
]

export default function ContactList() {

    const [selected, setSelected] = useState<number | null>(null)
    const [search, setSearch] = useState("")

    // ฟิลเตอร์ตามรายการที่ทำกาค้นหา
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.type.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className="max-w-md mx-auto my-6 bg-white rounded-lg shadow-md">

            {/* Header */}
            <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-900'>Contacts</h2>
            </div>

            {/* Search Bar */}
            <div className='p-4'>
                <div className="relative">
                    <svg
                        className="absolute left-3 top-3 text-gray-500 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <circle
                            cx="11"
                            cy="11"
                            r="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="16.5"
                            y1="16.5"
                            x2="21"
                            y2="21"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search teams or members..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 bg-gray-100 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Contact List */}
            <div className='p-4 space-y-1'>
                {
                    filterContacts.length > 0 ? (
                        filterContacts.map((contact, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(index)}
                                className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${selected === index ? "bg-gray-100" : "hover:bg-gray-50"
                                    }`}
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-gray-900 font-medium">{contact.name}</span>
                                </div>
                                <span className="text-gray-400 text-sm">{contact.type}</span>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-400 py-6">
                            No contacts found.
                        </div>
                    )
                }
            </div>

            {/* Footer Button */}
            <div className="p-4 bg-gray-100 flex justify-end items-center space-x-4 rounded-b-lg">
                <button className="text-gray-500 font-medium hover:text-gray-700 transition cursor-pointer">
                    Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer">
                    Invite
                </button>
            </div>

        </div>
    )
}