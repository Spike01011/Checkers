import React, { useState } from 'react';

const ChatInput = (props) => {
	const [user, setUser] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		const isUserProvided = user && user !== '';
		const isMessageProvided = message && message !== '';

		if (isUserProvided && isMessageProvided) {
			props.sendMessage(user, message);
		}
		else {
			alert('Please insert an user and a message.');
		}
	}

	// if (localStorage.getItem("token")){
	// 	setUser(localStorage.getItem("token"));
	// }
	// const onUserUpdate = (e) => {
	// 	setUser(e.target.value);
	// }

	const onMessageUpdate = (e) => {
		setMessage(e.target.value);
		if (localStorage.getItem("user")){
			setUser(localStorage.getItem("user"));
		}
	}

	return (
		<form
			onSubmit={onSubmit}>
			{/*<label htmlFor="user">User:</label>*/}
			{/*<br />*/}
			{/*<input*/}
			{/*	id="user"*/}
			{/*	name="user"*/}
			{/*	value={user}*/}
			{/*	onChange={onUserUpdate} />*/}
			{/*<br/>*/}
			<label htmlFor="message">Message:</label>
			<br />
			<input
				type="text"
				id="message"
				name="message"
				value={message}
				onChange={onMessageUpdate} />
			<br/><br/>
			<button>Submit</button>
		</form>
	)
};

export default ChatInput;
