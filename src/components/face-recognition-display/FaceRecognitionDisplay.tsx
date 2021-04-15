import DragAndDrop from "components/drag-and-drop/DragAndDrop";
import ImageError from "components/image-error/ImageError";
import Loader from "components/loader/loader";
import { useAppSelector } from "redux/hooks";
import "./face-recognition-display.scss";

const FaceRecognitionDisplay = () => {
  const faceRecogState = useAppSelector(
    ({ faceRecog }) => faceRecog.faceRecogState
  );
  

  return (
    <div className={`center bounding-container ${faceRecogState.status !== "success" ? "border" : ""}`}>
      {faceRecogState.status === "idle" ? (
        <DragAndDrop />
      ) : faceRecogState.status === "loading" ? (
        <Loader />
      ) : faceRecogState.status === "success" && faceRecogState.data ? (
        <div className="mt2 absolute">
          <img
            id=""
            alt="search result"
            src= {faceRecogState.data.imageLink}
            className = "image-display"
          />
          {
            faceRecogState.data.dataSet.map(({region_info: {bounding_box: { top_row, right_col, bottom_row, left_col }}},index) => {
              let styles = {
                inset: `${top_row * 100}% ${100 - right_col * 100}% ${100 - bottom_row * 100}% ${left_col * 100}%`
              }
              return <div key={index} className="bounding-box" style={styles} ></div>
            })
          }

        </div>
      ) : (
        <ImageError />
      )}
    </div>
  );
};

export default FaceRecognitionDisplay;
