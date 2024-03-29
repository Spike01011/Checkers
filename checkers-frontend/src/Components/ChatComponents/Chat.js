import React, { useState, useEffect, useRef } from 'react';
import {HttpTransportType, HubConnectionBuilder} from '@microsoft/signalr';

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const Chat = () => {
	const [connection, setConnection] = useState(null);
	const [chat, setChat] = useState([]);
	const latestChat = useRef(null);

	latestChat.current = chat;

	useEffect(() => {
		const newConnection = new HubConnectionBuilder().withUrl(
			"https://localhost:7041/chat-hub", {
				accessTokenFactory: () => localStorage.getItem("token"),
			}).withAutomaticReconnect().build();

		setConnection(newConnection);
	}, []);

	useEffect(() => {

		if (connection){
			connection.start().then(result => {
				console.clear();
				console.log("Connected !");


				connection.on("ReceiveMessage", message => {
					const updatedChat = [...latestChat.current];
					updatedChat.push(message);

					setChat(updatedChat);
					console.log(chat);
				});
			}).catch(e => {
				console.log("Connection failed : ", e)
			});
		}
	}, [connection]);

	const sendMessage = async (user, message) => {
		const chatMessage = {
			user: user,
			message: message
		};
		console.log(connection.connectionId);
		if (connection.connectionId){
			try{
				await connection.send("SendMessage", chatMessage);
			}
			catch (e){
				console.log(e);
			}
		}
		else {
			alert("No connection to server yet.");
		}
	}

	return(
		<div>
			<ChatInput sendMessage={sendMessage} />
			<hr/>
			<ChatWindow chat={chat}/>
		</div>
	)
};

export default Chat;
