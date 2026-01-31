import { useState } from "react"

const AddBill = () => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [date_paid, setDatePaid] = useState("")
  const [reference, setReference] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const new_bill_data = { title, amount, description, date_paid, reference }
    const response = await fetch("http://localhost:8000/api/bills", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_bill_data)
    })
    const new_bill = await response.json()
    return new_bill
  }

  return (
    <section className="max-w-3xl mx-auto p-5 block">
        <a href="/" className="text-2xl mb-5 cursor-pointer">
            Go Back
        </a>
        <form onSubmit={handleSubmit} className="bg-gray-700 text-amber-50 text-xl p-5 min-w-80 rounded-md">
            <div className="mb-5">
                <label className="mr-5">Title of Bill:</label>
                <input 
                    type="text"  
                    required 
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline" 
                />
            </div>
            
            <div className="mb-5">
                <label className="mr-5">Amount of Bill:</label>
                <input 
                    type="number" 
                    required
                    name="amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="outline" 
                />
            </div>

            <div className="mb-5">
                <label className="mr-5">Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="outline" 
                />
            </div>

            <div className="mb-5">
                <label className="mr-5">Reference:</label>
                <input 
                    type="text" 
                    required
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="outline"   
                />
            </div>

            <div className="mb-5">
                <label className="mr-5">Date Paid:</label>
                <input 
                    type="text" 
                    required
                    value={date_paid}
                    onChange={(e) => setDatePaid(e.target.value)}
                    className="outline" 
                />
            </div>
            <button 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded-md"
            >
                Add Bill
            </button>
        </form>
        
    </section>
  )
}

export default AddBill