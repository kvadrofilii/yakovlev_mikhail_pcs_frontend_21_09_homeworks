import React from 'react';

function Gender(props) {
	let condition = '';
	if (props.isCondition === true) {
		condition = 'button-gender_outline';
	} else if (props.isCondition === false) {
		condition = 'button-gender_colored';
	}

	return <button type={'button'} className={`button-gender ${condition} ${props.gender}`} onClick={props.onClick}><span className={`button-gender__gender ${props.gender}`}></span></button>;
}

export default Gender;
