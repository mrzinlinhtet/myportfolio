import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

const Contact = ({ notify }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqaxh4i",
        "template_mb1totj",
        form.current,
        "eQPIKWGNgXy0ZNakn"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setName("");
          setEmail("");
          setMessages("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-full">
      <h3
        id="contact"
        className="text-3xl font-semibold dark:text-white text-center mt-10"
      >
        Contact
      </h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center mt-5 "
      >
        <div className="relative z-0 mb-6 group w-full md:w-[400px]">
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            name="from_name"
            id="floating_name"
            className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
            placeholder=" "
            required
            minLength="5"
            maxLength="20"
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 mb-6 group w-full md:w-[400px]">
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            name="from_email"
            id="floating_email"
            className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 mb-6 group w-full md:w-[400px]">
          <textarea
            onChange={(event) => setMessages(event.target.value)}
            value={messages}
            type="text"
            name="messages"
            id="floating_messages"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
            placeholder=" "
            required
            rows="7"
          ></textarea>
          <label
            htmlFor="floating_messages"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Messages
          </label>
        </div>
        <button
          type="submit"
          className=" my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Send
          <AiOutlineSend className="text-xl ms-2" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
