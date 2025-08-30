import { ContributionCard } from "@/components/ContributionCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PenTool, Mic, Video, Camera, Upload, Music, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/music-hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  const contributionOptions = [
    {
      icon: PenTool,
      title: "Write",
      description: "Share your lyrics, stories, poems, or creative notes with the world",
      emoji: "✍️",
    },
    {
      icon: Mic,
      title: "Sing",
      description: "Record your voice, upload audio, or share your musical performances",
      emoji: "🎤",
    },
    {
      icon: Video,
      title: "Show",
      description: "Create video performances, tutorials, or jam sessions to inspire others",
      emoji: "🎥",
    },
    {
      icon: Camera,
      title: "Snap",
      description: "Capture moments, behind-the-scenes photos, or visual inspiration",
      emoji: "📸",
    },
    {
      icon: Upload,
      title: "Upload",
      description: "Share documents, sheet music, scores, or any creative files",
      emoji: "📄",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-creative-gradient-light opacity-40"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-creative-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Music className="w-12 h-12 text-primary animate-bounce" />
            <Sparkles className="w-8 h-8 text-creative-purple animate-pulse" />
            <Heart className="w-10 h-10 text-pink-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-creative-gradient bg-clip-text text-transparent mb-6">
            Express Your Music, Your Way
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            💜 Choose how you'd like to share your creativity with the world 🎶
          </p>
          
          <div className="inline-block p-4 bg-creative-gradient-light rounded-2xl shadow-creative">
            <p className="text-lg font-semibold text-foreground">
              ✨ Your art, your vibe, your story. Let's begin! ✨
            </p>
          </div>
        </div>

        {/* Contribution Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contributionOptions.map((option) => (
            <ContributionCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              description={option.description}
              emoji={option.emoji}
              onClick={() => navigate("/upload")}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="creative" 
            size="lg" 
            onClick={() => navigate("/upload")}
            className="text-xl px-12 py-6 shadow-glow"
          >
            🚀 Start Creating Now
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Join thousands of creators sharing their passion worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
