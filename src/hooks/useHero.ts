import { useCallback, useEffect, useState } from "react";
let currentIndex = 0;
const text = [
  "Front End Developer",
  "React Developer",
  "UI Developer",
  "Freelancer",
];

const sleepTime = 100;

const useHero = () => {
  const [writer, setWriter] = useState("");
  const sleep = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const writerHandeler = useCallback(async () => {
    while (true) {
      const wordIndex = text[currentIndex];

      for (let i = 0; i < wordIndex.length; i++) {
        setWriter(wordIndex.substring(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = wordIndex.length; i > 0; i--) {
        setWriter(wordIndex.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (currentIndex === text.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    }
  }, []);

  useEffect(() => {
    writerHandeler();
  }, [writerHandeler]);

  return { writer };
};

export default useHero;
