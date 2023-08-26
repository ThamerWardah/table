import clsx from "clsx";
import Link from "next/link";

export default function (){

 const colors = ['bg-green-300','bg-slate-300','bg-red-300','bg-purple-400','bg-yellow-300','bg-orange-400','bg-teal-300','bg-amber-400','bg-indigo-400','bg-pink-500','bg-lime-200','bg-blue-300','bg-emerald-200','bg-cyan-300','bg-sky-500','bg-violet-400','bg-fuchsia-400','bg-rose-400',];


  return(
    <div className="p-20">
      <Link  className='p-4  border-2 border-blue-500 bg-slate-300' href='/people'>Table</Link>
      <div className="flex flex-wrap">
        {colors.map(item=> (<div key={item} className={clsx(`text-center p-4 w-40 h-20 ${item}`)}>{item}</div>))}
      </div>

    </div>
  )
};