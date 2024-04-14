"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type CustomEventArgs,
  DestroyType,
  EventType,
  type IParticlesOptions,
  type IRangeValue,
  type ISourceOptions,
  MoveDirection,
  OutMode,
  type Particle,
  type RangeValue,
  type RecursivePartial,
  StartValueType,
  rgbToHsl,
  setRangeValue,
  stringToRgb,
} from "@tsparticles/engine";
//import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { cn } from "@/lib/utils";
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { AspectRatio } from "@/ui/aspect-ratio";
import { loadDestroyUpdater } from "@tsparticles/updater-destroy";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadLifeUpdater } from "@tsparticles/updater-life";
import { loadLineShape } from "@tsparticles/shape-line";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadRotateUpdater } from "@tsparticles/updater-rotate";
//import { loadSoundsPlugin } from "@tsparticles/plugin-sounds";
import { loadStrokeColorUpdater } from "@tsparticles/updater-stroke-color";
export default function BackgroundLinks() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      // await loadBasic(engine);
      await loadBasic(engine, false);
      // await loadEmittersPlugin(engine, false);
      // await loadEmittersShapeSquare(engine, false);
      // //await loadSoundsPlugin(engine, false);
      // await loadLineShape(engine, false);
      // await loadRotateUpdater(engine, false);
      // await loadDestroyUpdater(engine, false);
      // await loadLifeUpdater(engine, false);
      // await loadStrokeColorUpdater(engine, false);
      await loadParticlesLinksInteraction(engine, false);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: any = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      background: {
        color: "#000000",
      },
      particles: {
        number: {
          value: 100,
        },
        links: {
          distance: 150,
          enable: true,
        },
        move: {
          enable: true,
        },
        size: {
          value: 1,
        },
        shape: {
          type: "circle",
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
