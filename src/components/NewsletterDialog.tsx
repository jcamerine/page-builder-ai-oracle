
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const NewsletterDialog = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Open popup on initial mount, but only on Home page
  useEffect(() => {
    setTimeout(() => setOpen(true), 700); // slight delay for smoother UX
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail("");
      setOpen(false);
      toast({
        title: "You're on the list!",
        description: "You'll get the first two chapters and updates about J.C. Amerine's upcoming books.",
      });
    }, 900);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-full animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Get Early Access</DialogTitle>
          <DialogDescription className="mb-2 text-base">
            Enter your email to receive exclusive updates and <b>the first two chapters</b> of the next release before anyone else!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Your email"
            required
            disabled={submitting}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full"
            autoFocus
          />
          <DialogFooter>
            <Button
              type="submit"
              disabled={submitting || !email}
              className="w-full"
            >
              {submitting ? "Signing you up..." : "Get Early Chapters"}
            </Button>
          </DialogFooter>
        </form>
        <div className="text-xs text-muted-foreground text-center mt-2">
          No spam. Unsubscribe anytime.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
