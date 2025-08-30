import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Upload as UploadIcon, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [rightsConfirmed, setRightsConfirmed] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !language || !rightsConfirmed) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and confirm your rights.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "🎉 Content Uploaded Successfully!",
      description: "Your creativity is now shared with the world!",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setLanguage("");
    setRightsConfirmed(false);
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-creative-gradient-light opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-creative-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Options
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-primary" />
              <Sparkles className="w-6 h-6 text-creative-purple" />
            </div>
            <h1 className="text-4xl font-bold bg-creative-gradient bg-clip-text text-transparent mb-4">
              Share Your Creation With the World
            </h1>
            <p className="text-lg text-muted-foreground">
              💜 No matter how you've chosen to express yourself — through words, voice, video, photo, or documents — this is where your idea takes shape. 🎶
            </p>
          </div>

          {/* Upload Form */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent shadow-creative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-semibold flex items-center">
                  🎼 Add a title that represents your work
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your creative title..."
                  className="border-2 focus:border-primary"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-semibold flex items-center">
                  🌟 Write a description (so others can connect with your vibe)
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell the world about your creation..."
                  className="border-2 focus:border-primary min-h-[100px]"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-base font-semibold flex items-center">
                  💌 Share your content (text, audio, video, photo, or file)
                </Label>
                <div className="border-2 border-dashed border-accent rounded-lg p-8 text-center hover:border-primary transition-colors duration-300">
                  <UploadIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="*/*"
                  />
                  <Label htmlFor="file" className="cursor-pointer">
                    <Button variant="creative-outline" type="button" asChild>
                      <span>Choose File</span>
                    </Button>
                  </Label>
                  {file && (
                    <p className="mt-2 text-sm text-primary font-medium">
                      Selected: {file.name}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    Or drag and drop your file here
                  </p>
                </div>
              </div>

              {/* Language Selection */}
              <div className="space-y-2">
                <Label htmlFor="language" className="text-base font-semibold flex items-center">
                  🌍 Pick a language so your art reaches the right audience
                </Label>
                <Select value={language} onValueChange={setLanguage} required>
                  <SelectTrigger className="border-2 focus:border-primary">
                    <SelectValue placeholder="Select language..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="it">Italian</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                    <SelectItem value="ko">Korean</SelectItem>
                    <SelectItem value="zh">Chinese</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rights Confirmation */}
              <div className="space-y-4">
                <Label className="text-base font-semibold flex items-center">
                  🔒 Confirm your release rights to keep your work safe & respected
                </Label>
                <div className="flex items-start space-x-3 p-4 bg-creative-gradient-light rounded-lg">
                  <Checkbox
                    id="rights"
                    checked={rightsConfirmed}
                    onCheckedChange={(checked) => setRightsConfirmed(checked === true)}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="rights" className="text-sm leading-relaxed cursor-pointer">
                    I confirm that I have the rights to share this content and understand that by uploading, 
                    I'm making it available to the community while retaining my intellectual property rights. 
                    I agree to the platform's terms of use and community guidelines.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="creative" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={!rightsConfirmed}
                >
                  🚀 Upload Content & Let Your Creativity Shine
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;