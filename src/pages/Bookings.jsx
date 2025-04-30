import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const Bookings = () => {
    return (
        <section id='bookings'>
           
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/110777180908572290084/form/1FAIpQLScpGJtIIQO8HnKcWcJQceI-IeADBwjTf4tyUlmCvq8GG95fZw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

/>
        </section>
    );
}

export default Bookings;
