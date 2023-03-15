import CreateBoard from "../CreateBoard";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {HubConnectionBuilder} from "@microsoft/signalr";

export default function HostGameComponent(){
	const [roomCode, setRoomCode] = useState(null);
	const [gameStarted, setGameStarted] = useState(false);
	const [connection, setConnection] = useState(null);
	const hostUrl = "https://localhost:7041/game/host";
	const connectionUrl = "";

	useEffect(() => {
		axios.get(hostUrl, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).then((res) => {
			setRoomCode(res.data);
		}).catch((e) => console.error(e));
	}, []);

	useEffect(() => {
		ShowRoomCode();

		const newConnection = new HubConnectionBuilder().withUrl(
			"https://localhost:7041/game-hub", {
				accessTokenFactory: () => localStorage.getItem("token"),
			}).withAutomaticReconnect().build();

		setConnection(newConnection);
	}, [roomCode, gameStarted]);

	useEffect(() => {
		if (connection){
			connection.start(){}
		}

	}, [connection]);

	function ShowRoomCode(){
		if (roomCode != null && !gameStarted){

			return(
				<div id={"room-code-div"}>
					<p className={"text"} id={"room-code"}>Room code: <span className={"code"}>{roomCode}</span></p>
				</div>
			)
		}
		else return (<></>)

	}


	return(<>
		<div id={"match-div"} className={"game-div"}>
			{ShowRoomCode()}
			<div className={"checkers-board"}>
				{CreateBoard()}
			</div>
		</div>
	</>)
}
