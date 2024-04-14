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
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { cn } from "@/lib/utils";
//import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { AspectRatio } from "@/ui/aspect-ratio";

export default function BackgroundRainbowFountains() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const baseEmitterConfig = (direction: any, position: any) => {
    return {
      direction,
      rate: {
        quantity: 15,
        delay: 0.3,
      },
      size: {
        width: 0,
        height: 0,
      },
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            offset: {
              min: -1.4,
              max: 1.4,
            },
            speed: 2,
            sync: false,
          },
          l: {
            enable: true,
            offset: {
              min: 40,
              max: 60,
            },
            speed: 0,
            sync: false,
          },
        },
      },
      position,
    };
  };
  const options: any = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      background: {
        color: "#000",
      },
      particles: {
        angle: {
          value: 0,
          offset: 30,
        },
        move: {
          enable: true,
          outModes: {
            top: "none",
            default: "destroy",
          },
          gravity: {
            enable: true,
          },
          speed: { min: 5, max: 20 },
          decay: 0.01,
        },
        number: {
          value: 0,
          limit: 300,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: ["circle", "square", "triangle"],
        },
        size: {
          value: { min: 2, max: 5 },
          animation: {
            count: 1,
            startValue: "min",
            enable: true,
            speed: 5,
            sync: true,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      emitters: [
        baseEmitterConfig("top-right", { x: 0, y: 30 }),
        baseEmitterConfig("top-left", { x: 100, y: 30 }),
      ],
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
