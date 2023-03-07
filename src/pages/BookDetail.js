import React from 'react';
import {useParams} from "react-router";

// 데이터베이스 이용해서 가져와야하지만 우선 임의로 만들어 보겠습니다.
const books = {
    bk2023 : { title: 'IT CookBook, 알기 쉽게 해설한 자바 프로그래밍(10판)',
                author: '김충석', price: '30000원', pubdate: '2023-02-12'},
    bk0307 : { title: '실전에서 바로 쓰는 Next.js',
                author: '미셸 리바', price: '23400원', pubdate: '2023-01-20'}
}
const BookDetail = () => {
    const { id } = useParams();
    const book = books[id];
    return (
        <div>
            <h2>Book Detail</h2>
            <p>{book.title}</p>
            <p>{book.author} {book.pubdate} {book.price}</p>
        </div>
    );
};
export default BookDetail;