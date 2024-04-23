export function Button(props: Readonly<React.ComponentPropsWithRef<"button">>) {
	const { type = "button", ...otherProps } = props;

	return (
		<button
			type={type}
			{...props}
			className={`text-GGx-yellow text-sm py-[16px] grow-on-hover md:w-[242px] w-32 border-GGx-yellow rounded-[4px] border ${
				props.className ?? ""
			}`}
		/>
	);
}

export function YellowButton(
	props: Readonly<React.ComponentPropsWithRef<"button">>,
) {
	const { type = "button", ...otherProps } = props;

	return (
		<button
			type={type}
			{...props}
			className={`bg-GGx-yellow text-GGx-black2 text-sm py-[16px] grow-on-hover md:w-[242px] w-32 rounded-[4px] ${
				props.className ?? ""
			}`}
		/>
	);
}

export function GrayButton(
	props: Readonly<React.ComponentPropsWithRef<"button">>,
) {
	const { type = "button", ...otherProps } = props;

	return (
		<button
			type={type}
			{...props}
			className={`text-GGx-gray text-sm py-[16px] grow-on-hover md:w-[242px] w-32 rounded-[4px] border border-GGx-gray ${
				props.className ?? ""
			}`}
		/>
	);
}
