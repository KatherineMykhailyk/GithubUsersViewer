import React, {Component} from 'react';
import User from '../components/user';
import {connect} from 'react-redux';

class ProgrammersUserList extends Component {

    render() {
        const {users, isFetching, lastUpdated} = this.props;
        return (
            <div>
                <p>
                    {lastUpdated && (<span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}</span>)}
                </p>
                {isFetching && users.length === 0 && <h2>Loading...</h2>}
                {users.length > 0 &&
                (<div style={{opacity: isFetching ? 0.5 : 1}}>
                    {
                        users.map( (user) => <User user={user} /> )
                    }
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedLanguage, usersFromGithub} = state;
    const {isFetching, lastUpdated, items: users} = usersFromGithub[selectedLanguage] ||
    {
        isFetching: true,
        items: []
    };

    return {
        selectedLanguage,
        users,
        isFetching,
        lastUpdated
    };
};

export default connect(mapStateToProps)(ProgrammersUserList);