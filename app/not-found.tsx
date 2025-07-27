import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="grid grid-cols-6 gap-8 p-2">
      <div className="col-span-full md:col-span-2 md:text-right flex flex-col">
        <h3 className="font-medium text-lg">404</h3>
      </div>
      <div className="col-span-full md:col-span-4 flex flex-col items-start gap-2">
        <p>No such route exists.</p>
        <Link
          href="/"
          className="flex items-center gap-2 mb-12 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded cursor-pointer active:scale-90 transition no-underline w-fit font-normal"
        >
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </Link>
      </div>
    </div>
  )
}