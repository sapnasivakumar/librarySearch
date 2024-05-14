import * as React from 'react';
import { useRef, useState} from 'react';


export default function Sample() {
    const [timer, setTimer] = useState(0);
    // on click => start
    // toggle based on aflag or his start and display pause based on a flag

    // on click => stop
    function startTimer() {
        event
        console.log("Starting timer");
    }

        return(
            <div> 
                <button onClick={(event) => {
                    event.preventDefault();
                    startTimer()}}> Start</button>
                <div> seconds display</div>
                <button >Stop</button>
            </div>
        )
}

enum color {
    RED,
    GREEN
};
enum setupTime {
    1000
};