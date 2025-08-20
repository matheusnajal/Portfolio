import { motion, useScroll, useSpring, useTransform } from "motion/react";

// 1. Importe todas as imagens que você vai usar no topo do arquivo
import skyImg from "/assets/sky.jpg";
import mountain3Img from "/assets/mountain-3.png";
import planetsImg from "/assets/planets.png";
import mountain2Img from "/assets/mountain-2.png";
import mountain1Img from "/assets/mountain-1.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0  bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            // 2. Use a variável importada dentro da URL
            backgroundImage: `url(${skyImg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${mountain3Img})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planetas */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${planetsImg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${mountain2Img})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${mountain1Img})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;