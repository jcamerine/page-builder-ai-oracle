
import AuthorHero from "@/components/AuthorHero";
import BooksSection from "@/components/BooksSection";
import AboutSection from "@/components/AboutSection";
import PreOrderSection from "@/components/PreOrderSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import SocialIcons from "@/components/SocialIcons";

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <AuthorHero />
      <nav className="sticky top-0 z-30 bg-background/90 border-b border-border backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-3">
          <span
            className="font-playfair font-bold text-5xl md:text-6xl tracking-tight text-primary"
            style={{ letterSpacing: "0.04em" }}
          >
            J.C. Amerine
          </span>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#home" className="hover:text-primary hover:underline">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary hover:underline">About</a>
            </li>
            <li>
              <a href="#books" className="hover:text-primary hover:underline">Books</a>
            </li>
            <li>
              <a href="#aeonaros" className="hover:text-primary hover:underline">Aeonaros</a>
            </li>
            <li>
              <a href="#store" className="hover:text-primary hover:underline">Store</a>
            </li>
            <li>
              <a href="#news" className="hover:text-primary hover:underline">News</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary hover:underline">Contact</a>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </nav>
      {/* Add an id="home" anchor for Home navigation */}
      <div id="home"></div>
      <AboutSection />
      {/* "Books" and "Aeonaros" now have separate anchors (Aeonaros is the renamed BooksSection) */}
      <BooksSection />
      {/* Store and News section: create anchor points for navigation, even if not yet implemented */}
      <section id="store" className="container mx-auto py-16 px-4 max-w-4xl animate-fade-in">
        <h2 className="text-3xl font-bold font-serif mb-4">Store</h2>
        <p className="text-base text-muted-foreground">Coming soon: Shop for books, merchandise, and more.</p>
      </section>
      {/* Aeonaros saga section (was "BooksSection") */}
      {/* booksSection component will now use id="aeonaros" */}
      <section id="aeonaros">
        {/* The BooksSection already renders with heading "Aeonaros" */}
      </section>
      {/* News section - replace NewsletterSection */}
      <NewsletterSection />
      <ContactSection />
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved. | jcamerine.com | jcamerine.com.au
      </footer>
    </main>
  );
};
export default Home;
