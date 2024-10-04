//Reusable pagination btn component
interface PaginationBtnProps {
  next?: boolean;
  onRightClick?: () => void; // right click handler
  onLeftClick?: () => void; // left click handler
}

const PaginationBtn = ({
  next,
  onRightClick,
  onLeftClick,
}: PaginationBtnProps) => {
  return (
    <>
      {next ? (
        // Use the right click handler

        <button
          onClick={onRightClick}
          className="border border-gray-300 w-8 h-8 rounded-md flex items-center justify-center"
        >
          <i
            className="fa fa-chevron-right"
            style={{ color: "#AEBBC8", fontSize: "0.9rem" }}
          ></i>
        </button>
      ) : (
        // Use the left click handler

        <button
          onClick={onLeftClick}
          className="border border-gray-300 w-8 h-8 rounded-md flex items-center justify-center"
        >
          <i
            className="fa fa-chevron-left"
            style={{ color: "#AEBBC8", fontSize: "0.9rem" }}
          ></i>
        </button>
      )}
    </>
  );
};

export default PaginationBtn;
