import "./App.css";
import { useState } from "react";
function App() {
    const cars = [
        {
            name: "Lamboghini",
            id: 1,
        },
        {
            name: "Honda",
            id: 2,
        },
        {
            name: "Mazda",
            id: 3,
        },
    ];
    const [options, setOptions] = useState([]);
    var handlerSubmid = () => {
        console.log(options);
    };

    var handlerCheckox = (id) => {
        setOptions((prev) => {
            if (!prev.includes(id)) 
                return [...prev, id];
            else 
                return prev.filter((itemID) => itemID !== id);
        });
    };

    return (
        <div className="App">
            {cars.map((car) => (
                <div key={car.id}>
                    <label htmlFor={car.id}> {car.name} </label>
                    <input
                        id={car.id}
                        type="checkBox"
                        onChange={() => handlerCheckox(car.id)}
                        checked = {options.includes(car.id)}
                    />
                </div>
            ))}
            <button onClick={handlerSubmid}> Submit </button>
        </div>
    );
}

export default App;
