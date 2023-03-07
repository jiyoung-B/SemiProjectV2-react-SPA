import React from 'react';
const Logout = () => {
    return (
        <div>
            <main>
                <h2>로그아웃 페이지 입니다.</h2>
                <form name="login">
                    <div><label for="uid">아이디</label>
                        <input type="text" name="uid" id="uid" /></div>
                    <div><label for="pwd">비밀번호</label>
                        <input type="password" name="pwd" id="pwd" /></div>
                    <div><label></label>
                        <button type="button" id="loginbtn">로그아웃되었습니다.</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Logout;