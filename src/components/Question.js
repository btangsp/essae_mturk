import React, { useState } from 'react';

const Question = () => {
	const [answerValue, setAnswerValue] = useState(0);

	const handleSubmit = (event) => {
		setAnswerValue(1);
	}

	let display = (
		<div>
			<p>Please listen to the audio and answer the following question</p>
			<audio controls><source src="audio/p232_001_mic2_1.41_enhanced.wav" type="audio/wav" /></audio>
			<br />
			<p>Can you hear the audio sample?</p>
			<form onSubmit={handleSubmit}>
				<input type="radio" id="yes" name="yes" />
				<label for="yes">Yes</label>
				<br />
				<input type="radio" id="no" name="no" />
				<label for="no">No</label>
				<br />
				<br />
				<input type="submit" value="Submit Answer" />
			</form>
		</div>
	);

	if (answerValue === 1) {
		display = (
			<div>
				<p>Thank you for your participation. Please copy the following code and submit it for the corresponding HIT on Mechanical Turk.</p>
				<h1>35543</h1>	
			</div>			
		);
	}

	return (
		<div>
			{display}
		</div>
	);
}

export default Question;