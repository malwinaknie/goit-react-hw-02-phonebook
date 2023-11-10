import React, { Component } from "react";

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }

handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value})
};

handleSubmit = e => {
    e.preventDefault();
    const {name, number} =this.state;
    this.props.onSubmit(name, number);
    this.setState({name: '', number:''})   
};

    render() {
        const {name, number} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    </label>
                    <label>Number:
                    <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    </label>
                    <button>Add Contact</button>
                </form>
            </div>
        )
    }
}