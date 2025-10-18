import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, AlertCircle } from "lucide-react";

const SubmitTicket = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    system_name: "",
    user_name: "",
    user_email: "",
    issue_summary: "",
    issue_details: "",
    severity: "",
  });
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.system_name || !formData.user_name || !formData.user_email || 
        !formData.issue_summary || !formData.issue_details || !formData.severity) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Generate ticket ID
    const ticketId = `TKT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const reportedTime = new Date().toISOString();

    // Simulate API call (replace with actual n8n webhook)
    setTimeout(() => {
      toast.success("Ticket submitted successfully!");
      navigate("/ticket-confirmation", { 
        state: { 
          ticketId, 
          status: "Logged",
          reportedTime,
          ...formData 
        } 
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Submit System Issue
            </h1>
            <p className="text-muted-foreground text-lg">
              Report your system performance or health issues and get AI-powered assistance
            </p>
          </div>

          <Card className="p-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system_name" className="text-foreground font-medium">
                    System Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="system_name"
                    name="system_name"
                    value={formData.system_name}
                    onChange={handleInputChange}
                    placeholder="e.g., Production Server A"
                    className="bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity" className="text-foreground font-medium">
                    Severity Level <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.severity} onValueChange={(value) => setFormData({ ...formData, severity: value })}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">🟢 Low</SelectItem>
                      <SelectItem value="medium">🟡 Medium</SelectItem>
                      <SelectItem value="high">🟠 High</SelectItem>
                      <SelectItem value="critical">🔴 Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="user_name" className="text-foreground font-medium">
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user_email" className="text-foreground font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-background/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue_summary" className="text-foreground font-medium">
                  Issue Summary <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="issue_summary"
                  name="issue_summary"
                  value={formData.issue_summary}
                  onChange={handleInputChange}
                  placeholder="Brief description of the issue"
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue_details" className="text-foreground font-medium">
                  Detailed Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="issue_details"
                  name="issue_details"
                  value={formData.issue_details}
                  onChange={handleInputChange}
                  placeholder="Provide detailed information about the issue, including steps to reproduce, error messages, and any relevant context..."
                  className="min-h-[150px] bg-background/50 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments" className="text-foreground font-medium">
                  Attachments (Optional)
                </Label>
                <div className="relative">
                  <Input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="bg-background/50 cursor-pointer"
                  />
                  <Upload className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
                {attachments.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    {attachments.length} file(s) selected
                  </p>
                )}
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  Your ticket will be logged immediately and processed by our AI-powered system. 
                  You'll receive a unique ticket ID and status updates via email.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitTicket;
