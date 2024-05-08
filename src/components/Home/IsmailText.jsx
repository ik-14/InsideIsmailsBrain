import { Center, Text3D } from "@react-three/drei";
import React from "react";
import font from "../../json/font2.json";

export const IsmailText = ({ modelHovered }) => {
  return (
    <>
      {!modelHovered && (
        <Center position={[0, 1, 0]}>
          <Text3D font={font} size={0.19}>
            {`Hover me`}
            <meshMatcapMaterial color={ "beige"} />
          </Text3D>
        </Center>
      )}
    </>
  );
};
