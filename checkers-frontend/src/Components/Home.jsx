import React, {useEffect, useState} from "react";

export default function Home(){

	function ValidateClick(){
		console.log("validated");
	}
	function CreateRow(rowNum){
		const list = [];
		for (let i = 0; i < 8; i++){
			if ((i + rowNum) % 2 === 0){
				list.push(<div id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}></div>);
			}
			else {
				list.push(<div id={`${rowNum}-${i}`} className="square black" onClick={ValidateClick}><div className={"black-piece piece"}></div></div>);
			}
		}
		const row = <div className={"checkers-row"}>{list}</div>;
		return row;
	}

	function CreateBoard(){
		const list = [];
		for (let i = 0; i < 8; i++){
			list.push(CreateRow(i));
		}
		return list;
	}

	return(
		<div id={"game-div"}>
			<div className={"checkers-board"}>
				{CreateBoard()}
			</div>
			<div className="login-grid">
				<div className="text"><span>Play Checkers</span> <span>Online</span> <span> on the #1 Site!</span> </div>
				<div className="games-today">97,129 <span className="grayed-out-text">Games Today</span></div>
				<div className="players-online">363,426 <span className="grayed-out-text">Playing now</span></div>
				<div className="players-grid-btn-1"><button className="btn btn-lg btn-outline-primary">Log in</button></div>
				<div className="players-grid-btn-2"><button className="btn btn-lg btn-outline-success">Register</button></div>
			</div>
		</div>
	);
}
