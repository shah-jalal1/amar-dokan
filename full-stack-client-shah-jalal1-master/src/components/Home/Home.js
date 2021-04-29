import React, { useEffect, useState } from 'react';
import DisplayFood from '../DisplayFood/DisplayFood';

const Home = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('https://apricot-custard-54808.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div className="pt-3 pl-3">
            {
                food.length === 0 &&
                <div className="d-flex justify-content-md-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                
            }
            {
                food.map(fd => <DisplayFood food={fd}></DisplayFood>)
            }
        </div>
    );
};

export default Home;