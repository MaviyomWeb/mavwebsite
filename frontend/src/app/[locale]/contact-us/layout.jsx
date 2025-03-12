import ContactHeader from "./components/ContactHeader";



function ContactLayout({ children }) {

  

  return (
    <main className="relative isolate w-full z-0 bg-white    pb-5 md:pb-10">
      <article>
        <ContactHeader />
        {children}
      </article>
    </main>
  );
}

export default ContactLayout;
