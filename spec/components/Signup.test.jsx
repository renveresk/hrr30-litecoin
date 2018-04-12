import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import TestUtils from 'react-dom/test-utils';
import Signup from '../../client/src/components/Signup.jsx';

// describe('Signup', () => {
//     it('should be able to run tests', () => {
//         expect(1 + 2).toEqual(3);
//     });
// });

describe('Signup', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Signup />, div);
    });

    describe('handleUsernameChange', () => {
        it('should set username to a string', () => {
            const signup = TestUtils.renderIntoDocument(<Signup />);
            var e = {target: { value: 'Student_123'}};
            signup.handleUsernameChange(e);
            expect(signup.state.username).toBe('Student_123');
        });
    });

    describe('handleEmailChange', () => {
        it('should set email to a string', () => {
            const signup = TestUtils.renderIntoDocument(<Signup />);
            var e = {target: { value: 'Email_123'}};
            signup.handleEmailChange(e);
            expect(signup.state.email).toBe('Email_123');
        });
    });

    describe('handlePasswordChange', () => {
        it('should set password to a string', () => {
            const signup = TestUtils.renderIntoDocument(<Signup />);
            var e = {target: { value: 'Password_123'}};
            signup.handlePasswordChange(e);
            expect(signup.state.password).toBe('Password_123');
        });
    });

});