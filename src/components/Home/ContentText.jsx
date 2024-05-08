import { Center, Float, Text3D, useCursor } from "@react-three/drei";
import React, { useState } from "react";
import font from "../../json/font2.json";
import { useLocation } from "wouter";

const ContentText = ({}) => {
  const [hoveredItems, setHoveredItems] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [hoveredPointer, setHoveredPointer] = useState(false);
  useCursor(hoveredPointer);

  const handlePointerEnter = (index) => {
    setHoveredItems((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = true;
      return updatedHovered;
    });
  };

  const handlePointerLeave = (index) => {
    setHoveredItems((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = false;
      return updatedHovered;
    });
  };

  const [location, setLocation] = useLocation();

  return (
    <>
      <Center position={[0, 1.6, 0.2]}>
        <Text3D font={font} position={[0, 0, 0]} size={0.2}>
          {`Name Ismail \n Age 19`}
          <meshMatcapMaterial color={"beige"} />
        </Text3D>
      </Center>
      {[0, 1, 2, 3].map((index) => (
        <Float
          key={index}
          speed={1.2}
          onClick={() => {
            const page =
              index === 0
                ? "about"
                : index === 1
                  ? "blog"
                  : index === 2
                    ? "photos"
                    : "random";

            setLocation(page);
          }}
          onPointerEnter={() => handlePointerEnter(index)}
          onPointerLeave={() => handlePointerLeave(index)}
          onPointerOver={() => setHoveredPointer(true)}
          onPointerOut={() => setHoveredPointer(false)}
        >
          <Text3D
            letterSpacing={0.02}
            position={[
              index === 0 ? 0.5 : index === 1 ? -1.5 : index === 2 ? 1 : -2,
              index < 2 ? 1 : 0,
              0,
            ]}
            font={font}
            size={hoveredItems[index] ? 0.35 : 0.18}
          >
            {index === 0
              ? "About Me"
              : index === 1
                ? "Blog"
                : index === 2
                  ? "Photos"
                  : "Random"}
            <meshMatcapMaterial
              color={
                index === 0
                  ? "#A78682"
                  : index === 1
                    ? "#FAC748"
                    : index === 2
                      ? "#00CC99"
                      : "#FC9F5B"
              }
            />
          </Text3D>
        </Float>
      ))}
    </>
  );
};

export default ContentText;
