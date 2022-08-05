import { useState, CSSProperties } from "react";
import BounceLoader from "react-spinners/ClipLoader";


function Loading() {
  let [loading, setLoading] = useState(true);

  return (
    <div>
      <BounceLoader size={100} color="#000" loading={loading} number={3} />
    </div>
  );
}

export default Loading