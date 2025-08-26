import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7qannt4", "template_5oexuzm", form.current, {
        publicKey: "XuQZ-3n8qWD3K1rdk",
      })
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();

          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          setStatus("❌ Failed to send. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg border-2 border-blue-300 rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Contact Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-blue-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-blue-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-blue-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-blue-700 font-medium">
              {status}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
