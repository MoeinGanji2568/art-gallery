import { createPortal } from "react-dom";
import "./Drawer.css";

const Drawer = ({ open, onClose, children }) => {
  return createPortal(
    <>
      <div
        className={`drawer-backdrop ${open ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div
        className={`drawer-container ${open ? "open" : ""}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="drawer-content">{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;
