import {useState, useEffect} from 'react';
import WorkoutDetails from '../components/workoutDetails';

function Home(){
    const [workouts, setworkouts] = useState(null);
    useEffect(()=>{
        const fetchWorkouts = async () =>{
            const response = await fetch('http://192.168.1.7:5000/api/workouts',{
                method: 'GET',
            });
            const rjson = await response.json();
            console.log(rjson)
            if(response.ok){
            setworkouts(rjson);
            }
        }
        fetchWorkouts();
    }, [])

    return(
        <div className="home">
            <div className="workouts">
            {workouts && workouts.map((workout)=> (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
            </div>
        </div>
    );
}

export default Home;