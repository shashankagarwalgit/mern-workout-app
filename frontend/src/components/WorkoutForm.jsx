import { useState } from 'react';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const workout = {title,load,reps};
        const response = await fetch('http://192.168.1.7:5000/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(workout)
        });
        const rjson = await response;
        if(!response.ok){
            setError(rjson.message);
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added' , rjson)
            
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise title</label>
            <input type='text'
                onChange={(e) => setTitle(e.target.value) }
                value={title}
            />

            <label>Load (in kg)</label>
            <input type='number'
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps</label>
            <input type='number'
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;