 import * as motion from "motion/react-client";
 import { FiCornerRightDown } from "react-icons/fi";


export default function Games() {
  return (
   <>
 <div className="h-auto  w-[63%] border-t flex flex-col justify-center mx-auto items-center bg-black text-white" >
<h1 className="text-center  mt-4 text-4xl text-amber-300 font-bold flex items-end gap-2 ">
  Interesting Games <FiCornerRightDown />
</h1>

        <div style={container}>
      {food.map(([imgSrc, hueA, hueB], i) => (
        <Card i={i} emoji={imgSrc} hueA={hueA} hueB={hueB} key={imgSrc} />
      ))}
    </div>
 </div>
   </>
  );
}

function Card({ emoji, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img src={emoji} alt="food" style={imageStyle} />
      </motion.div>
    </motion.div>
  );
}

// Animation variants
const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Convert hue value to HSL
const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container = {
  margin: "10px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
  height: "90vh",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  width: 300,
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "black",
  border: "2px solid white",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

const imageStyle = {
  width: "400px",
  height: "296px",
  borderRadius: 20,
  objectFit: "contain",
};

/**
 * ==============   Data   ================
 */

const food = [
  ["./images/kbd.png", 34, 10],
  ["./images/cricket.jpg", 20, 40],
  
];
