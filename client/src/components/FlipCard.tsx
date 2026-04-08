import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  name: string;
  title: string;
  backText: string;
  backTextSecondary?: string;
}

export default function FlipCard({
  frontImage,
  name,
  title,
  backText,
  backTextSecondary,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-96 w-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={frontImage}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-serif font-bold">{name}</h3>
            <p className="text-sm text-amber-200">{title}</p>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-green-700 to-green-900 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-white text-lg font-serif font-semibold mb-4 leading-relaxed">
            {backText}
          </p>
          {backTextSecondary && (
            <p className="text-amber-200 text-sm font-light italic">
              {backTextSecondary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
