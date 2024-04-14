"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { cn } from "@/lib/utils";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { AspectRatio } from "@/ui/aspect-ratio";

export default function BackgroundBigCircles() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: any, refresh = true) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      // await loadSlim(engine);

      await loadBasic(engine, false);
      await loadEmittersShapeSquare(engine, false);
      await loadEmittersPlugin(engine, false);

      await engine.addPreset("bigCircles", options, false);
      await engine.addPreset("big-circles", options, refresh);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: 120,
      background: {
        color: "#fff",
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
            "#EB586E",
            "#9952CF",
          ],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.4, max: 0.8 },
        },
        size: {
          value: { min: 20, max: 100 },
        },
        move: {
          enable: true,
          angle: {
            value: 70,
            offset: 0,
          },
          speed: {
            min: 10,
            max: 20,
          },
          direction: "top",
          outModes: {
            default: "destroy",
            bottom: "none",
          },
        },
      },
      detectRetina: true,
      emitters: {
        position: {
          x: 50,
          y: 150,
        },
        rate: {
          delay: 0.2,
          quantity: 3,
        },
        size: {
          width: 100,
          height: 50,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <>
        <AspectRatio ratio={16 / 9}>
          <Particles
            className={cn("h-full w-full")}
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </AspectRatio>
      </>
    );
  }

  return <></>;
}
