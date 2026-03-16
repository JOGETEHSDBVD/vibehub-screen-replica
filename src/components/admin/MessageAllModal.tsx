import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MessageAllModal = ({ open, onOpenChange }: Props) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    toast({ title: "Coming soon", description: "Mass messaging will be available in a future update." });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans">Message All Members</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <Textarea placeholder="Message body" value={body} onChange={(e) => setBody(e.target.value)} rows={4} />
          <Button onClick={handleSend} className="w-full">Send Message</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageAllModal;
