
import SocialIcons from "@/components/SocialIcons";

const fantasyImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80";

const AuthorHero = () => (
  <header
    className="relative w-full h-[60vh] flex items-center justify-center bg-center bg-cover"
    style={{
      backgroundImage: `linear-gradient(rgba(10,10,25,.60),rgba(10,10,30,.60)),url('${fantasyImage}')`,
    }}
  >
    <div className="flex flex-col items-center justify-center text-center text-white drop-shadow-lg space-y-4">
      <span className="uppercase tracking-widest text-sm md:text-lg font-semibold">Epic Fantasy Romance</span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif animate-fade-in">
        Aeonaros
      </h1>
      <p className="max-w-lg md:max-w-xl text-lg md:text-2xl mt-4 font-medium">
        Discover the worlds of love and war, magic and secrets. New Readers and Epic Romance fans welcome.
      </p>
      {/* Removed SocialIcons from top banner */}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/70" aria-hidden="true" />
  </header>
);

export default AuthorHero;
