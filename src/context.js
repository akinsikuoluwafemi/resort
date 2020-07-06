import React, { Component } from 'react';

const RoomContext = React.createContext();
// <RoomContext.Provider value={}


 class RoomProvider extends Component {
     state = {
         greeting: 'hello',
         name: 'John'
     };

     render(){
         return (
             <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
 }
export default RoomProvider;

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
