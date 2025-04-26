import { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';
// Removed direct import of public asset

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-80" 
          style={{
            backgroundImage: `url('/rob-hanson-portfolio/backgrounds/contact-header.png')`, // Use base path for public assets
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container-custom relative z-10">
          <h1 className="mb-6 text-primary-300 text-center font-serif">Contact Me</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Interested in discussing AI alignment, behavior analysis, or potential collaboration? I'd love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="bg-gray-50 p-8 rounded-xl h-full">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-100 p-2 rounded-full mt-1">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600">ro.jhanson@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-100 p-2 rounded-full mt-1">
                        <MessageSquare className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Additional Info</h3>
                        <p className="text-gray-600">Please allow 1-2 business days for a response. I'm most interested in discussions related to AI safety, alignment research, and potential collaboration opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 order-1 md:order-2">
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                    
                    {submitSuccess && (
                      <p className="text-green-600 mt-4 animate-fadeIn">
                        Your message has been sent successfully! I'll be in touch soon.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
