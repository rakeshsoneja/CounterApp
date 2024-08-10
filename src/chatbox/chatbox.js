import '../customStyles/counterComponentStyles.css';
function ChatBox() {

    return (
        <div>
            <form> 
                
                    <input type='text' name="Email" placeholder="messageWindow" className='messageWindow'></input>
                    <div className='chat-input'>
                        <input type='text' name="Email" placeholder="Email"></input>
                        <button>Send</button>
                    </div>
                    
        
                
            </form>
        </div>
    )
}

export default ChatBox;