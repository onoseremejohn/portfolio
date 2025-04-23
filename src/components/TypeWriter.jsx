import TypewriterEffect from "typewriter-effect";
const TypeWriter = ({ str1, str2 }) => {
  return (
    <TypewriterEffect
      options={{ loop: true }}
      onInit={(str) =>
        str
          .typeString(str1)
          .pauseFor(2000)
          .deleteChars(str1.length - 2)
          .typeString(str2)
          .pauseFor(800)
          .start()
      }
    />
  );
};

export default TypeWriter;
