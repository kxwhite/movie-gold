import DunePartTwo from "../assets/comingSoon/Dune.webp";
import SpiderManBeyondTheSpiderVerse from "../assets/comingSoon/Spiderman_Beyond.webp";
import Alien from "../assets/comingSoon/alien.webp";
import Borderlands from "../assets/comingSoon/borderlands.webp";
import Furiosa from "../assets/comingSoon/furiosa.webp";
import CaptainAmericaBraveNewWorld from "../assets/comingSoon/captainamerica.webp";
import DeadpoolWolverine from "../assets/comingSoon/deadpoolwolverine.webp";
import SleepingDogs from "../assets/comingSoon/sleepingdogs.webp";
import WickedPartOne from "../assets/comingSoon/wicked.webp";
import KungFuPanda4 from "../assets/comingSoon/kungfupanda.webp";
import Elio from "../assets/comingSoon/elio.webp";
import InsideOut2 from "../assets/comingSoon/insideout.webp";
import lovedeathrobots from "../assets/homeAssets/Love,Death,andRobots.jpg";
import blackmirror from "../assets/homeAssets/black-mirror-gq.webp";
import Dark from "../assets/homeAssets/DarkNetflixPosterEnglish.jpeg";
import Nightcrawler from "../assets/homeAssets/Nightcrawlerfilm.jpeg";
import TheSinner from "../assets/homeAssets/thesinner.jpg";
import YourName from "../assets/homeAssets/yourname.jpg";
import QueensGambit from "../assets/homeAssets/queensgambit.jpg";
import BojackHorseman from "../assets/homeAssets/bojackhorseman.jpg";
import StrangerThings from "../assets/homeAssets/strangerthings.jpg";
import TuckAndDaleVsEvil from "../assets/homeAssets/tuckeranddalevsevil.jpg";
import Lupin from "../assets/homeAssets/Lupin_Cover.webp";
import CowboyBebop from "../assets/homeAssets/cowboybebop.jpg";
import SpiderMan from "../assets/homeAssets/spiderman.jpg";
import District9 from "../assets/homeAssets/district9.jpg";
import Nimona from "../assets/categoriesAssets/newFilmsImages/nimona.jpeg";
import GOTG from "../assets/categoriesAssets/newFilmsImages/guadiansofthegalaxy.jpg";
import Spiderman from "../assets/categoriesAssets/newFilmsImages/spiderman2.jpg";
import TheOutlaws from "../assets/categoriesAssets/newFilmsImages/theoutlaws.jpg";
import NimonaScene from "../assets/categoriesAssets/newFilmsImages/scenes/nimonaScene.jpg";
import GOTGScene from "../assets/categoriesAssets/newFilmsImages/scenes/guardiansofthegalaxyScene.jpg";
import SpidermanScene from "../assets/categoriesAssets/newFilmsImages/scenes/spidermanScene.jpg";
import TheOutlawsScene from "../assets/categoriesAssets/newFilmsImages/scenes/theOutlawsScene.jpg";

const homeMovieData = [
  Dark, Nightcrawler, TheSinner, YourName, QueensGambit,
  BojackHorseman, StrangerThings, TuckAndDaleVsEvil, Lupin,
  CowboyBebop, SpiderMan, District9
];

const upcomingMovies = [
  { name: "Dune: Part Two", image: DunePartTwo, releaseDate: "15 Mar 2024" },
  { name: "Spider-Man: Beyond the Spider-Verse", image: SpiderManBeyondTheSpiderVerse, releaseDate: "29 Mar 2024" },
  { name: "Alien: Romulus", image: Alien, releaseDate: "16 Aug 2024" },
  { name: "Borderlands", image: Borderlands, releaseDate: "8 Aug 2024" },
  { name: "Furiosa", image: Furiosa, releaseDate: "24 May 2024" },
  { name: "Captain America: Brave New World", image: CaptainAmericaBraveNewWorld, releaseDate: "14 Feb 2025" },
  { name: "Deadpool & Wolverine", image: DeadpoolWolverine, releaseDate: "25 Jul 2024" },
  { name: "Sleeping Dogs", image: SleepingDogs, releaseDate: "21 Jun 2024" },
  { name: "Wicked: Part One", image: WickedPartOne, releaseDate: "28 Nov 2024" },
  { name: "Kung Fu Panda 4", image: KungFuPanda4, releaseDate: "28 Mar 2024" },
  { name: "Elio", image: Elio, releaseDate: "13 Jun 2025" },
  { name: "Inside Out 2", image: InsideOut2, releaseDate: "14 Jun 2024" }
];

const categoryMovies = [
  { image: Nimona, sceneImage: NimonaScene, title: "Nimona", rating: "PG", releaseYear: "2023", duration: "1h 41m"},
  { image: GOTG, sceneImage: GOTGScene, title: "Guardians of the Galaxy", rating: "PG-13", releaseYear: "2014", duration: "2h 2m" },
  { image: Spiderman, sceneImage: SpidermanScene, title: "Spider-Man: Into the Spider-Verse", rating: "PG", releaseYear: "2018", duration: "1h 56m" },
  { image: TheOutlaws, sceneImage: TheOutlawsScene, title: "The Out-Laws", rating: "15", releaseYear: "2023", duration: "1h 35m" },
];

export { homeMovieData, lovedeathrobots, blackmirror, upcomingMovies, categoryMovies, Nightcrawler };
