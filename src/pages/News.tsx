
import SiteHeader from "@/components/SiteHeader";
import SlideshowBanner from "@/components/SlideshowBanner";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

const newsSlides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sunbeams in forest for news",
    title: "Latest News",
    subtitle: "Stay in the loop for launches, events, exclusives, and more",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Upcoming events",
    title: "Events & Releases",
    subtitle: "Exciting happenings will be announced here",
  },
];

const News = () => (
  <main className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <SlideshowBanner slides={newsSlides} />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="max-w-2xl w-full mx-auto animate-fade-in px-6">
        <div className="bg-secondary p-6 rounded-xl shadow-inner text-base md:text-lg text-secondary-foreground text-center">
          <p>
            Stay updated on book launches, signing events, bonus chapters, and special fan-only releases.
          </p>
          <p className="mt-3 font-medium text-accent-foreground">
            Updates and announcements will appear here soon. Don&apos;t miss the next adventure!
          </p>
        </div>
      </section>
    </div>
    <NewsletterSection />
    <Footer />
  </main>
);

export default News;
