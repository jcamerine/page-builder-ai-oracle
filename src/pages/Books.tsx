
import SiteHeader from "@/components/SiteHeader";
import PageBanner from "@/components/PageBanner";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ExternalLink } from "lucide-react";

// Editable book data (update titles, subtitles, etc. here)
const BOOKS = [
  {
    title: "The Man and Armor",
    subtitle: "Book 1 • Out Now",
    coverText: "Coming Soon",
    description:
      "A reluctant knight and a secretive princess must unite to save a realm consumed by ancient magic and warring hearts.",
    amazonLabel: "Buy on Amazon",
    amazonUrl: "https://www.amazon.com/",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    title: "Burning Embers",
    subtitle: "Book 2 • Pre-Order",
    coverText: "Cover Reveal Soon!",
    description:
      "Three destinies intertwine in a cataclysm of love, betrayal, and fire—pre-order the next chapter of the saga!",
    amazonLabel: "Pre-Order on Amazon",
    amazonUrl: "https://www.amazon.com/",
    goodreadsUrl: "https://www.goodreads.com/",
  },
];

const Books = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <PageBanner
      title="Books by J.C. Amerine"
      subtitle="Epic Fantasy Romance Books • The Aeonaros Saga"
      imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Dire wolf fantasy wolf image"
    />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full px-4 animate-fade-in">
        {BOOKS.map((book, i) => (
          <div
            key={book.title}
            className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-[2/3] w-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-muted-foreground font-semibold text-xl uppercase tracking-wider text-center">
              {book.coverText}
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-center uppercase">{book.title}</h3>
            <span className="text-base text-accent-foreground mb-2 font-semibold uppercase">{book.subtitle}</span>
            <p className="mb-4 text-center text-base text-muted-foreground min-h-[64px] flex items-center justify-center">
              {book.description}
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${book.amazonLabel} (opens in new tab)`}
                className="text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded transition shadow flex gap-2 items-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
              >
                {book.amazonLabel}
                <ExternalLink size={18} className="ml-1" aria-hidden="true" />
              </a>
              <a
                href={book.goodreadsUrl}
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
        ))}
      </section>
      <div className="mt-16 flex flex-col items-center gap-6">
        <h2 className="text-xl font-serif mb-2 uppercase">Connect with J.C. Amerine</h2>
        <SocialIcons large />
      </div>
    </div>
    <NewsletterSection />
    <Footer />
    <ScrollToTopButton />
  </main>
);

export default Books;
