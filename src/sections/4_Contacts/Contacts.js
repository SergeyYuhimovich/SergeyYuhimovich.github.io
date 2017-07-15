import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts" id="Contacts">
            <h2 className="title">Contacts</h2>

            <div className="content">
                <form className="contacts__form" action="https://formspree.io/sergey.yuhimovich@gmail.com" method="post">
                    <input className="contacts__input--name"
                           type="text"
                           name="name"
                           placeholder="Full name"
                           required
                    />

                    <input className="contacts__input--email"
                           type="email"
                           name="email"
                           placeholder="Email"
                           required
                    />

                    <textarea className="contacts__input--message"
                              name="message"
                              rows={7}
                              placeholder="Message"
                              required
                    />

                    <button className="contacts__submit-btn" type="submit">Send message</button>

                    <input type="text" name="_gotcha" style={{display: 'none'}} />
                </form>

            </div>
        </div>
    )
};

export default Contacts;
