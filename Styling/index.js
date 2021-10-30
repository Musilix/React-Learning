class App extends React.Component {
    render(){
        return (
            <section className="App">
                <Card
                    img="../mic_idle.gif"
                />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));