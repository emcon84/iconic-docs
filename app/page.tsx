
'use client'
export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <main className="flex flex-col items-center justify-between p-5 text-black bg-slate-600 rounded-md">
      {children}
    </main>
  )
}
