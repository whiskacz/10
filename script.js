class ReactButton extends React.Component{
    state={
        status: true
    }

    componentDidMount(){
        console.log("Aplikacja zamontowana")
    }

    componentDidUpdate(){
     console.log("Aplikacja zupdateowana")   
    }

    render(){
        console.log("Renderowanie aplikacji")
        return(
            <div>
            <button onClick={()=>this.setState({status :!this.state.status})}>Przełącz</button>
            <Child1 status={this.state.status}/>
            </div>
            )
    }
}

class Child1 extends React.Component{
    componentDidMount(){
        console.log("Child1 zamontowana")
    }

    componentDidUpdate(){
     console.log("Child1 zupdateowana")   
    }
    render(){
        console.log("Renderowanie Child1")
        return(

        <div>{String(this.props.status)}</div>
    )}

}

ReactDOM.render(<ReactButton />, document.getElementById('whiskacz'))