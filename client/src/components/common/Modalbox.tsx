import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";

interface ModalType {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  width: string;
}

export function Modalbox(props: ModalType) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div
      onMouseDown={() => props.onClose()}
      className="fixed w-full h-full inset-0 z-[20] flex justify-center items-center backdrop-blur-sm bg-black/15"
    >
      <div
        onMouseDown={(event) => event.stopPropagation()}
        style={{ width: props.width }}
        className="bg-white p-[20px] border shadow-lg rounded-[6px]"
      >
        <div className="flex flex-row mb-[10px] justify-between">
          <p className="font-[700]">{props.title}</p>
          <button
            className="hover:scale-[1.3] transition duration-200"
            onClick={() => props.onClose()}
          >
            <Icon
              path={mdiClose}
              size={0.8}
              horizontal
              vertical
              rotate={90}
              color="black"
            />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}
