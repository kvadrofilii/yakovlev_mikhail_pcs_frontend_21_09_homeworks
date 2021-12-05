function Gender({ gender = 'man', isCondition = 'false' }) {
	let condition = '';
	if (isCondition === 'true') {
		condition = 'button-gender_outline';
	} else if (isCondition === 'false') {
		condition = '';
	}

	return <button className={`button-gender ${condition} ${gender}`}><span className={`button-gender__gender ${gender}`}></span></button>;
}

export default Gender;
