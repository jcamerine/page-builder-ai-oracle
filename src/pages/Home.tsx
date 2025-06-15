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

      {/* CTA for newsletter signup */}
      <div className="flex items-center justify-center bg-secondary py-4 shadow-sm border-b border-border">
        <a
          href="/newsletter"
          className="bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-3 text-lg shadow hover:bg-primary/90 transition-colors"
        >
          Get Free Chapters &amp; Updates
        </a>
      </div>

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

      {/* Home Section (subheading) */}
      <section className="container mx-auto py-14 px-4 max-w-4xl animate-fade-in">
        <h2 className="text-3xl font-bold font-serif mb-4">Home</h2>
        <p className="text-base text-muted-foreground">
          Welcome to the official website of J.C. Amerine, author of epic fantasy romance novels. Explore worlds of love and war, magic and secrets, and dive into the Aeonaros saga and other captivating stories.
        </p>
      </section>

      <AboutSection />

      {/* Books Section */}
      <section id="books" className="container mx-auto py-16 px-4 max-w-4xl animate-fade-in">
        <h2 className="text-3xl font-bold font-serif mb-4">Books</h2>
        <BooksSection />
      </section>

      {/* Aeonaros saga section */}
      <section id="aeonaros" className="container mx-auto py-16 px-4 max-w-4xl animate-fade-in">
        <h2 className="text-3xl font-bold font-serif mb-4">Aeonaros</h2>
        {/* The BooksSection already renders with heading "Aeonaros" */}
        {/* If you want to add details about the Aeonaros saga here, you can add them later. */}
      </section>

      {/* Store Section */}
      <section id="store" className="container mx-auto py-16 px-4 max-w-4xl animate-fade-in">
        <h2 className="text-3xl font-bold font-serif mb-4">Store</h2>
        <p className="text-base text-muted-foreground">Coming soon: Shop for books, merchandise, and more.</p>
      </section>

      {/* News section - replaces NewsletterSection */}
      <section id="news" className="container mx-auto py-16 px-4 max-w-2xl animate-fade-in">
        <h2 className="text-2xl font-semibold font-serif text-center mb-2">News</h2>
        <NewsletterSection />
      </section>

      <ContactSection />
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved. | jcamerine.com | jcamerine.com.au
      </footer>
    </main>
  );
};
export default Home;
