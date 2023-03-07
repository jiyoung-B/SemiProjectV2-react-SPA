import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import NoPath from "../pages/NoPath";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Myinfo from "../pages/Myinfo";
import List from "../pages/List";
import Zipcode from "../pages/Zipcode";
import Logout from "../pages/Logout";
import ListDetail from "../pages/ListDetail";


const Content = () => {

    return(
        <div className="content">
            <Routes>
                <Route path ='/' element={<Home />} />
                <Route path ='/zipcode' element={<Zipcode />} />
                <Route path ='/member/join' element={<Join />} />
                <Route path ='/member/login' element={<Login />} />
                <Route path ='/member/logout' element={<Logout />} />
                <Route path ='/board/list' element={<List />} />
                <Route path ='/member/myinfo' element={<Myinfo />} />
                <Route path ='/board/list/:id' element={<ListDetail />} />
                <Route path ='/*' element={<NoPath />} />
            </Routes>
        </div>
    )

}
export default Content;
