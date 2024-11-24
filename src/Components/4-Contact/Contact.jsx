import { useEffect, useRef, useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import msgAnimaton from '../../animation/msg.json'
const Contact = () => {
  const [state, handleSubmit] = useForm("manwrqdr");
  const [messageVisible, setMessageVisible] = useState(false);
  const emailRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setMessageVisible(true);

     
    }
  }, [state.succeeded]);

  useEffect(() => {

    if (emailRef.current) emailRef.current.value = "";
    if (textareaRef.current) textareaRef.current.value = "";
  
   setTimeout(()=>{
    setMessageVisible(false)
   },2000)
  }, [state.result]);
  return (
    <section className="contact-us">
      <h1 className="title" id="contact">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              id="email"
              type="email"
              name="email"
              ref={emailRef}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              ref={textareaRef}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "submuit"}
          </button>
          
          {messageVisible ? <p className="mt-2">Message sent</p> : null}
          
        </form>
        <div className=" animation">
          <Lottie className="lotie" animationData={msgAnimaton} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
