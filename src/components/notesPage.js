import React, { Component } from 'react'
import '../index.css'

export class notesPage extends Component {
constructor(props){
super(props)

this.state={
  cards:[],
  count:0

}

this.c =[]
}
  

AddButtonHandler=(e)=>{
  this.setState({count:this.state.count+1})
  
  this.setState({count:this.state.count+1})
  this.c.push(this.state.count)
  this.setState({cards:this.c})
  
  //alert(this.state.cards)
}
DeleteButtonHandler=(x)=> {
  
  const notes = Object.assign([],this.state.cards)
  notes.splice(x,1)
  this.setState({cards:notes})

  alert(x)  
}


  render() {
      const children =[]
      //const cards=[]
      // for(let i=0;i<this.state.cards;i++){

      // children.push(<p  key={i}>
      //                   <input  class="box"/>{i}
      //                   <button onClick={this.AddButtonHandler}>add</button>
      //                   <button onClick={this.DeleteButtonHandler}>del</button>        
      //                                 </p>)
      // }

        this.state.cards.map(x =>  children.push(<p>
        <input  class="box"/>{x}
        <button onClick={this.AddButtonHandler}>add</button>
        <button onClick={this.DeleteButtonHandler.bind(this,x)}>del</button>        
                      </p>)                
        )



    return (
      <div>
        <div>
        <input   class="box"/>
        <button onClick={this.AddButtonHandler}>add</button>
        <button onClick={this.DeleteButtonHanlder}>del</button>
        </div>
        {children}
      </div>

     
    )
  }
}

export default notesPage
