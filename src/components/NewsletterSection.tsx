import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive exclusive updates, news, and special sneak peeks from J.C. Amerine.",
    });
    setEmail("");
  }

  return (
    <section id="news" className="container mx-auto py-16 px-4 max-w-2xl animate-fade-in">
      <h2 className="text-2xl font-semibold font-playfair text-center mb-2 uppercase tracking-wider">Join The Newsletter</h2>
      <p className="mb-6 text-center text-muted-foreground">
        Be first to read new chapters, get world lore, and receive book news direct to your inbox!
      </p>
      <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your email"
          required
          value={email}
          aria-label="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-xs"
          disabled={submitted}
        />
        <Button
          type="submit"
          variant="default"
          disabled={submitted || !email}
        >
          Subscribe
        </Button>
      </form>
      {submitted && (
        <div className="text-green-600 font-medium text-center mt-4">Subscribed! Thank you for joining.</div>
      )}
    </section>
  );
};
export default NewsletterSection;
