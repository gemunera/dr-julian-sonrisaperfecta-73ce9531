import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import testimonialVideo1 from "@/assets/testimonial-video-1.mp4";
import testimonialVideo2 from "@/assets/testimonial-video-2.mp4";
import testimonialVideo3 from "@/assets/testimonial-video-3.mp4";

interface VideoCardProps {
  src: string;
  title: string;
}

const VideoCard = ({ src, title }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Card className="overflow-hidden bg-card shadow-card group">
      {/* Changed aspect ratio to show full person without cropping */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5]">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain bg-black"
          muted={isMuted}
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          poster=""
        />
        
        {/* Overlay with controls */}
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
          {/* Play/Pause button centered */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg transform transition-transform hover:scale-110">
              {isPlaying ? (
                <Pause className="w-7 h-7" />
              ) : (
                <Play className="w-7 h-7 ml-1" />
              )}
            </div>
          </button>
          
          {/* Mute button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10"
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Video title */}
      <div className="p-4">
        <h4 className="font-semibold text-foreground text-center">{title}</h4>
      </div>
    </Card>
  );
};

const VideoTestimonials = () => {
  const { t } = useLanguage();
  
  const videos = [
    {
      src: testimonialVideo1,
      title: t('cases.videoTestimonials.video1')
    },
    {
      src: testimonialVideo2,
      title: t('cases.videoTestimonials.video2')
    },
    {
      src: testimonialVideo3,
      title: t('cases.videoTestimonials.video3')
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-foreground text-center mb-8">
        {t('cases.videoTestimonials.title')}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <VideoCard key={index} src={video.src} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
