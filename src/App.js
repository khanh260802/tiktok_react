import "./App.css";
import { useState } from "react";
function App() {

    console.log(localStorage); 
    const [job, setJob] = useState(''); 
    const [jobs, setJobs] = useState(() => { 
        const localStorageJobs = JSON.parse(localStorage.getItem('todoList')); 
        return localStorageJobs ?? []; 
    }); 

    const handlerAddJob = () => { 
        setJobs((prev) => {
            const newJobs = [...prev, job]; 
            localStorage.setItem('todoList', JSON.stringify(newJobs)); 
            return newJobs; 
        }); 
        setJob(''); 
    }

    return (
        <div className="App">
            <input
                value={job}
                onChange={(e)=>setJob(e.target.value)}
            /> 
            
            <button
                onClick={handlerAddJob}
            > ADD </button>
            <ul>
                {jobs.map((item, index) => <li key={index}> {item} </li>)}
            </ul>
        </div>
    );
}

export default App;
