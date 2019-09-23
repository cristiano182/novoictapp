import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble, SystemMessage } from 'react-web-gifted-chat';
import './styles.css'

export default function Chat() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        let responseApi = [{
            id: 1,
            text: 'Hello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developerHello developer',
            createdAt: new Date(),
            user: {
                id: 2,
                name: 'React',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        },
        {
            id: 3,
            text: 'Pelé entrou na sala',
            createdAt: new Date(),
            system: true,
            enter: false
        }]
        setMessages(responseApi)
    }, [])


    function onSend(message) {
        setMessages([message[0], ...messages])
    }



    function renderBubble(props) {
        return (
            <Bubble {...props}
                wrapperStyle={
                    {
                        left: {
                            backgroundColor: '#ddd',
                        },
                        right: {
                            backgroundColor: '#540a82',
                            background: "#673AB7", /* fallback for old browsers */
                            background: "-webkit-linear-gradient(to left,  #aa38c1, #673AB7 )",  /* Chrome 10-25, Safari 5.1-6 */
                            background: "linear-gradient(to left,  #aa38c1, #673AB7 )",
                        }
                    }} />
        )
    }

    function renderSystemMessage(props) {
        if(props.currentMessage.enter === true)
        return (
          <SystemMessage
            {...props}
            containerStyle={{
              marginBottom: 15,
                backgroundColor: 'green',
                borderRadius: 20,
                width: '50%',
                alignSelf: 'center',
            }}
            textStyle={{
              fontSize: 14,
              color: '#ddd'
              
            }}
          />
        );
        else
        return (
            <SystemMessage
              {...props}
              containerStyle={{
                marginBottom: 15,
                  backgroundColor: 'red',
                  borderRadius: 20,
                  width: '50%',
                  alignSelf: 'center',
              }}
              textStyle={{
                fontSize: 14,
                color: '#ddd'
                
              }}
            />
          );
      }


    return (
        <div className="around">
            <div className="Chat">
                <GiftedChat
                    renderSystemMessage={props => renderSystemMessage(props)}
                    renderUsernameOnMessage={true}
                    showAvatarForEveryMessage={true}
                    showUserAvatar={true}
                    alwaysShowSend={true}
                    renderBubble={props => renderBubble(props)}
                    messages={messages}
                    onSend={(message) => onSend(message)}
                    user={{
                        id: 1,
                        name: 'Maikon Caio',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    }}
                />
            </div>
            <div className="my-card-users-online">
                Participantes
            </div>

        </div>
    );
}