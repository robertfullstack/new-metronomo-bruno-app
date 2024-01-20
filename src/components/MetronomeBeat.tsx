"use client";
import BeatLevel from "@/types/beat-level";

interface Props {
  beatLevel: BeatLevel;
  onBeatLevelChanged: (beatLevel: BeatLevel) => void;
  active: boolean;
}

export default function MetronomeBeat({ beatLevel, onBeatLevelChanged, active }: Props) {
  const clickHandler = () => {
    const newLevel = (beatLevel === BeatLevel.STRONG ? BeatLevel.WEAK : beatLevel + 1) as BeatLevel;
    onBeatLevelChanged(newLevel);
  };

  return (
    <div
      className={`${active ? "bg-cyan-400" : "bg-transparent"
        } border border-cyan-600 rounded py-2 px-1 md:px-2 md:py-3 
      flex flex-col gap-1 items-center justify-end 
      w-[85px] md:w-[100px] h-[120px] md:h-[120px]
      cursor-pointer`}
      onClick={clickHandler}
    >
      {Array.from(Array(beatLevel + 1).keys()).map((l) => (
        <span key={l} className={`${active ? "bg-gray-50" : "bg-purple-800"} rounded w-full h-4 block`}></span>
      ))}
    </div>
  );
}
