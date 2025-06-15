
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
          <span className="font-extrabold text-xl tracking-tight uppercase">
            J.C. Amerine
          </span>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#about" className="hover:text-primary hover:underline">About</a></li>
            <li><a href="#books" className="hover:text-primary hover:underline">The Aeonaros Saga</a></li>
            <li><a href="#preorder" className="hover:text-primary hover:underline">Pre-Order</a></li>
            <li><a href="#newsletter" className="hover:text-primary hover:underline">Newsletter</a></li>
            <li><a href="#contact" className="hover:text-primary hover:underline">Contact</a></li>
          </ul>
          <SocialIcons />
        </div>
      </nav>
      <AboutSection />
      <BooksSection />
      <PreOrderSection />
      <NewsletterSection />
      <ContactSection />
      <footer className="bg-background mt-12 py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} J.C. Amerine. All Rights Reserved. | jcamerine.com | jcamerine.com.au
      </footer>
    </main>
  );
};
export default Home;
