class App extends React.Component {
    render(){
        return (
            <section>
                <Hello 
                    to="Johnny Boy" 
                    from="Mic" 
                    phone={4046974678}
                    data={[1,2,3]}
                    bangs = {4}
                    img="../mic_idle.gif"
                />
                {/* <Hello 
                    to="Kareem" 
                    from="Sunni"
                    bangs={12}
                /> */}
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));