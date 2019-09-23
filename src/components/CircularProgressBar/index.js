import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgressBar() {

    const percentage = 24;
    return (

        <CircularProgressbar
            value={percentage}
            strokeWidth={6}
            text={`${percentage}%`}
            styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                    // Path color
                    stroke: "#673AB7",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    stroke: '#1e1e2d',
                },
                // Customize the text   
                text: {
                    // Text color
                    fill: '#aa38c1',
                    // Text size
                    fontSize: '16px',
                },
                // Customize background - only used when the `background` prop is true

            }}








        />
    )
}