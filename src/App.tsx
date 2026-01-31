import { useEffect, useState } from 'react'
import "./index.css"
import BillCard from './components/BillCard';
import Header from './components/Header';

export type BillProps = {
  id: string;
  title: string;
  amount: number;
  description: string;
  reference: string;
  date_paid: string;
}

function App() {
  const [bills, setBills] = useState<BillProps[] | []>([])

  useEffect(() => {
    const fetchBills = async () => {
      const res = await fetch("http://localhost:8000/api/bills")
      const data = await res.json()
      setBills(data)
    }

    fetchBills()
  }, [])

  return (
    <>
      <Header />
      <div className='max-w-3xl mx-auto my-5'>
        <section>
          {bills && bills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))}
        </section>
      </div>
    </>
  )
}

export default App
