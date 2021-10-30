class NumPicker extends React.Component{
	render(){
		//Look at that! You can decalre variables in the render method... duh!
		const age = getNum();
		let msg = "";

		if(age <= 250){
			msg="He's still less than a 100 years old!";
		}else if(age === 500){
			msg = 
				<div>
					<p>HES EXACTLY 500!</p>
					<p>Look, this variable held a literal html collection!</p>
				</div>
		}else{
			msg="He's so OLD!"
		}

		return (
			<section>
				<h1>Mic is {age} years old</h1>

				{/* ternary */}

				{
					//getting funky with the ternary now...
					age === 0 ? "Mic does not exist" : 
					<div>
						<p>{age <= 250 ? "He is jovial!" : "He is tired..."}</p>
						<img src = {age <= 250 ? "../../mic_run.gif" : "../../mic_idle.gif"} />
					</div>
				}

				{/* short circuit operators */}
				{/* we can simplify the ternary logic by using short circuit ops... if the first condition is false, the second condition wont be fulfilled */}
				<div>
					{
						age % 2 === 0 && <p>Just so happens, his age is an even number</p>
					}
				</div>

				{/* built in variables w/ if/else */}
				<div>
					{msg}
				</div>
				

			</section>
		)
	}
}

function getNum(){
	return Math.floor(Math.random() * 999 + 0);
}

ReactDOM.render(<NumPicker/>, document.getElementById("root"));