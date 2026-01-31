import type { BillProps } from "../App"

const BillCard = ({ bill }: { bill: BillProps }) => {
  const { title, description, reference, amount, date_paid } = bill
    
  return (
    <article className="bg-gray-700 text-amber-50 text-xl p-5 min-w-80 flex justify-between rounded-md">
        <div>
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>Reference: ({reference})</p>
        </div>
        <div>
            <p>Amount: ${amount}</p>
            <p>Date Paid: {new Date(date_paid).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </p>
        </div>
    </article>
  )
}

export default BillCard