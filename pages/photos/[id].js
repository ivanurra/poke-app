import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PhotosDinamic = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);
  if (!loaded) {
    return null;
  }
  console.log({ router }, router.query.id);
  return (
    <div>
      <p>Photos Dinamic</p>
    </div>
  );
};

export default PhotosDinamic;
