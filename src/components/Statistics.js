import React from 'react';

const Statistics = ({team, size}) => {
    const avg = (arr, size) => (Math.floor(arr.reduce((a, b) => (a + b / size), 0))),
        arr = (key) => team.map(({powerstats}) => (powerstats[key]));

    const combat_arr = arr('combat'),
        combat = avg(combat_arr, size),
        durability_arr = arr('durability'),
        durability = avg(durability_arr, size),
        strength_arr = arr('strength'),
        strength = avg(strength_arr, size),
        speed_arr = arr('speed'),
        speed = avg(speed_arr, size),
        power_arr = arr('power'),
        power = avg(power_arr, size),
        intelligence_arr = arr('intelligence'),
        intelligence = avg(intelligence_arr, size);

    return (
        <div className="powerstats">
            <div className="stat">
                <span className="statName">Combat</span>
                <span className="statBar" style={{width: `${combat}%`}} />
                <span className="statPct">{combat}%</span>
            </div>
            <div className="stat">
                <span className="statName">Durability</span>
                <span className="statBar" style={{width: `${durability}%`}} />
                <span className="statPct">{durability}%</span>
            </div>
            <div className="stat">
                <span className="statName">Strength</span>
                <span className="statBar" style={{width: `${strength}%`}} />
                <span className="statPct">{strength}%</span>
            </div>
            <div className="stat">
                <span className="statName">Speed</span>
                <span className="statBar" style={{width: `${speed}%`}} />
                <span className="statPct">{speed}%</span>
            </div>
            <div className="stat">
                <span className="statName">Intelligence</span>
                <span className="statBar" style={{width: `${intelligence}%`}} />
                <span className="statPct">{intelligence}%</span>
            </div>
            <div className="stat">
                <span className="statName">Power</span>
                <span className="statBar" style={{width: `${power}%`}} />
                <span className="statPct">{power}%</span>
            </div>
        </div>
    );
};

export default Statistics;
