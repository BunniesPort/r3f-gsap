import { OrbitControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const Experience = () => {
  const ref = useRef();
  const t1 = useRef();

  const scroll = useScroll();

  useFrame(() => {
    t1.current.seek(scroll.offset * t1.current.duration());
  });

  useLayoutEffect(() => {
    t1.current = gsap.timeline();

    t1.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 3, z: 0 },
      0
    );

    t1.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 3, z: 0 },
      1
    );
  });
  return (
    <>
      <OrbitControls enableZoom={false} />
      <mesh rotation={[0, -Math.PI / 3, 0]} ref={ref}>
        <boxBufferGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  );
};
