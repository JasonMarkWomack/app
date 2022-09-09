
import React from "react";
import './App.css';
class App extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            MyDataHasLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    MyDataHasLoaded: true
                });
            })
    }
    render() {
        const { MyDataHasLoaded, items } = this.state;
        if (!MyDataHasLoaded) return <div>
            <h1> Pleses wait. </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch Data </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } > 
                    Name: { item.name }, 
                    Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;
