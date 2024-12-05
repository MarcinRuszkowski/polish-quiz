import { FaDog, FaCat, FaHorse } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import {
  GiLion,
  GiSheep,
  GiSeatedMouse,
  GiChicken,
  GiFox,
  GiElephant,
  GiWolfHead,
  GiBearFace,
  GiTigerHead,
  GiDeer,
  GiDuck,
  GiOwl,
  GiGoose,
  GiGoat,
  GiMonkey,
} from "react-icons/gi";
import { FaFish, FaFrog, FaCow } from "react-icons/fa6";
import { LuTurtle, LuRabbit, LuPiggyBank } from "react-icons/lu";
import { VscSnake } from "react-icons/vsc";

export const iconAnswerMap = (answer: string) => {
  switch (answer.toLowerCase()) {
    case "cat":
      return <FaCat className="text-6xl" />;
    case "dog":
      return <FaDog className="text-6xl" />;
    case "bird":
      return <PiBirdFill className="text-6xl" />;
    case "lion":
      return <GiLion className="text-6xl" />;
    case "fish":
      return <FaFish className="text-6xl" />;
    case "turtle":
      return <LuTurtle className="text-6xl" />;
    case "horse":
      return <FaHorse className="text-6xl" />;
    case "frog":
      return <FaFrog className="text-6xl" />;
    case "rabbit":
      return <LuRabbit className="text-6xl" />;
    case "sheep":
      return <GiSheep className="text-6xl" />;
    case "cow":
      return <FaCow className="text-6xl" />;
    case "mouse":
      return <GiSeatedMouse className="text-6xl" />;
    case "chicken":
      return <GiChicken className="text-6xl" />;
    case "snake":
      return <VscSnake className="text-6xl" />;
    case "fox":
      return <GiFox className="text-6xl" />;
    case "elephant":
      return <GiElephant className="text-6xl" />;
    case "wolf":
      return <GiWolfHead className="text-6xl" />;
    case "bear":
      return <GiBearFace className="text-6xl" />;
    case "tiger":
      return <GiTigerHead className="text-6xl" />;
    case "deer":
      return <GiDeer className="text-6xl" />;
    case "duck":
      return <GiDuck className="text-6xl" />;
    case "owl":
      return <GiOwl className="text-6xl" />;
    case "goose":
      return <GiGoose className="text-6xl" />;
    case "goat":
      return <GiGoat className="text-6xl" />;
    case "pig":
      return <LuPiggyBank className="text-6xl" />;
    case "monkey":
      return <GiMonkey className="text-6xl" />;
    default:
      return null;
  }
};
