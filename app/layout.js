import './globals.css'


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='bg-gray-100 h-full' >
    
        
        {children}
        
        
        </body>
    </html>
  )
}
