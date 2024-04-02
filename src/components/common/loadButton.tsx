import type { ReactNode } from "react";
import { Button } from "./button";
import Spinner from "./spinner";

interface ButtonProps {
	children: ReactNode;
	className?: string;
	loading?: boolean;
	disabled?: boolean;
	onClick: () => void;
}

export default function LoadingButton(props: Readonly<ButtonProps>) {
	const loading = props.loading ?? false;
	const className = props.className ?? "";
	const disabled = props.disabled ?? false;

	return (
		<Button
			className={`relative ${className}`}
			onClick={props.onClick}
			disabled={disabled}
		>
			<div
				className={`absolute left-1 top-1/2 h-1/2 -translate-y-1/2 ${
					loading ? "" : "hidden"
				}`}
			>
				<Spinner />
			</div>
			{props.children}
		</Button>
	);
}
