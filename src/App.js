import "./App.css";
import { useState } from "react";


function App() {
    
    const cars = ['Lamboghini', 'Honda', 'Mazda']; 
    const [options, setOptions] = useState([]); 
    function handlerCheckbox(id) { 
        if(options.find((car)=> car === cars[id]))
            setOptions(options.filter((car, index) => index !== id))
        else 
            setOptions([...options, cars[id]]); 
    }
    console.log(options)
    return (
        <div className="App">
            {cars.map((car, index) => 
                <div key = {index}>
                    <label htmlFor={car}> {car} </label>
                    <input
                        id={index} 
                        type="checkbox"
                        onChange={() => handlerCheckbox(index)}
                    />
                </div>
            )}
            
        </div>
    );      
}

export default App;
