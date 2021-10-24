import useIsMounted from "../../hooks/useIsMonted";
import { useRouter } from "next/router";

const PhotosDinamic = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) {
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
