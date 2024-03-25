import { Center, Float, Text3D } from "@react-three/drei";
import React, { useState } from "react";
import font from "../../font2.json";

const ContentText = ({ darkMode }) => {
  const [hovered, setHovered] = useState([false, false, false, false]); // Initialize state for each component

  const handlePointerEnter = (index) => {
    setHovered((prevHovered) => {
      const updatedHovered = [...prevHovered]; // Copy the previous state
      updatedHovered[index] = true; // Update the hover state for the specified component
      return updatedHovered;
    });
  };

  const handlePointerLeave = (index) => {
    setHovered((prevHovered) => {
      const updatedHovered = [...prevHovered]; // Copy the previous state
      updatedHovered[index] = false; // Update the hover state for the specified component
      return updatedHovered;
    });
  };

  return (
    <>
      <Center position={[0, 1.6, 0.2]}>
        <Text3D font={font} position={[0, 0, 0]} size={0.2}>
          {`Name Ismail \n Age: 19`}
          <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
        </Text3D>
      </Center>
      {[0, 1, 2, 3].map((index) => (
        <Float
          key={index}
          speed={1.8}
          onPointerEnter={() => handlePointerEnter(index)}
          onPointerLeave={() => handlePointerLeave(index)}
          // onClick={() => }
        >
          <Text3D
            letterSpacing={0.02}
            position={[
              index === 0 ? 0.5 : index === 1 ? -1.5 : index === 2 ? 1 : -2,
              index < 2 ? 1 : 0,
              0,
            ]}
            font={font}
            size={hovered[index] ? 0.35 : 0.18}
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
