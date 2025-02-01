"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

// Define schema using Zod
const fromSchema = z.object({
  YourName: z.string().min(1, "Name is required"),
  YourEmail: z.string().email("Invalid email address"),
  Message: z.string().min(1, "Message is required"),
});

// Define TypeScript type for form data
type FromType = z.infer<typeof fromSchema>;

const Contactme = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FromType>({
    resolver: zodResolver(fromSchema),
  });

  const handleFormSubmit = (data: FromType) => {
    console.log("Form submitted with data:", data);
    reset();
    setIsSuccess(true);

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <>
      <div className="relative">
        {/* Background Section */}
        <div
          className="lg:h-screen h-auto backdrop-blur-3xl bg-cover bg-center lg:py-0 py-10 flex flex-col items-center justify-center"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)" }}>
          {/* Contact Form Section */}
          <div className="w-[90%] h-[75%] bg-transparent p-8 lg:flex justify-start items-center lg:space-x-10">
            {/* Contact Info */}
            <div className="lg:w-1/2 w-full text-left mb-8 lg:mb-0 flex flex-col justify-center ">
              <h2 className="text-3xl font-bold text-[#FF8000]">Contact Me</h2>
              <p className="mt-4">
                I am a passionate web developer and designer dedicated to
                creating intuitive and dynamic user experiences. Let's connect
                and build something great together!
              </p>
              <div className="mt-8 space-y-4">
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">phone :</span>
                  <span>+91 99036 83766</span>
                </p>
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">email :</span>
                  <span>jayantadebnathwork7@gmail.com</span>
                </p>
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">
                    location_on :
                  </span>
                  <span>North 24 Pgs, Kolkata, India</span>
                </p>
              </div>

              <div className="w-full mt-3">
                <h2 className="md:text-xl font-semibold mb-4 text-[#FF8000]">
                  Social Handel
                </h2>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/jayanta-debnath-622a7b316/"
                    aria-label="LinkedIn"
                    className="text-2xl transition-colors duration-200 w-12 h-12 bg-slate-300 dark:bg-white flex justify-center items-center rounded-full">
                    <Linkedin className="text-[#FF8000]" />
                  </a>
                  <a
                    href="https://github.com/Creative-Wave"
                    aria-label="GitHub"
                    className="text-2xl transition-colors duration-200 w-12 h-12 bg-slate-300 dark:bg-white flex justify-center items-center rounded-full">
                    <Github className="text-[#FF8000]" />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="text-2xl transition-colors duration-200 w-12 h-12 bg-slate-300 dark:bg-white flex justify-center items-center rounded-full">
                    <Twitter className="text-[#FF8000]" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    aria-label="Email"
                    className="text-2xl transition-colors duration-200 w-12 h-12 bg-slate-300 dark:bg-white flex justify-center items-center rounded-full">
                    <Mail className="text-[#FF8000]" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100048386407006"
                    aria-label="Facebook"
                    className="text-2xl transition-colors duration-200 w-12 h-12 bg-slate-300 dark:bg-white flex justify-center items-center rounded-full">
                    <Facebook className="text-[#FF8000]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 w-full border-2 border-[#FF8000] rounded-xl lg:p-10 p-5">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="col-span-2 lg:col-span-1 space-y-3">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("YourName")}
                      className={`${
                        errors.YourName ? "border-red-500" : ""
                      } border-2  dark:border-white rounded-lg`}
                    />
                    {errors.YourName && (
                      <span className="text-red-500 text-sm">
                        {errors.YourName.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="col-span-2 lg:col-span-1 space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("YourEmail")}
                      className={`${
                        errors.YourEmail ? "border-red-500" : ""
                      } border-2  dark:border-white rounded-lg`}
                    />
                    {errors.YourEmail && (
                      <span className="text-red-500 text-sm">
                        {errors.YourEmail.message}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="col-span-2 space-y-3">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      {...register("Message")}
                      className={`h-40 ${
                        errors.Message ? "border-red-500" : ""
                      } border-2  dark:border-white rounded-lg`}
                    />
                    {errors.Message && (
                      <span className="text-red-500 text-sm">
                        {errors.Message.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 text-center lg:text-right">
                  <button
                    type="submit"
                    className="bg-[#FF8000] text-white py-2 px-6 rounded-md hover:bg-[#e06b00] transition duration-300 ease-in-out">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section (Copyright) */}
      <div className="bg-black text-center py-4 ">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Jayanta Debnath. All rights reserved.
        </p>
      </div>

      {/* Success Message */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Success!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contactme;
