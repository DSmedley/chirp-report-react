import React, {useState} from 'react';
import styles from './Analysis.module.css';
import {TwitterAnalysis} from "./model/TwitterAnalysis";
import axios from "axios";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {useParams} from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const Analysis = () => (

    <div className={styles.Analysis} data-testid="Analysis">
        <DisplayAnalysis/>
        <Doughnut data={data}/>
    </div>
);

function DisplayAnalysis() {
    const {screenName} = useParams();
    const [analysis, setAnalysis] = useState(new TwitterAnalysis());
    axios.get(`http://chirp.local/api/analyze?screen_name=${screenName}`)
        .then(res => {
            setAnalysis(res.data);
        })
    return (
        <div>
            <h1>{analysis.name}</h1>
            <p>{analysis.screen_name}</p>
        </div>
    )
}

export default Analysis;
