class Friend extends React.Component{
    render(){
        const {name, skills} = this.props;
        return (
            <div>
                <h1>This is {name}</h1>
                <p>They're skills include: </p>

                <ul>
                    {skills.map(e => <li>{e}</li>)}
                </ul>
            </div>
        )
    }
}