import React from "react";
import Button from "./buttons/Button";

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
  // Contact form removed per user request; only contact info is shown.

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Call us",
      content: (
        <>
          +91-800-364-2596
          <br />
          +91-844-199-2003
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Email us",
      content: (
        <>
          pintujhala4@gmail.com
          <br />
          pintugit982@gmail.com
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Visit us",
      content: (
        <>
          jhalawar city rajasthan,
          <br />, IND
        </>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1100px] rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur-xl">
        {/* Heading */}
        <section className="flex flex-col items-center text-center gap-6 px-4 py-6">
          <Button title="Contact-US" />
          <p className="mx-auto max-w-[720px] text-base leading-7 text-gray-300 sm:text-lg">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </section>

        {/* Contact Info */}
        <section className="grid gap-6 px-4 py-6 sm:grid-cols-3">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-4 h-16 w-16 rounded-full bg-white/5 p-3"
              />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                {item.content}
              </p>
            </div>
          ))}
        </section>

        {/* Contact form removed by request. Keep contact info and CTA. */}
        <section className="px-4 pb-8">
          <div className="rounded-3xl bg-slate-950/80 p-6 shadow-xl shadow-black/20 text-center">
            <p className="text-gray-300">
              The contact form has been disabled. You can reach me directly via email or phone using the contact information above. Looking forward to connecting with you! and whatsapp me on +91-800-364-2596
            </p>
            
             
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
