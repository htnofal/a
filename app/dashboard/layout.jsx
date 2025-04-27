import Rract from 'react'
import Header from './_components/Header'
import Boxes from './_components/Boxes'


function DashbordLayout({children}) {
    return (
        <div className='min-h-screen bg-white'>
            <Header/>

            <daiv className='flex items-center justify-center  '>
                {children}
            </daiv>
            
            <Boxes/>
        </div>
    )
}

export default DashbordLayout