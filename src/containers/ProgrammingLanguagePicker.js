import React, {Component} from 'react';
import Picker from '../components/picker';
import {LANGUAGES} from '../constants/index';
import {connect} from 'react-redux';
import {selectLanguage, fetchUsersIfNeeded} from '../actions/index';

class ProgrammingLanguagePicker extends Component {

    componentDidMount() {
        const {dispatch, selectedLanguage} = this.props;
        dispatch(fetchUsersIfNeeded(selectedLanguage));
    };

    componentDidUpdate(prevProps) {
        if (this.props.selectedLanguage !== prevProps.selectedLanguage) {
            const {dispatch, selectedLanguage} = this.props;
            dispatch(fetchUsersIfNeeded(selectedLanguage));
        }
    };

    handleLanguageChange = nextLanguage => {
        this.props.dispatch(selectLanguage(nextLanguage));
        this.props.dispatch(fetchUsersIfNeeded(nextLanguage));
    };

    render() {
        const {selectedLanguage} = this.props;
        return (
            <Picker
                languageOptions={LANGUAGES}
                selectedLanguage={selectedLanguage}
                onChange={this.handleLanguageChange}
            />
        )
    };

}

const mapStateToProps = state => {
    const {selectedLanguage} = state;
    return {
        selectedLanguage: selectedLanguage
    }
};

export default connect(mapStateToProps, null)(ProgrammingLanguagePicker);


