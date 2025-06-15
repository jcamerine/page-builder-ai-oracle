import SiteHeader from "@/components/SiteHeader";
import PageBanner from "@/components/PageBanner";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

const Books = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <PageBanner
      title="Books by J.C. Amerine"
      subtitle="Epic Fantasy Romance Books • The Aeonaros Saga"
      imageUrl="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Mountain landscape for books collection"
    />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4 animate-fade-in">
        {/* Book 1 */}
        <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200">
          <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl uppercase tracking-wider">
            Coming Soon
          </div>
          <h3 className="text-2xl font-semibold mb-1 text-center uppercase">The Knight&apos;s Facade</h3>
          <span className="text-base text-accent-foreground mb-2 font-semibold uppercase">Book 1 • Out Now</span>
          <p className="mb-4 text-center text-base text-muted-foreground">
            A reluctant knight and a secretive princess must unite to save a realm consumed by ancient magic and warring hearts.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded transition shadow flex gap-2 items-center"
            >
              Buy on Amazon
            </a>
            <a
              href="https://www.goodreads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent bg-secondary hover:bg-accent px-4 py-2 rounded transition shadow flex gap-2 items-center"
            >
              Goodreads
            </a>
          </div>
        </div>
        {/* Book 2 */}
        <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200">
          <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl uppercase tracking-wider">
            Cover Reveal Soon!
          </div>
          <h3 className="text-2xl font-semibold mb-1 text-center uppercase">A Trio of Flames</h3>
          <span className="text-base text-accent-foreground mb-2 font-semibold uppercase">Book 2 • Pre-Order</span>
          <p className="mb-4 text-center text-base text-muted-foreground">
            Three destinies intertwine in a cataclysm of love, betrayal, and fire—pre-order the next chapter of the saga!
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded transition shadow flex gap-2 items-center"
            >
              Pre-Order on Amazon
            </a>
            <a
              href="https://www.goodreads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent bg-secondary hover:bg-accent px-4 py-2 rounded transition shadow flex gap-2 items-center"
            >
              Goodreads
            </a>
          </div>
        </div>
      </section>
      <div className="mt-16 flex flex-col items-center gap-6">
        <h2 className="text-xl font-serif mb-2 uppercase">Connect with J.C. Amerine</h2>
        <SocialIcons large />
      </div>
    </div>
    <NewsletterSection />
    <Footer />
  </main>
);

export default Books;
