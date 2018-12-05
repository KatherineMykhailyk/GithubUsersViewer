import React from 'react';

const Picker = ({languageOptions, onChange}) => (
    <div>
        <select name="select1" onChange={ (e) => onChange(e.target.value)}>
            {
                languageOptions.map((item) =>
                    <option
                        value={item}
                        key={item}
                    >
                        {item}
                    </option>
                )
            }
        </select>
    </div>
);


export default Picker;