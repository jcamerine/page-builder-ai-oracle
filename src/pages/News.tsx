
import SiteHeader from "@/components/SiteHeader";

const News = () => (
  <main className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="max-w-2xl w-full mx-auto animate-fade-in px-6">
        <h1 className="text-4xl font-serif font-bold mb-6 text-center">Latest News</h1>
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
  </main>
);

export default News;
