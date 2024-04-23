import type { ReactNode } from "react";
import Close from "./close";

interface ModalProps {
	isOpen: boolean;
	modalTitle: string;
	children: ReactNode;
	onClose: () => void;
}

export default function Modal({
	children,
	isOpen,
	onClose,
	modalTitle,
}: Readonly<ModalProps>) {
	return (
		<div
			data-testid="modal"
			style={{ display: isOpen ? "block" : "none" }}
			className={
				"fixed left-0 top-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none"
			}
			aria-modal="true"
		>
			<div className="relative flex left-1/2 top-1/2 md:w-2/5 w-4/5 h-fit -translate-x-1/2 -translate-y-1/2">
				<div className="bg-GGx-light rounded-2xl px-[26px] py-[22px] w-full h-full flex flex-col">
					<div className="rounded-t-2xl w-full h-fit flex justify-between items-center">
						<h1 className="text-3xl text-GGx-dark text-left w-full">
							{modalTitle}
						</h1>
						<div className="w-1/12 flex flex-col items-end">
							<button
								type="button"
								onClick={onClose}
								className="w-[42px] h-[42px] grow-on-hover"
							>
								<Close />
							</button>
						</div>
					</div>
					<div className="pt-5 w-full">{children}</div>
				</div>
			</div>
		</div>
	);
}
