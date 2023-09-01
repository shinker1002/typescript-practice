import React, { useState, useReducer, useRef } from 'react'

// export default function Header() {


//   return (
//     <div>Header</div>
//   )
// }

export default function Header():JSX.Element{
  //   // useState 사용 방법

  //   // type Identification = {
  //   //   name: string;
  //   //   age: number;
  //   //   address: string;
  //   // }
  //   // const [info, setInfo] = useState<Identification | null>({
  //   //   name: 'kyle',
  //   //   age: 99,
  //   //   address: 'Seoul',
  //   // });

  //   // // useReducer 사용 방법
  //   // type Action = { type: 'plus' } | { type: 'minus'} // union type을 활용하여 타입 별칭으로 다음과 같이 타입을 지정가능합니다.

  //   // // 값을 명확하게 정해줄 경우 타입을 명시하지 않아도 됨.
  //   // const initNumber = 100;
  //   // const reducer = (number:number, action:Action): number => {
  //   //   switch (action.type) {
  //   //       case 'plus':
  //   //         return number + 1;
  //   //       case 'minus':
  //   //         return number - 1;
  //   //       default :
  //   //         return number;
  //   //     }
  //   // }
  //   // const [number, dispatch] = useReducer(reducer, initNumber);
  //  	// const plusHandler = () => dispatch({type: 'plus'});
  // 	// const minusHandler = () => dispatch({type: 'minus'});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Property 'dataset' does not exist on type 'EventTarget'
        // e.target을 e.currentTarget으로 바꿔주면 된다.
        // e.target은 겹치는 DOM이어도 모두 같은 레벨에 있는 것으로 간주한다. 
        // 따라서 같은 li를 클릭해도 클릭하는 바로 그곳의 DOM(li의 하위돔)들을 각각 다 잡는다.
        e.currentTarget.value = '';
        // Object is Possibly null 오류 해결하기
        // https://velog.io/@otterp/useRef-Object-is-Possibly-null-%EC%98%A4%EB%A5%98%EC%99%80-%EA%B4%80%EB%A0%A8%ED%95%B4%EC%84%9C
        // 첫번째로는 useLayoutEffect 훅을 사용하는 방법
        // 두번째는, ref를 사용할때마다 null 체크를 해주는 것
        if (inputRef.current) inputRef.current.focus();
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}/>
        <button type="submit">로그인</button>
      </form>
    )
}
