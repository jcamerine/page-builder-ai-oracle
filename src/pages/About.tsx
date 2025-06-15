import SiteHeader from "@/components/SiteHeader";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const About = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <PageBanner
      title="About J.C. Amerine"
      subtitle="Discover the journey and worldbuilding of an epic fantasy author"
      imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
      imageAlt="Foggy mountain vista"
    />
    <div className="flex flex-col items-center justify-center flex-1 py-10">
      <section className="max-w-2xl w-full mx-auto animate-fade-in px-6">
        <div className="text-lg text-muted-foreground mb-4 text-center">
          Journey through epic worlds with an author who weaves adventure, emotion, and magic into every tale.
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow-inner font-serif text-base md:text-lg text-secondary-foreground">
          <p>
            Inspired by storytellers like Sarah J. Maas, Leigh Bardugo, and Holly Black, J.C. Amerine crafts epic fantasy romance
            that blends vivid worldbuilding, slow-burn romance, and fierce heroines. Expect tales of forbidden heartbeats, brooding knights,
            found family, and ancient magic colliding with destiny.
          </p>
          <p className="mt-3 font-medium text-accent-foreground text-center">
            More about J.C. Amerine, her inspirations, and her journey, coming soon!
          </p>
        </div>
      </section>
    </div>
    <NewsletterSection />
    <Footer />
    <ScrollToTopButton />
  </main>
);

export default About;
