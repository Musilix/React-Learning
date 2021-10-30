class App extends React.Component {
    render(){
        return (
            <section>
                <Slot
                    s1="🍊"
                    s2="🍈"
                    s3="🍍"
                />

                <Slot
                    s1="🍒"
                    s2="🍒"
                    s3="🍒"
                />

                <Slot
                    s1="🍊"
                    s2="🍍"
                    s3="🍒"
                />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));