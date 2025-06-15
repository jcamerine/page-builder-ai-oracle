
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
      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg shadow hover:bg-primary/90 font-semibold text-lg"
    >
      Pre-Order on Amazon
    </a>
  </section>
);
export default PreOrderSection;
