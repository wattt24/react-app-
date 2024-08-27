import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState } from 'react';

function App() {
  const name = "Pannawit";
  
  const employees = [
    { name: "AAAA", email: "aaaa@gmail.com", age: 19 },
    { name: "Pak", email: "pannawit@gmail.com", age: 20 },
    { name: "Mind", email: "jarinyakarn@gmail.com", age: 20 }
  ];

  // Add state for counting
  const [count, setCount] = useState(0);

  // Function to handle button click
  const incrementCount = () => {
    setCount(count + 1);
  };

  console.log(employees);
  
  return (
    <>
      <div className="App">
        {employees.map((em, index) => (
          <li key={index}>
            ชื่อพนักงาน: {em.name} | อีเมล์ : {em.email} | {em.age}
          </li>
        ))}
        <h1>Hello {name}</h1>
        
        <Button text="OK" />
        <Button text="Cancel" />
        
        {/* Increment button and display */}
        <div>
          <button onClick={incrementCount}>นับเลข</button>
          <p>คุณกดปุ่มนับเลข {count} ครั้ง</p>
        </div>
      </div>
      
      <h1 className="text01">Test</h1>
    </>
  );
}

export default App;
