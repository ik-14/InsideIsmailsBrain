import { Center, Text3D } from "@react-three/drei";
import React from "react";
import font from "../../font2.json";

export const IsmailText = ({ modelHovered, darkMode }) => {
  return (
    <>
      {!modelHovered && (
        <Center position={[0, 1, 0]}>
          <Text3D font={font} size={0.19}>
            {`Hover me`}
            <meshMatcapMaterial color={darkMode ? "beige" : "#7F7A73"} />
          </Text3D>
        </Center>
      )}
    </>
  );
};
