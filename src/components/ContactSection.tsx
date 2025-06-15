
import SocialIcons from "./SocialIcons";

const ContactSection = () => (
  <section id="contact" className="container mx-auto py-16 px-4 max-w-2xl animate-fade-in">
    <h2 className="text-2xl font-semibold font-serif text-center mb-2">Contact</h2>
    <p className="mb-6 text-center text-muted-foreground">
      For event bookings, media inquiries, or to share your thoughts, connect with J.C. Amerine below.
    </p>
    <div className="flex flex-col items-center gap-3">
      <a
        href="mailto:hello@jcamerine.com"
        className="text-primary font-semibold hover:underline"
      >
        hello@jcamerine.com
      </a>
      <SocialIcons />
    </div>
  </section>
);

export default ContactSection;
