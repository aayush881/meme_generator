 import React, { Component } from 'react';
 import './index.css'
class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topText:"",
            bottomText:"",
            memeImg:"",
            allImg:[]
         
        }
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=>response.json())
        .then(response=>{
            const {memes}=response.data
            console.log(memes)
            this.setState({allImg:memes})
        })

    }
    handleChange=(event)=>{
        
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const randNum=Math.floor(Math.random() * this.state.allImg.length)
        const randImg=this.state.allImg[randNum].url
        console.log(randImg)
        this.setState({memeImg:randImg})
    }
    render() { 
        return ( 
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        name="topText"
                        type="text"
                        placeholder="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        name="bottomText"
                        type="text"
                        placeholder="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.memeImg} width="400px" height="400px"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
         );
    }
}
 
export default MemeGenerator;