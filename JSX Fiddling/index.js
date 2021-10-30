class JSXDemo extends React.Component{
	render(){
		return (
			<div>
				<h1>This is Mic</h1>
				<img src="../../mic_run.gif" />
				<p>He is {getMicsAge()} years old</p>
			</div>
		)
	}
}

function getMicsAge(){
	let x = Math.floor(Math.random() * 250 + 1);
	let y = Math.floor(Math.random() * 250 + 1);

	return x * y;
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));