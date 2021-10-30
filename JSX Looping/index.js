class App extends React.Component {
    render(){
        return (
            <section>
                <Friend
                    name="Sunni"
                    skills={["cute", "genius", "demin ;--}"]}
                />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));