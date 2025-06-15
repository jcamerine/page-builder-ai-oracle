
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const NewsletterSignupPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "You're in!",
      description:
        "Thank you for signing up. You'll get exclusive free chapters and updates from J.C. Amerine.",
    });
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl mt-16 mb-12 bg-card rounded-lg shadow-lg p-8 animate-fade-in">
        <h1 className="text-4xl font-bold font-serif mb-2 text-center">Join the Newsletter</h1>
        <p className="text-muted-foreground text-lg mb-6 text-center">
          Get <span className="font-medium text-primary">free sample chapters</span> from upcoming works, news updates, behind-the-scenes stories, and more delivered straight to your inbox!
        </p>
        <form onSubmit={handleSignup} className="flex flex-col md:flex-row items-center gap-4 justify-center w-full">
          <Input
            type="email"
            placeholder="Your email"
            required
            aria-label="Email"
            value={email}
            disabled={submitted}
            className="max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="default"
            disabled={submitted || !email}
            className="w-full md:w-auto"
          >
            Get Free Chapters
          </Button>
        </form>
        {submitted && (
          <div className="text-green-600 font-medium text-center mt-4">Success! Welcome to the reader family 🎉</div>
        )}
        <div className="text-center mt-8">
          <Link to="/" className="text-primary underline hover:no-underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NewsletterSignupPage;
