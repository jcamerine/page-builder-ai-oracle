
import SiteHeader from "@/components/SiteHeader";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Signed Hardcover (Aeonaros #1)",
    price: "$28.00",
    image: "",
    description: "A signed hardcover edition of The Knight's Facade. Limited stock. Includes exclusive bookmark.",
  },
  {
    title: "Enamel Pin: Aeonaros Sigil",
    price: "$12.00",
    image: "",
    description: "Rep your favorite saga with a beautiful enamel pin—gold finish, double-posted back.",
  },
  {
    title: "World Map Art Print",
    price: "$16.00",
    image: "",
    description: "Full-color 11x17 print. Perfect for framing. Straight from the world of Aeonaros.",
  },
];

const Store = () => (
  <main className="min-h-screen bg-background text-foreground flex flex-col">
    <SiteHeader />
    <div className="flex flex-col items-center flex-1 py-10 px-4">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl animate-fade-in">
        {products.map((item, idx) => (
          <Card key={item.title} className="flex flex-col h-full shadow-md border hover:shadow-lg transition-shadow duration-200">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-lg w-full h-56 object-cover mb-2"
              />
            ) : (
              <div className="rounded-t-lg bg-muted flex items-center justify-center h-56 text-muted-foreground font-semibold text-xl">
                <span>[ Image Coming Soon ]</span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl text-primary tracking-wide mb-1 uppercase">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <div className="font-semibold text-lg text-accent-foreground mb-2">{item.price}</div>
              <div className="text-base text-muted-foreground">{item.description}</div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center text-muted-foreground">
        <p>Want to see exclusive, limited-edition Aeonaros collectibles? More coming soon...</p>
      </div>
    </div>
  </main>
);

export default Store;
