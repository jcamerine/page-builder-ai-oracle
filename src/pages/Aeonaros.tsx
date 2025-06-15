
import SiteHeader from "@/components/SiteHeader";

const Aeonaros = () => (
  <main className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <div className="flex flex-col items-center flex-1 py-10">
      <section className="max-w-3xl w-full mx-auto animate-fade-in px-6">
        <div className="bg-secondary p-6 rounded-xl shadow-inner text-base md:text-lg text-secondary-foreground text-center">
          <p>
            Venture into the mythical lands of Aeonaros—a world of warring kingdoms, ancient magic, and forbidden loves. Discover lore, maps, exclusive artwork, and behind-the-scenes peeks at the saga&apos;s creation.
          </p>
        </div>
      </section>
    </div>
  </main>
);

export default Aeonaros;
