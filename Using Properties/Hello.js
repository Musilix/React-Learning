class Hello extends React.Component {
    render(){
        let bangs = "!".repeat(this.props.bangs);
        console.log(bangs);

        return (
            <div>
                <p>Hi {this.props.to}! From {this.props.from}.</p>


                {/* <p>{this.props.phone ? "My phone number is: " + this.props.phone : null}</p>

                {
                    (this.props.data) ?
                        <p><b>I have some data... LOOK: {this.props.data}</b></p> :
                        <p><b>I have no data...</b></p>
                } */}

                <p>I am so excited to meet you{bangs} Check me out!</p>
                <img src={this.props.img}/>
                <br/>
            </div>
            
        )
    }
}