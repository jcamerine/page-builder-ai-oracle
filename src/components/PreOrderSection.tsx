
import { ExternalLink } from "lucide-react";

const PreOrderSection = () => (
  <section id="preorder" className="container mx-auto py-16 px-4 max-w-3xl flex flex-col items-center animate-fade-in">
    <h2 className="text-2xl font-semibold font-serif mb-2 text-center">Pre-Order the Next Adventure</h2>
    <p className="text-lg text-center mb-4 text-muted-foreground max-w-xl">
      Reserve your copy of <span className="font-bold">A Trio of Flames</span> now and be among the first to return to the world of Aeonaros.
    </p>
    <a
      href="https://www.amazon.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pre-Order on Amazon (opens in new tab)"
      className="bg-primary text-white hover:bg-primary/95 active:bg-primary/90 px-8 py-3 rounded-lg shadow hover:bg-primary/90 focus:bg-primary/80 font-semibold text-lg flex items-center gap-2 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
    >
      Pre-Order on Amazon
      <ExternalLink size={20} color="#FFF" aria-hidden="true" />
    </a>
  </section>
);
export default PreOrderSection;

