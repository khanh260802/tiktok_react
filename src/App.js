import "./App.css";
import { useState } from "react";
function App() {
    const cars = [
        {
            name: 'Lamboghini',
            id: 1,
        }, 
        {
            name: 'Honda',
            id: 2,
        }, 
        {
            name: 'Mazda',
            id: 3,
        }
    ]; 
    const [option, setOptions] = useState(0); 
    var handlerSubmid = () => { 
        console.log(option)
    }


    return (
        <div className="App">
            {cars.map((car) => 
                <div key = {car.id}>
                    <label htmlFor={car.id}> {car.name} </label>
                    <input
                        id={car.id} 
                        type="radio"
                        onChange = {() => setOptions(car.id)}
                        checked = {car.id === option}
                    />
                </div>
            )}
            <button onClick={handlerSubmid}> Submit </button>
        </div>
    );      
}

export default App;
