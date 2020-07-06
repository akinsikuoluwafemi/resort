import React, { Component } from 'react'

const RoomContext = React.createContext();
// <RoomContext.Provider value={}


export default class RoomProvider extends Component {
    state = {

    }

    render() {
        return (
            <RoomProvider.Provider value="hello">
                {this.props.children}
            </RoomProvider.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer, RoomContext}