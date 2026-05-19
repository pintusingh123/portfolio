 import React, { useState } from "react";
import Button from "./buttons/Button";

const InputField = ({ label, placeholder, width, onChange }) => {
  return (
    <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
      <label className="font-bold text-white">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-2.5 tracking-tight text-white max-md:mt-10">
      <div className="flex gap-5 text-2xl font-bold leading-9">
        <img src={icon} alt="" className="shrink-0 aspect-square w-[54px]" />
        <h3 className="flex-auto self-start">{title}</h3>
      </div>
      <div className="pr-2px flex-auto self-start text-lg leading-8 px-5 w-auto text-gray-300">
        {content}
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    alert("Form Submitted! 🚀");
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Call us",
      content: (
        <>
          +1-940-394-2948
          <br />
          +1-389-385-3807
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Email us",
      content: (
        <>
          support@brainwave.io
          <br />
          contact@brainwave.io
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Visit us",
      content: (
        <>
          34 Madison Street,
          <br />
          NY, USA 10005
        </>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-start pt-20 px-6">
      <div className="px-10 py-10 max-w-[1250px] w-full rounded-2xl">
        {/* Heading */}
        <section className="flex flex-col text-center max-w-[1266px] w-full items-center">
           <Button title="Contact-US" />
          <p className="mt-8 w-full text-lg max-w-[650px] text-gray-300">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </section>

         {/* Contact Info */}
<section className="py-16 mx-auto">
  <div className="flex flex-row gap-12 items-center justify-center max-md:gap-10">
    {contactData.map((item, index) => (
      <div key={index} className="flex flex-col items-center text-center max-w-[400px]">
        <img src={item.icon} alt="" className="w-[60px] h-[60px] mb-4" />
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-lg text-gray-300">{item.content}</p>
      </div>
    ))}
  </div>
</section>


        {/* Form */}
        <section className="flex  border flex-col px-8 py-12   rounded-xl shadow-lg">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex w-full max-w-[1000px] justify-between">
              <InputField
                label="First Name & Last Name"
                placeholder="i.e. John Smith"
                width="w-[48%]"
                onChange={(value) => handleChange("firstName", value)}
              />
              <InputField
                label="Email"
                placeholder="i.e. john@mail.com"
                width="w-[48%]"
                onChange={(value) => handleChange("email", value)}
              />
            </div>
            <div className="flex w-full max-w-[1000px] justify-between">
              <InputField
                label="Phone Number"
                placeholder="i.e. +1-234-567-7890"
                width="w-[48%]"
                onChange={(value) => handleChange("phoneNumber", value)}
              />
              <InputField
                label="Subject"
                placeholder="i.e. I need help"
                width="w-[48%]"
                onChange={(value) => handleChange("subject", value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center w-[100%]">
            <InputField
              label="Message"
              placeholder="i.e. Type your message here."
              width="w-[93%]"
              onChange={(value) => handleChange("message", value)}
            />
            <div className="flex justify-start w-[90%] pt-6">
              <button
                className="text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-12 py-3 transition"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
