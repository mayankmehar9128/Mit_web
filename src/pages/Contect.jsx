import ContactUs from "../widgets/ContactUs";

function Contact() {
  return (
    <main className="p-5">
      <div className="flex flex-wrap items-center justify-center lg:flex-nowrap gap-10">
        <div className="basis-2/5 max-md:basis-3/5 sm:basis-11/12">
          <div className="p-3">
            <p className="text-2xl font-medium">// contact details</p>
              <br />
              <div>
                <h1 className="text-5xl font-bold">Contact us</h1>
                <br />
                <div className="text-lg font-semibold text-wrap">
                  <p>
                    Give us a call or drop by anytime, we endeavour to answer all
                    enquiries within 24 hours on business days. We will be happy to
                    answer your questions.
                  </p>
                </div>
              </div>
          </div>
          <br />
          <div className="flex flex-col items-center lg:items-start justify-center gap-8">
            <div className="w-96 flex items-center justify-between gap-16 p-4 shadow-md rounded-md hover:shadow-xl transition ease-linear duration-300">
              <i className="fa-solid fa-globe text-2xl text-blue-700"></i>
              <div className="w-96">
                <h4 className="text-xl font-bold">Our Address:</h4>
                <p className="text-lg font-medium">Saidpur Mahadev Asthan Patna- 800004, Bihar</p>
              </div>
            </div>
            <div className="w-96 flex items-center justify-between gap-16 p-4 shadow-md rounded-md hover:shadow-xl transition ease-linear duration-300">
              <i className="fa-solid fa-envelope text-2xl text-blue-700"></i>
              <div className="w-96">
                <h4 className="text-xl font-bold">Our Mailbox:</h4>
                <p className="text-lg font-medium">mayankmehar4@gmail.com</p>
              </div>
            </div>
            <div className="w-96 flex items-center justify-between gap-16 p-4 shadow-md rounded-md hover:shadow-xl transition ease-linear duration-300">
              <i className="fa-solid fa-phone text-2xl text-blue-700"></i>
              <div className="w-96">
                <h4 className="text-xl font-bold">Our Phone:</h4>
                <p className="text-lg font-medium">91 + 9128102151</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/5">
          <ContactUs />
        </div>
      </div>
    </main>
  );
}

export default Contact;
