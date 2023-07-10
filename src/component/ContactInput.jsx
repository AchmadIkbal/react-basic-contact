import React from "react";

class ContactInput extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            name: '',
            tag: '',
        }
        
        this.OnNameChangeEventHandler = this.OnNameChangeEventHandler.bind(this);
        this.OnTagChangeEvetHandler = this.OnTagChangeEvetHandler.bind(this);
        this.OnSubmitEventHandler = this.OnSubmitEventHandler.bind(this);
    }

    OnNameChangeEventHandler(event){
        this.setState(() => {
            return{
                name:event.target.value,
        }
        });
    }

    OnTagChangeEvetHandler(event) {
        this.setState(() => {
            return{
                tag:event.target.value,
            }
        })
    }
    OnSubmitEventHandler(event){
        event.preventDefault();
        this.props.addContact(this.state);
    }


    render () {
        return (
            <form action="" className="contact-input" onSubmit={this.OnSubmitEventHandler}>
                <input type="text" placeholder="Nama" name="" id="" value={this.state.name} onChange={this.OnNameChangeEventHandler} />
                <input type="text" placeholder="Tag" name="" id="" value={this.state.tag} onChange={this.OnTagChangeEvetHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}
export default ContactInput;