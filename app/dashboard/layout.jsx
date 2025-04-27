import Rract from 'react'
import Header from './_components/Header'


function DashbordLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default DashbordLayout