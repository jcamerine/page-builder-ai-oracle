import SiteHeader from "@/components/SiteHeader";
import SocialIcons from "@/components/SocialIcons";

const Books = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <div className="flex flex-col items-center flex-1 py-10">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center drop-shadow">Books by J.C. Amerine</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4 animate-fade-in">
        {/* Book 1 */}
        <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200">
          <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl uppercase tracking-wider">
            Coming Soon
          </div>
          <h3 className="text-2xl font-semibold mb-1 text-center">The Knight&apos;s Facade</h3>
          <span className="text-base text-accent-foreground mb-2 font-semibold">Book 1 • Out Now</span>
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
          <h3 className="text-2xl font-semibold mb-1 text-center">A Trio of Flames</h3>
          <span className="text-base text-accent-foreground mb-2 font-semibold">Book 2 • Pre-Order</span>
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
        <h2 className="text-xl font-serif mb-2">Connect with J.C. Amerine</h2>
        <SocialIcons large />
      </div>
    </div>
  </main>
);

export default Books;
