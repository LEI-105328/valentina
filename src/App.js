import React, { useState, useEffect } from 'react';
import { Heart, Video, Mail, Image, Music } from 'lucide-react';

export default function ValentineWebsite() {
  const [screen, setScreen] = useState('intro');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [introStep, setIntroStep] = useState(0);
  const [bouquetCount, setBouquetCount] = useState(1);

  // ========================================
  // 🎨 CUSTOMIZE YOUR CONTENT HERE
  // ========================================

  const CUSTOMIZATION = {
    // Your Names
    yourName: 'A tua pikena fih',
    herName: 'Fih fofihnha',

    // URLs & Links
    videoUrl:
      'https://drive.google.com/file/d/10fGaWqcv87cI-8bWAPX2rsLtuTfrtZJF/view?usp=drive_link', // YouTube, Vimeo, or any video link
    photoGalleryUrl: 'https://photos.google.com/YOUR_ALBUM', // Google Photos, Instagram, or photo gallery
    playlistUrl:
      'https://open.spotify.com/track/5q4LPkKyt5Kl6ixKehzNEX?si=c3faf72e817c4363T', // Spotify, Apple Music, or YouTube Music

    // Background Image (leave empty for gradient)
    backgroundImage:
      'https://github.com/lovesulei/valentine-ask/blob/main/heart-bg.jpg?raw=true',

    // Optional Decorative Images/GIFs
    decorations: {
      topLeft: 'https://i.imgur.com/aaQUKVa.png', // Floating decoration (top left)
      topRight: 'https://i.imgur.com/0YGHp3n.png', // Floating decoration (top right)
      bottom: '', // Floating decoration (bottom)
      mainHeart:
        'https://static.vecteezy.com/system/resources/thumbnails/055/608/097/small/8-bit-heart-icon-png.png', // Replace the bouncing heart on question screen
      letterHeader: '', // Image at top of letter
      secondTopLeft: 'https://pbs.twimg.com/media/HBEryTMXEAI--mA.jpg',
      secondTopRight:
        'https://media.tenor.com/RiZpodi6JD0AAAAM/fast-cat-cat-excited.gif', // New cat GIF
      yaytext:
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyODk4NzIyMWo3MWlrMGk3N3FjdG8xNGdjbDRxMGg0cThsYXV5OWZrNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lsJCkIKV6AT28/200.gif',
      flowerBouquet: 'https://i.imgur.com/nTFlkqv.png',
    },

    // Button Images/GIFs (optional - shows above button text)
    buttonImages: {
      video:
        'https://images.vexels.com/media/users/3/328721/isolated/preview/90d74860d004b31d0190f320d247ee3a-pixel-camera-icon.png',
      letter:
        'https://i.pinimg.com/736x/3f/33/88/3f33885735cd0b39bf8c115d6b9940b1.jpg',
      memories:
        'https://img.freepik.com/premium-psd/png-orange-floral-illustration_1033750-3365.jpg?semt=ais_user_personalization&w=740&q=80f',
      playlist:
        'https://png.pngtree.com/png-clipart/20250523/original/pngtree-a-colorful-pixel-art-depiction-of-retro-music-player-with-chiptune-png-image_21060082.png',
    },

    // Your Love Letter
    letter: {
      greeting: `Olá minha fih fofihnha,`,
      paragraphs: [
        `A partir do momento que nos conhecemos, senti logo um à vontade que quase me passou por despercebido. Falava contigo sem muito esforço.`,

        `Esse sentimento de à vontade que sempre existiu foi crescendo. Agora torna-se indispensável. Não imagino uma vida sem a tua presença. Dás me força, coragem e tranquilidade.`,

        `Amo a maneira de seres, e esse teu super poder de me fazer rir mesmo quando sorrir me parece uma missão impossível. Minha princesa wonder woman.`,

        `Este dia 14 de fevereiro (que no fundo é um símbolo de todos os outros), celebro-te a ti e o nosso amor, que só por si é super! :) Consegue sobrepujar tudo e mais alguma coisa. Quando penso que nade me resta, o meu amor por ti prova que ainda tenho tudp`,

        `My love for you grows stronger every day. If there were a scale of love that could reach infinity I´m certain we could break that scale. I'm so grateful to have you in my life, and one day I´m going to be proud to call you my (actual) wife. Amo-te muito minha princesa, minha fih conchinha pikena esposa marida e também minha cogumelinha`,
      ],
      closing: `Um beijinho muito muito muito grande,`,
      signature: `A tua pikena fih.  
      P.S sorry for any typing errors, not 100% sober writing this`,
    },

    // Color Theme (optional - customize the colors)
    theme: {
      primary: 'rose', // rose, pink, red, purple
      useCustomBackground: true, // true to use backgroundImage, false for gradient
    },
  };

  // ========================================
  // END CUSTOMIZATION
  // ========================================

  // Generate confetti
  useEffect(() => {
    if (screen === 'intro') {
      const timeline = [
        { step: 1, delay: 1500 }, // plane arrives
        { step: 2, delay: 2500 }, // flying
        { step: 3, delay: 2500 }, // meeting
        { step: 4, delay: 2000 }, // transform
        { step: 5, delay: 1500 }, // go to question
      ];

      let total = 0;
      timeline.forEach(({ step, delay }) => {
        total += delay;
        setTimeout(() => {
          if (step === 5) {
            setScreen('question');
          } else {
            setIntroStep(step);
          }
        }, total);
      });
    }

    if (screen === 'celebration') {
      const pieces = [];
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
          color: ['#d4a5a5', '#c48b9f', '#b87a9e', '#e6b8c3', '#daa5a5'][
            Math.floor(Math.random() * 5)
          ],
        });
      }
      setConfettiPieces(pieces);
    }
  }, [screen]);

  const handleNoHover = (e) => {
    // Get button position
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Get mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate direction away from mouse
    const deltaX = buttonCenterX - mouseX;
    const deltaY = buttonCenterY - mouseY;

    // Calculate distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Normalize direction and multiply by escape distance
    const escapeDistance = 190; // How far the button should run
    const moveX = (deltaX / distance) * escapeDistance;
    const moveY = (deltaY / distance) * escapeDistance;

    setNoButtonPosition({
      x: noButtonPosition.x + moveX,
      y: noButtonPosition.y + moveY,
    });
  };

  const handleYes = () => {
    setScreen('celebration');
  };

  const handleVideo = () => {
    window.open(CUSTOMIZATION.videoUrl, '_blank');
  };

  const handleFlowers = () => {
    setScreen('flowers');
    setBouquetCount(1);
  };

  const handlePlaylist = () => {
    window.open(CUSTOMIZATION.playlistUrl, '_blank');
  };

  const handleLetter = () => {
    setScreen('letter');
  };

  const handleMoreFlowers = () => {
    setBouquetCount((prev) => prev + 1);
  };

  const getBackgroundStyle = () => {
    if (
      CUSTOMIZATION.theme.useCustomBackground &&
      CUSTOMIZATION.backgroundImage
    ) {
      return {
        backgroundImage: `url(${CUSTOMIZATION.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    return {};
  };

  // Intro Screen
  if (screen === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden relative">
        {/* Character 1 */}
        {introStep >= 0 && (
          <img
            src="https://i.imgur.com/cR6U54A.png"
            className={`absolute bottom-20 left-10 w-40 transition-all duration-1000 
          ${introStep >= 1 ? 'opacity-0 translate-y-10' : 'opacity-100'}`}
          />
        )}

        {/* Plane */}
        {introStep >= 1 && introStep < 3 && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png"
            className={`absolute bottom-32 left-10 w-40 transition-all duration-[2500ms] 
          ${introStep >= 2 ? 'translate-x-[70vw]' : ''}`}
          />
        )}

        {/* Character 2 */}
        {introStep >= 0 && (
          <img
            src="https://i.imgur.com/oGkKS8M.png"
            className={`absolute bottom-20 right-10 w-40 transition-all duration-1000 
          ${introStep >= 3 ? 'opacity-0 translate-y-10' : 'opacity-100'}`}
          />
        )}

        {/* Together Image */}
        {introStep >= 3 && (
          <img
            src="https://i.imgur.com/yHlmjLN.png"
            className={`absolute bottom-20 right-20 w-120 transition-all duration-2000 
          ${introStep >= 4 ? 'opacity-0 scale-75' : 'opacity-100'}`}
          />
        )}

        {/* Final Transformation */}
        {introStep >= 4 && (
          <img
            src="https://i.imgur.com/ylaUvqr.png"
            className="absolute  bottom-20 right-20 w-120 animate-pump duration-5000"
          />
        )}
      </div>
    );
  }

  // Question Screen
  if (screen === 'question') {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden"
        style={getBackgroundStyle()}
      >
        {/* Vintage pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #c48b9f 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        {/* Custom decorative images */}
        {CUSTOMIZATION.decorations.topLeft && (
          <img
            src={CUSTOMIZATION.decorations.topLeft}
            alt=""
            className="absolute top-30 left-10 w-32 h-32 object-contain animate-pump opacity-100"
          />
        )}
        {CUSTOMIZATION.decorations.topRight && (
          <img
            src={CUSTOMIZATION.decorations.topRight}
            alt=""
            className="absolute top-30 right-10 w-40 h-auto object-contain animate-pump opacity-100"
          />
        )}

        <div className="text-center relative z-10">
          {/* Main heart icon or custom image */}
          <div className="mb-8 animate-bounce">
            {CUSTOMIZATION.decorations.mainHeart ? (
              <img
                src={CUSTOMIZATION.decorations.mainHeart}
                alt="heart"
                className="w-32 h-32 mx-auto object-contain"
              />
            ) : (
              <Heart className="w-24 h-24 text-rose-400 mx-auto fill-current drop-shadow-lg" />
            )}
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-rose-600 mb-4"
            style={{
              fontFamily: ' Pixelify Sans, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Will you be my
          </h1>
          <h1
            className="text-6xl md:text-8xl font-bold text-rose-700 mb-12"
            style={{
              fontFamily: ' Pixelify Sans, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Valentine?
          </h1>

          <div className="flex gap-6 justify-center items-center">
            <button
              onClick={handleYes}
              className="transform hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <img
                src="https://github.com/lovesulei/valentine-ask/blob/main/yes.png?raw=true"
                alt="Yes"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
              className="cursor-pointer"
            >
              <img
                src="https://github.com/lovesulei/valentine-ask/blob/main/no.png?raw=true"
                alt="No"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Letter Screen
  if (screen === 'letter') {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden"
        style={getBackgroundStyle()}
      >
        {/* Vintage pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #c48b9f 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        <div className="max-w-2xl bg-white p-8 md:p-12 rounded-lg shadow-2xl relative z-10 border-4 border-rose-200">
          {/* Letter header image */}
          {CUSTOMIZATION.decorations.letterHeader && (
            <div className="mb-6 flex justify-center">
              <img
                src={CUSTOMIZATION.decorations.letterHeader}
                alt=""
                className="w-48 h-48 object-contain"
              />
            </div>
          )}

          <h2
            className="text-4xl font-bold text-rose-600 mb-8 text-center"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            A letter to you, my love
          </h2>

          <div className="prose prose-lg max-w-none">
            <p
              className="text-gray-700 leading-relaxed mb-6 text-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {CUSTOMIZATION.letter.greeting}
            </p>

            {CUSTOMIZATION.letter.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-6 text-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {paragraph}
              </p>
            ))}

            <p
              className="text-gray-700 leading-relaxed mt-8 text-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {CUSTOMIZATION.letter.closing}
              <br />
              {CUSTOMIZATION.letter.signature}
            </p>
          </div>

          <button
            onClick={() => setScreen('celebration')}
            className="mt-8 bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full w-full border-2 border-rose-300 transition-all duration-200"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Back ❤️
          </button>
        </div>
      </div>
    );
  }

  // Flowers Screen
  if (screen === 'flowers') {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden"
        style={getBackgroundStyle()}
      >
        {/* Vintage pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #c48b9f 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-5xl md:text-6xl font-bold text-rose-600 mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Flowers for You 💐
          </h2>

          <p
            className="text-2xl text-rose-500 mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            You deserve all the flowers in the world!
          </p>

          {/* Flower bouquets grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[...Array(bouquetCount)].map((_, index) => (
              <div
                key={index}
                className="animate-zoom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={CUSTOMIZATION.decorations.flowerBouquet}
                  alt="Flower bouquet"
                  className="w-full h-auto rounded-lg shadow-xl border-4 border-rose-200"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <button
              onClick={handleMoreFlowers}
              className="bg-gradient-to-br from-pink-300 to-rose-300 hover:from-pink-400 hover:to-rose-400 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-pink-200"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              🌸 Give Me More Flowers! 🌸
            </button>

            <button
              onClick={() => setScreen('celebration')}
              className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full border-2 border-rose-300 transition-all duration-200"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Back ❤️
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Celebration Screen
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 relative overflow-hidden flex items-center justify-center p-4"
      style={getBackgroundStyle()}
    >
      {/* Vintage pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #c48b9f 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Confetti */}
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full animate-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}

      {/* Custom decorative images */}
      {CUSTOMIZATION.decorations.bottom && (
        <img
          src={CUSTOMIZATION.decorations.bottom}
          alt=""
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 object-contain animate-pulse opacity-70"
        />
      )}

      {/* Sparkles - Left - MADE BIGGER */}
      <div className="absolute top-0 left-20 animate-pump">
        {CUSTOMIZATION.decorations.secondTopLeft && (
          <img
            src={CUSTOMIZATION.decorations.secondTopLeft}
            alt=""
            className="w-48 h-48 mx-auto object-contain"
          />
        )}
      </div>

      {/* Sparkles - Right (Cat GIF) */}
      <div className="absolute top-0 right-20 animate-pump">
        {CUSTOMIZATION.decorations.secondTopRight && (
          <img
            src={CUSTOMIZATION.decorations.secondTopRight}
            alt=""
            className="w-48 h-48 mx-auto object-contain"
          />
        )}
      </div>

      {/* Floating balloons */}
      <div className="absolute bottom-0 left-10 animate-float">
        <div className="w-16 h-20 bg-rose-300 rounded-full border-2 border-rose-400"></div>
        <div className="w-1 h-24 bg-gray-400 mx-auto"></div>
      </div>
      <div className="absolute bottom-0 right-10 animate-float-delayed">
        <div className="w-16 h-20 bg-pink-300 rounded-full border-2 border-pink-400"></div>
        <div className="w-1 h-24 bg-gray-400 mx-auto"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Yay image instead of text */}
        {CUSTOMIZATION.decorations.yaytext ? (
          <img
            src={CUSTOMIZATION.decorations.yaytext}
            alt="Yay"
            className="w-32 md:w-45 h-auto mx-auto mb-4  object-contain"
          />
        ) : (
          <h1
            className="text-6xl md:text-8xl font-bold text-w-600 mb-4 animate-pulse"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.1)',
            }}
          >
            Yay! 🎉
          </h1>
        )}

        <p
          className="text-3xl text-white-500 mb-12"
          style={{
            fontFamily: 'Georgia, serif',
            textShadow:
              '2px 2px 4px black, -2px -2px 4px white, 2px -2px 4px white, -2px 2px 4px white',
          }}
        >
          Let´s f*cking goooooo! You picked the right and ONLY answer princesa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Video Button */}
          <button
            onClick={handleVideo}
            className="bg-gradient-to-br from-purple-300 to-pink-300 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-8 px-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col items-center gap-3 border-2 border-purple-200"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {CUSTOMIZATION.buttonImages.video ? (
              <img
                src={CUSTOMIZATION.buttonImages.video}
                alt="video"
                className="w-20 h-20 object-contain"
              />
            ) : (
              <Video className="w-12 h-12" />
            )}
            <span className="text-xl">Some cherished memories</span>
          </button>

          {/* Letter Button */}
          <button
            onClick={handleLetter}
            className="bg-gradient-to-br from-rose-300 to-red-300 hover:from-rose-400 hover:to-red-400 text-white font-bold py-8 px-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col items-center gap-3 border-2 border-rose-200"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {CUSTOMIZATION.buttonImages.letter ? (
              <img
                src={CUSTOMIZATION.buttonImages.letter}
                alt="letter"
                className="w-20 h-20 object-contain"
              />
            ) : (
              <Mail className="w-12 h-12" />
            )}
            <span className="text-xl">You have mail!</span>
          </button>

          {/* Flowers Button - REPLACES Photo Gallery */}
          <button
            onClick={handleFlowers}
            className="bg-gradient-to-br from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300 text-white font-bold py-8 px-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col items-center gap-3 border-2 border-blue-100"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {CUSTOMIZATION.buttonImages.memories ? (
              <img
                src={CUSTOMIZATION.buttonImages.memories}
                alt="memories"
                className="w-20 h-20 object-contain"
              />
            ) : (
              <Image className="w-12 h-12" />
            )}
            <span className="text-xl">Something Sweet (like you)</span>
          </button>

          {/* Playlist Button */}
          <button
            onClick={handlePlaylist}
            className="bg-gradient-to-br from-green-200 to-teal-200 hover:from-green-300 hover:to-teal-300 text-white font-bold py-8 px-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col items-center gap-3 border-2 border-green-100"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {CUSTOMIZATION.buttonImages.playlist ? (
              <img
                src={CUSTOMIZATION.buttonImages.playlist}
                alt="playlist"
                className="w-20 h-20 object-contain"
              />
            ) : (
              <Music className="w-12 h-12" />
            )}
            <span className="text-xl">Song for us right now</span>
          </button>
        </div>
      </div>

      <style>{`
        img {
          object-fit: contain;
        }

        .intro-text {
         font-family: 'Pixelify Sans', monospace;
          font-size: 64px;
          color: white;
          text-shadow:
          4px 4px 0px #ff4d6d,
          8px 8px 0px rgba(0,0,0,0.25);
        }     
        @keyframes pulse{
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes zoom {
          0% {
            transform: scale(0.2);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes flash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes twinkle-delayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 0.5s;
        }
        .animate-pump {
          animation: pulse 1.5s infinite
        }

        .animate-zoom {
          animation: zoom 1.2s ease-out forwards;
        }
        .flash {
          animation: flash 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
