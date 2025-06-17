import './Contact.css'
import Swal from 'sweetalert2'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "6daf1394-91ee-48bc-8253-22ec056bd4c1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
            })
            console.log("Error", data);
        }
    };

    return (
        <div id='Contact-Form'>
            <form onSubmit={onSubmit}>
                <h1>Contact Form</h1>
                <div className="Name">
                    <label>Full Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                </div>
                <div className="email">
                    <label>Email Address</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                </div>
                <div className="message">
                    <label>Your Message</label>
                    <textarea type='text' placeholder='Enter your message' name='message' required />
                </div>
                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
