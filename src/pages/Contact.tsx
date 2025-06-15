
import SiteHeader from "@/components/SiteHeader";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Contact = () => (
  <main className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <PageBanner
      title="Contact J.C. Amerine"
      subtitle="For media, events, or reader messages—let’s connect"
      imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Laptop and desk for contact"
    />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="max-w-xl w-full mx-auto animate-fade-in px-6">
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
    <NewsletterSection />
    <Footer />
    <ScrollToTopButton />
  </main>
);

export default Contact;

