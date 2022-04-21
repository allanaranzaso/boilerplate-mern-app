import {Routes, Route} from 'react-router-dom'

function Routing() {
    return(
        <Routes>
            {/*Creates the paths for the web app*/}
            <Route path="/" element={null} />
            
            <Route path="*" element={null} />
        </Routes>
    )
}

export default Routing;