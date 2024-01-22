import { ReactNode } from "react";
import Close from "./close";

interface ModalProps {
    isOpen: boolean;
    modalTitle: string;
    children: ReactNode;
    onClose: () => void;
}

export default function Modal({ children, isOpen, onClose, modalTitle }: Readonly<ModalProps>) {

    return (
        <div className={`fixed ${isOpen ? "" : "hidden"} left-0 top-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none`} aria-modal="true">
            <div className="relative flex left-1/2 top-1/2 md:w-2/5 w-4/5 h-fit -translate-x-1/2 -translate-y-1/2">
                <div className="secondary-gradient rounded-2xl w-full h-full flex flex-col">
                    <div className="bg-bg-gr-2 rounded-t-2xl w-full h-fit flex justify-between items-center p-2">
                        <h1 className="text-2xl text-center w-full font-semibold">{modalTitle}</h1>
                        <div className="w-1/12 flex flex-col items-end">
                            <button onClick={onClose} className="w-8 h-8 grow-on-hover">
                                <Close />
                            </button>
                        </div>
                    </div>
                    <div className="p-2 pt-5 w-full">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}
