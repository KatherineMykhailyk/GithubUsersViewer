import React from "react";
import { hot } from 'react-hot-loader'
import ProgrammingLanguagePicker from './ProgrammingLanguagePicker';
import ProgrammersUserList from './ProgrammersUserList';

const App = () => (
    <div>
        <h2>
            <ProgrammingLanguagePicker />
        </h2>
        <div>
            <ProgrammersUserList/>
        </div>
    </div>
);

export default hot(module)(App);