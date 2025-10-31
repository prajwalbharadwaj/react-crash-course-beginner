import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto"
};

const Spinners = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={override}
    />
  );
};

export default Spinners;
