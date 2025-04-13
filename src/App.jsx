import { useState , useRef, useEffect} from 'react'
import './App.css'

//OTP input

const OTP_DIGITS_COUNT = 5;

function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill(""));

    const refArr= useRef([]);

    useEffect(()=>{
      refArr.current[0]?.focus();
    },[]);

    const handleOnChange=(value,index)=>{
      if(isNaN(value)) return;

      console.log(value);
      const newValue=value.trim();
      const newArr=[...inputArr]
      newArr[index]=newValue.slice(-1);
      setInputArr(newArr);

      newValue && refArr.current[index+1]?.focus();
    };

    const handleOnKeyDown=(e,index)=>{
      // console.log(e);
      if(!e.target.value && e.key === "Backspace") {
        refArr.current[index-1]?.focus();
      }
    };


  return (
    <>
      <h1>OTP-Validation</h1>

      {inputArr.map((input, index) => {
        return <input
          className='otp-input'
          key={index}
          type='text'
          value={inputArr[index]}
          ref={(input)=>(refArr.current[index] = input)}
          onChange={(e) => handleOnChange(e.target.value,index)} 
          onKeyDown={(e)=>handleOnKeyDown(e,index)}/>
          
      })}


    </>
  )
}

export default App;
