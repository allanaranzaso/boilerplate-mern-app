import {Routes, Route} from 'react-router-dom'
import Index from '../../pages/Index';

function Routing() {
    return(
        <Routes>
            {/*Creates the paths for the web app*/}
            <Route path="/" element={ <Index /> } />
            
            <Route path="*" element={null} />
        </Routes>
    )
}

export default Routing;