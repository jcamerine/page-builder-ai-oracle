
import SocialIcons from "@/components/SocialIcons";
import { ExternalLink } from "lucide-react";

const BooksSection = () => (
  <section id="aeonaros" className="container mx-auto py-16 px-4 max-w-5xl animate-fade-in">
    <h2 className="text-3xl font-bold font-playfair mb-8 uppercase tracking-wider">Aeonaros</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Book 1 */}
      <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl">
          {/* Placeholder: Book 1 cover */}
          Coming Soon
        </div>
        <h3 className="text-2xl font-semibold mb-1">The Knight&apos;s Facade</h3>
        <span className="text-base text-accent-foreground mb-2 font-semibold">Book 1 • Out Now</span>
        <p className="mb-4 text-center text-base text-muted-foreground">
          A reluctant knight and a secretive princess must unite to save a realm consumed by ancient magic and warring hearts.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy on Amazon (opens in new tab)"
            className="text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded transition shadow flex gap-2 items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
          >
            Buy on Amazon
            <ExternalLink size={18} className="ml-1" aria-hidden="true" />
          </a>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Goodreads (opens in new tab)"
            className="text-accent bg-secondary hover:bg-accent px-4 py-2 rounded transition shadow flex gap-2 items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
          >
            Goodreads
            <ExternalLink size={18} className="ml-1" aria-hidden="true" />
          </a>
        </div>
      </div>
      {/* Book 2 */}
      <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl">
          {/* Placeholder: Book 2 cover */}
          Cover Reveal Soon!
        </div>
        <h3 className="text-2xl font-semibold mb-1">A Trio of Flames</h3>
        <span className="text-base text-accent-foreground mb-2 font-semibold">Book 2 • Pre-Order</span>
        <p className="mb-4 text-center text-base text-muted-foreground">
          Three destinies intertwine in a cataclysm of love, betrayal, and fire—pre-order the next chapter of the saga!
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pre-Order on Amazon (opens in new tab)"
            className="text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded transition shadow flex gap-2 items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
          >
            Pre-Order on Amazon
            <ExternalLink size={18} className="ml-1" aria-hidden="true" />
          </a>
          <a
            href="https://www.goodreads.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Goodreads (opens in new tab)"
            className="text-accent bg-secondary hover:bg-accent px-4 py-2 rounded transition shadow flex gap-2 items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
          >
            Goodreads
            <ExternalLink size={18} className="ml-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BooksSection;

