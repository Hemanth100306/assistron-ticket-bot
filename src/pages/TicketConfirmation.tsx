import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Copy, Home } from "lucide-react";
import { toast } from "sonner";

const TicketConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketData = location.state;

  if (!ticketData) {
    navigate("/submit");
    return null;
  }

  const copyTicketId = () => {
    navigator.clipboard.writeText(ticketData.ticketId);
    toast.success("Ticket ID copied to clipboard");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "text-green-600 bg-green-50 border-green-200";
      case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "high": return "text-orange-600 bg-orange-50 border-orange-200";
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-4">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Ticket Submitted Successfully!
          </h1>
          <p className="text-muted-foreground">
            Your issue has been logged and our AI system is already analyzing it
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Ticket ID</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyTicketId}
                className="h-8 px-2"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-2xl font-mono font-bold text-primary">
              {ticketData.ticketId}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/50 rounded-lg p-4 border">
              <p className="text-sm text-muted-foreground mb-1">Status</p>
              <p className="font-semibold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                {ticketData.status}
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border">
              <p className="text-sm text-muted-foreground mb-1">Severity</p>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(ticketData.severity)}`}>
                {ticketData.severity.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="bg-background/50 rounded-lg p-4 border space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">System</p>
              <p className="font-medium text-foreground">{ticketData.system_name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Issue Summary</p>
              <p className="font-medium text-foreground">{ticketData.issue_summary}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Reported At</p>
              <p className="font-medium text-foreground">
                {new Date(ticketData.reportedTime).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>You'll receive a confirmation email at <strong>{ticketData.user_email}</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Our AI system will analyze your issue and suggest solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>A support specialist will review and respond within 24 hours</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/submit")}
              variant="outline"
              className="flex-1"
            >
              Submit Another Ticket
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="flex-1 bg-gradient-to-r from-primary to-accent"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Home
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TicketConfirmation;
