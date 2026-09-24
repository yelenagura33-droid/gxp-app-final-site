import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <video
        ref={videoRef}
        src="/videos/masterclass-teaser.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full rounded-2xl object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
        aria-label={isMuted ? "Включить звук" : "Выключить звук"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}