import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hq7snzd', 'template_b8nht2f', form.current, 'feHkisclE7WJWJdBw')
      .then((result) => {
          console.log(result.text);
          toast.success('message sent to admin 🙂', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            document.getElementById('Form').reset();
            
      }, (error) => {
          console.log(error.text);
          toast.error('Unable to send message try after sometime 🙃', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            toast.warn('Check your internet connection', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
      });
  };

  return (
    <div className='container-fluid contactbg'>
        <div className='contact bg-dark'>
            <form className=' mx-auto' ref={form} onSubmit={sendEmail} method='post' id='Form'>
                <h1 className='my-4 text-warning'>Contact</h1>
                <input type='text' className='form-control my-3' placeholder='Your Name' name='from_name' required></input>
                <input type='email' className='form-control my-3' placeholder='Your Email' name='from_email' required></input>
                <textarea className='form-control my-3 mx-auto' rows='5' placeholder='Enter your message' name='message' required></textarea>
                <button className='btn btn-warning mt-3' value='submit' type='submit' >Send <i class="fa-solid fa-paper-plane"></i></button>
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Contact