
import SiteHeader from "@/components/SiteHeader";

const Contact = () => (
  <main className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="max-w-xl w-full mx-auto animate-fade-in px-6">
        <h1 className="text-4xl font-serif font-bold mb-6 text-center uppercase">Contact J.C. Amerine</h1>
        <div className="bg-secondary p-6 rounded-xl shadow-inner text-base md:text-lg text-secondary-foreground text-center">
          <p>
            For event bookings, media inquiries, or reader messages, reach out below. J.C. Amerine loves hearing from fellow adventurers!
          </p>
          <div className="mt-4">
            <a
              href="mailto:hello@jcamerine.com"
              className="text-primary font-semibold underline underline-offset-4 break-all"
            >
              hello@jcamerine.com
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            {/* Social links can be added here in future if desired */}
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default Contact;

