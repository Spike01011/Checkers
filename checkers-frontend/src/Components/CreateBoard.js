import React from "react";

function ValidateClick(){
	console.log("validated");
}
function CreateRow(rowNum){
	const list = [];
	for (let i = 0; i < 8; i++){
		if ((i + rowNum) % 2 === 0){
			list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square black" onClick={ValidateClick}></div>);
		}
		else {
			if (rowNum <= 2){
				list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${i}-piece}`} className={"black-piece piece"}></div></div>);
			}
			else if (rowNum >= 5){
				list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}><div key={`${rowNum}-${i}-piece}`} className={"white-piece piece"}></div></div>);
			}
			else {
				list.push(<div key={`${rowNum}-${i}`} id={`${rowNum}-${i}`} className="square white" onClick={ValidateClick}></div>);
			}
		}
	}
	const row = <div key={`row-${rowNum}`} className={"checkers-row"}>{list}</div>;
	return row;
}

export default function CreateBoard(){
	const list = [];
	for (let i = 0; i < 8; i++){
		list.push(CreateRow(i));
	}
	return list;
}
