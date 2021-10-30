class Card extends React.Component{
    render(){
        const age = getAge();
        return (
            <div className = "Card">
                <h1>This is Mic.</h1>
                <img src={this.props.img}/>

                <p>He's {age} years old.</p>
                <p className={age>250 ? "old" : "young"}>{age > 250 ? "THAT BOY OLD" : "HES FRESH"}</p>
            </div>
        )
    }
}

function getAge(){
    return Math.floor(Math.random() * 550 + 10);
}