import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroVideos } from '../data/homeData';
import Header from '../../../components/common/Header';

function Hero({ isHeaderCompact }) {
  const heroVideoRefs = useRef([]);
  const [activeHeroVideo, setActiveHeroVideo] = useState(0);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  const playNextHeroVideo = () => {
    setActiveHeroVideo((current) => (current + 1) % heroVideos.length);
  };

  const prepareNextHeroVideo = (event) => {
    const currentVideo = event.currentTarget;

    if (!currentVideo.duration || currentVideo.duration - currentVideo.currentTime > 8) {
      return;
    }

    const nextVideo = heroVideoRefs.current[(activeHeroVideo + 1) % heroVideos.length];

    if (nextVideo && nextVideo.preload !== 'auto') {
      nextVideo.preload = 'auto';
      nextVideo.load();
    }
  };

  useEffect(() => {
    if (!isVideoEnabled) {
      return;
    }

    heroVideoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index === activeHeroVideo) {
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }

      video.pause();
    });
  }, [activeHeroVideo, isVideoEnabled]);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isWideScreen = window.matchMedia('(min-width: 900px)').matches;

    if (!isWideScreen || shouldReduceMotion || connection?.saveData) {
      return undefined;
    }

    const enableVideo = () => setIsVideoEnabled(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(enableVideo, { timeout: 2600 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enableVideo, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__video-wrap" aria-hidden="true">
        <img
          className="hero__poster"
          src="/hero-poster.jpg"
          alt=""
          width="1920"
          height="1080"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        {isVideoEnabled && (
          heroVideos.map((videoSrc, index) => (
            <video
              key={videoSrc}
              ref={(node) => {
                heroVideoRefs.current[index] = node;
              }}
              className={`hero__video${index === activeHeroVideo ? ' hero__video--active' : ''}`}
              autoPlay={index === 0}
              muted
              playsInline
              preload={index === activeHeroVideo ? 'auto' : 'none'}
              onTimeUpdate={index === activeHeroVideo ? prepareNextHeroVideo : undefined}
              onEnded={index === activeHeroVideo ? playNextHeroVideo : undefined}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ))
        )}
      </div>

      <h1 className="sr-only">Hatip İnşaat Antalya konut ve Catta Villa projeleri</h1>

      <Header isCompact={isHeaderCompact} />

      <a className="hero__scroll-cue" href="#catta-intro" aria-label="Keşfet">
        <span>Keşfet</span>
        <ChevronDown size={34} />
      </a>
    </section>
  );
}

export default Hero;
