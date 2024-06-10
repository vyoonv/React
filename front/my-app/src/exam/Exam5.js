// props 응용
// 전개 연산자 (...) : 객체 내부의 모든 값을 props로 전달하는 방법 

import { useState } from "react";

// 부모 
function Exam5() {
    const [userData, setUserData] = useState({ name: '홍길동', age: 30});
    
    return <MyComponent {...userData}/> // 전개 연산자 .... 사용
}
// 자식 
function MyComponent(props) {
    const {name, age} = props;
    
    const content = `안녕하세요 제 이름은 ${name}이고, 나이는 ${age}세 입니다.`;
    return <h3>{content}</h3> 
}

export default Exam5; 