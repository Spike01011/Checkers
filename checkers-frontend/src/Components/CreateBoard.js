import React, {useEffect, useState} from "react";

function ValidateClick(){
	console.log("validated");
}
function CreateRow(rowNum, pawnList){
	const list = [];
	for (let colNum = 0; colNum < 8; colNum++){
		if ((colNum + rowNum) % 2 === 0){
			list.push(<div key={`${rowNum}-${colNum}`} id={`${rowNum}-${colNum}`} className="square black" onClick={ValidateClick}></div>);
		}
		else {
			// if (rowNum <= 2){
			// 	list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${i}-piece}`} className={"black-piece piece"}></div></div>);
			// }
			// else if (rowNum >= 5){
			// 	list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${i}-piece}`} className={"white-piece piece"}></div></div>);
			// }
			// else {
			// 	list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}></div>);
			// }
			let pawn = pawnList.find((pawn) => parseInt(pawn.row) === rowNum && parseInt(pawn.col) === colNum);
			if (pawn && pawn.length != 0){
				list.push(<div key={`${rowNum}-${colNum}`} id={`${rowNum}-${colNum}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${colNum}-piece}`} className={`${pawn.isKing === "true" ? `${pawn.color.toLowerCase()}-piece-crowned` : `${pawn.color.toLowerCase()}-piece`} piece`}></div></div>);

				// if (pawn.color === "black"){
				// 		list.push(<div key={`${rowNum}-${colNum}`} id={`${rowNum}-${colNum}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${colNum}-piece}`} className={"black-piece piece"}></div></div>);
				// }
				// else{
				// 		list.push(<div key={`${rowNum}-${colNum}`} id={`${rowNum}-${colNum}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${colNum}-piece}`} className={"white-piece piece"}></div></div>);
				// }
			}
			else {
					list.push(<div key={`${rowNum}-${colNum}`} id={`${rowNum}-${colNum}`} className="square white" onClick={ValidateClick}></div>);
			}
		}
	}
	const row = <div key={`row-${rowNum}`} className={"checkers-row"}>{list}</div>;
	return row;
}

function CreatePawns(){
	let pawnsList = [];
	for (let row = 0; row <= 2; row++){
		for (let col = 1-(row % 2); col < 8; col+=2){
			pawnsList.push({row: row, col: col, color: "black", isKing: "false"});
		}
	}
	for (let row = 5; row < 8; row++){
		for (let col = 1-(row % 2); col < 8; col+=2){
			pawnsList.push({row: row, col: col, color: "white", isKing: "false"});
		}
	}
	return pawnsList;
}

export default function CreateBoard(pawnList = [] ){
	if (pawnList.length === 0){
		pawnList = CreatePawns();
	}
	const list = [];
	for (let i = 0; i < 8; i++){
		list.push(CreateRow(i, pawnList));
	}
	return list;
}
