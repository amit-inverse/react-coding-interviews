import React, { useState } from 'react';

const P1 = () => {
    const countries = [
        { name: 'India', value: 'IN', cities: ['Kolkata', 'Mumbai'] },
        { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
        { name: 'England', value: 'EN', cities: ['London'] },
    ];

    const [countryIndex, setCountryIndex] = useState(0);

    return (
        <div>
            <h1>P1. Country-City Dependent Dropdown</h1>

            {/* select box 1 */}
            <select
                onChange={(event) => {
                    console.log(event.target.value);
                    setCountryIndex(event.target.value);
                }}
            >
                {countries.map(function (country, index) {
                    return (
                        <option key={country.value} value={index}>
                            {country.name}
                        </option>
                    );
                })}
            </select>

            {/* select box 2 */}
            <select>
                {countries[countryIndex].cities.map(function (city, index) {
                    return (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default P1;
