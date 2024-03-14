import React, { useState } from 'react'
import Button from '../Button/Button'
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName( event.target[0].value);
    setEmail (event.target[1].value);
    setText  (event.target[2].value);
    console.log(name, email, text)
  }

  return (
    <section className='relative'>
      <div className='w-1/3 ml-20 '>
        <div className='flex items-center gap-16 mb-5 '>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageDetail fontSize='20px'
            />}
          />
          <Button
            text="VIA CALL"
            icon={<IoCallSharp fontSize='20px'
            />
            }
          />
        </div>
        <Button
          text="VIA EMAIL"
          variant={true}
          icon={<HiOutlineMail fontSize='20px' />}

        />

        <form className='mt-10' onSubmit={onSubmit}>
          <div className='flex flex-col relative'>
            <label className='absolute -top-3 left-2 px-2 bg-white font-semibold' htmlFor="name">Name</label>
            <input className='border-black border-2 h-10 px-2' type="text" name="name" id="" />
          </div>
          <div className='mt-5 flex flex-col relative'>
            <label className='absolute -top-3 left-2 px-2 bg-white font-semibold' htmlFor="email">Email</label>
            <input className='border-black border-2 h-10 px-2' type="email" name="email" id="" />
          </div>
          <div className='mt-5 mb-5 flex flex-col relative'>
            <label className='absolute -top-3 left-2 px-2 bg-white font-semibold' htmlFor="textarea">Message</label>
            <textarea className='border-black border-2 h-44 px-2' name="textarea" id="" />
          </div>
          <div className='flex justify-end'>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className='absolute top-0 left-1/2 '>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm