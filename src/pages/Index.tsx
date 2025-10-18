import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Zap, Shield, Clock, CheckCircle, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-6 border border-accent/30">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">AI-Powered System Monitoring</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            System Performance & Health Troubleshooting
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Submit system issues instantly and get AI-powered diagnostics, automated ticket management, 
            and intelligent troubleshooting assistance.
          </p>
          
          <Button 
            onClick={() => navigate("/submit")}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
          >
            Submit an Issue
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Real-Time Monitoring</h3>
            <p className="text-muted-foreground">
              Track system performance issues in real-time with instant ticket generation and status updates.
            </p>
          </Card>

          <Card className="p-6 border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">AI-Powered Analysis</h3>
            <p className="text-muted-foreground">
              Leverage artificial intelligence to diagnose issues, suggest solutions, and prioritize tickets automatically.
            </p>
          </Card>

          <Card className="p-6 border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Fast Resolution</h3>
            <p className="text-muted-foreground">
              Automated workflows and intelligent routing ensure your issues are addressed quickly and efficiently.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How It Works
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Submit Your Issue</h3>
                <p className="text-muted-foreground">
                  Fill out the form with system details, issue description, and severity level. Attach relevant files if needed.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Instant Ticket Generation</h3>
                <p className="text-muted-foreground">
                  Receive a unique ticket ID immediately. Your issue is logged and stored securely for tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI Analysis & Resolution</h3>
                <p className="text-muted-foreground">
                  Our AI system analyzes your issue, suggests solutions, and routes it to the appropriate team for quick resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto p-8 border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">98%</p>
              <p className="text-muted-foreground">Issue Resolution Rate</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">&lt;2h</p>
              <p className="text-muted-foreground">Average Response Time</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">10k+</p>
              <p className="text-muted-foreground">Tickets Resolved</p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto p-12 text-center border-0 shadow-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to resolve your system issues?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with AI-powered troubleshooting in seconds
          </p>
          <Button 
            onClick={() => navigate("/submit")}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Submit Your First Ticket
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
