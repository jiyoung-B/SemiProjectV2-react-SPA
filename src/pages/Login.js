import React from 'react';
const Login = () => {
    return (
        <div>
            <main>
                <h2>로그인</h2>
                <form name="login">
                    <div><label for="uid">아이디</label>
                        <input type="text" name="uid" id="uid" /></div>
                    <div><label for="pwd">비밀번호</label>
                        <input type="password" name="pwd" id="pwd" /></div>
                    <div><label></label>
                        <button type="button" id="loginbtn">로그인</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Login;