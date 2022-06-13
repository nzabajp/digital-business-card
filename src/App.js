import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

const App = () => {
    return (
        <div className="business-card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App;