import LayoutIndex from "./components/layouts/LayoutIndex.jsx";
import Home from "./components/pages/Home.jsx";
import CollegeLife from "./components/pages/CollegeLife.jsx";
import Error404 from "./components/Error404.jsx";
import {Route, Routes} from "react-router-dom";

function App() {


    return (
        <Routes>
            <Route path="/" element={<LayoutIndex/>}>
                <Route index element={<Home/>}/>
                <Route path="college" element={<CollegeLife/>}/>
            </Route>
            {/* Route error */}
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default App
