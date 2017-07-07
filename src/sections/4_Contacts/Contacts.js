import React from 'react';
import './Contacts.css';

import Input from './components/Input';

const Contacts = () => {
    return (
        <div className="contacts" id="Contacts">
            <h2 className="title">Contacts</h2>

            <div className="content">
                <form className="contacts__form" action="https://formspree.io/sergey.yuhimovich@gmail.com" method="post">
                    <Input type="text"
                           name="name"
                           label="Full name"
                    />

                    <Input type="email"
                           name="email"
                           label="Email"
                    />

                    <Input type="textarea"
                           name="message"
                           label="Message"
                    />

                    <button className="contacts__submit" type="submit">Send</button>

                    <input type="text" name="_gotcha" style={{display: 'none'}} />
                </form>
            </div>
        </div>
    )
};

export default Contacts;
