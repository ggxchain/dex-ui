import Logo from "@/components/common/logo";

export default function MobileInfo() {
	return (
		<div className="flex items-center justify-center flex-col h-screen">
			<Logo alt="GGX" className="mx-auto" width={100} height={100} />
			<div className="justify-center">
				<p className={"text-GGx-light"}>
					Please use desktop browser to review all information on DEX
				</p>
			</div>
		</div>
	);
}
