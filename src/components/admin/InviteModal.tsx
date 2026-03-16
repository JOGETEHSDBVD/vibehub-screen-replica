import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InviteModal = ({ open, onOpenChange }: Props) => {
  const [copied, setCopied] = useState(false);
  const inviteLink = `${window.location.origin}/?invite=true`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    toast({ title: "Link copied!" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans">Invite Members</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">Share this link to invite new members to VibeHub.</p>
        <div className="flex gap-2">
          <Input value={inviteLink} readOnly className="flex-1" />
          <Button variant="outline" size="icon" onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
