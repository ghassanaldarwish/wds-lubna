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

import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { AspectRatio } from "@/ui/aspect-ratio";

export default function BackgroundFire() {
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

      await loadBasic(engine);
      await loadExternalPushInteraction(engine, false);
      await engine.addPreset("fire", options, refresh);
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
      fpsLimit: 40,
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
          },
        },
        color: {
          value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 6,
          random: false,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },
      background: {
        image: "radial-gradient(#4a0000, #000)",
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
