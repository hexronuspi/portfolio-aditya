"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { toast } from "sonner";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const isDesktop = useMediaQuery({ minWidth: 782 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = form.current?.elements.namedItem("first_name") as HTMLInputElement;
    const lastName = form.current?.elements.namedItem("last_name") as HTMLInputElement;
    const email = form.current?.elements.namedItem("user_email") as HTMLInputElement;
    const message = form.current?.elements.namedItem("message") as HTMLTextAreaElement;

    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      toast("Please fill in all the fields.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm('service_6btzsh9', 'template_kh0hdgc', form.current, 'Yt7sKFz0-AyrBsBmj')
        .then(
          () => {
            console.log('SUCCESS!');
            if (form.current) {
              form.current.reset();
            }
            toast("Form successfully submitted! We will get back to you soon.");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full ${isDesktop ? 'max-w-2xl' : 'max-w-lg'} p-8 mx-auto mt-20`}
      >
        <p className="text-center mb-4">Fill up the form below to send us a message.</p>
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded p-8 w-6/7">
          <div className="mb-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="flex justify-between space-x-4">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                    First Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" name="first_name" />
                </div>

                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
                    Last Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" name="last_name" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                Email Address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" />
            </motion.div>
          </div>

          <div className="mb-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" />
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </main>
  );
};
