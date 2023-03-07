import React, {Fragment} from "react";
import {Route, Routes} from "react-router";
import Home from "./Home";
import NoPath from "./NoPath";
import Join from "./Join";
import Login from "./Login";
import Myinfo from "./Myinfo";
import List from "./List";
import Zipcode from "./Zipcode";
import Logout from "./Logout";


const Content = () => {

    return(
        <>
            <Routes>
                <Route path ='/' element={<Home />} />
                <Route path ='/zipcode' element={<Zipcode />} />
                <Route path ='/member/join' element={<Join />} />
                <Route path ='/member/login' element={<Login />} />
                <Route path ='/member/logout' element={<Logout />} />
                <Route path ='/board/list' element={<List />} />
                <Route path ='/member/myinfo' element={<Myinfo />} />
                <Route path ='/*' element={<NoPath />} />
            </Routes>
        </>
    )

}
export default Content;
