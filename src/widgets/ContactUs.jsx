import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.comment.trim()) newErrors.comment = "Comment is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setErrors({});
      setFormData({ name: "", email: "", comment: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="rounded-2xl max-md:w-[350px] md:w-[550px] bg-cover bg-[url('./assets/contactusimage/contactform-gradiant.jpeg')]">
      <form action="https://api.web3forms.com/submit" method="POST"
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 p-4 rounded-lg shadow-lg max-sm:w-[350px] md:w-[550px]"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
        <input type="hidden" name="access_key" value="d7054535-494d-425f-9841-eee902b74fd8"></input>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 text-white bg-transparent border-2 placeholder:text-gray-300 border-white/35 rounded-md focus:outline-none focus:border-white/50 transition duration-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 text-white bg-transparent border-2 placeholder:text-gray-300 border-white/35 rounded-md focus:outline-none focus:border-white/50 transition duration-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment"
            className="w-full p-3 h-24 text-white bg-transparent border-2 placeholder:text-gray-300 border-white/35 rounded-md focus:outline-none focus:border-white/50 transition duration-300"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-2">{errors.comment}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-bold rounded-md transition duration-300 hover:bg-slate-700 hover:text-white"
          disabled={!formData.name || !formData.email || !formData.comment}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;







// function ContactUs({ title, Text }) {
//     return (
//         <div className="p-4 w-[500px] h-[500px] bg-cover bg-[url('./assets/contactusimage/contactform-gradiant.jpeg')]">
//             <form>
//                 <div className=""><input className="w-80 p-2 outline-none rounded-md bg-slate-200 text-black" type="email" placeholder="Email"></input></div>
//             </form>
//         </div>
//     );
//   }
  
//   export default ContactUs;