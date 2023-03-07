import React from 'react';
import './list.css'
const List = () => {
    return (
<div>
    <div>
        <main>
            <h2>게시판</h2>

             <table className="board">
                 <tbody>
                <colgroup>
                <col style={{width: '10%'}} />
                <col style={{width: '50%'}} />
                <col style={{width: '15%'}} />
                <col style={{width: '10%'}} />
                </colgroup>

                <tr>
                <td colSpan="3" className="alignlft">
                <select name="ftype" id="ftype">
                <option value="title">제 목</option>
                <option value="userid">작성자</option>
                <option value="contents">본 문</option>
                </select>
                <input type="text" name="fkey" id="fkey" />
                <button type="button" id="findbtn" disabled>검색하기</button>
                </td>
                <td colSpan="2" className="alignrgt">
                <button type="button" id="newbtn" disabled>새글쓰기</button></td></tr>
                <tr><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회</th></tr>
                 </tbody>
            </table>
             <ul className="pagenation">

                <li><a href="?cpg={{pgn.prev}}{{qry}}">이전</a></li>

                    <li> <a href="?cpg={{pgn.prev10}}{{qry}}">이전-10</a> </li>

                    <li className="cpage">1</li>

                    <li><a href="?cpg={{num}}{{../qry}}">2</a></li>


                    <li> <a href="?cpg={{pgn.next10}}{{qry}}">다음 +10</a> </li>

                    <li> <a href="?cpg={{pgn.next}}{{qry}}">다음</a> </li>

            </ul>

        </main>
    </div>
</div>
    );
};

export default List;