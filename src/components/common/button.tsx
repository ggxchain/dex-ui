export function Button(props: Readonly<React.ComponentPropsWithRef<'button'>>) {
    return (
        <button {...props} className={`disabled:opacity-70  text-GGx-yellow text-sm py-[16px] grow-on-hover md:w-[242px] w-32 border-GGx-yellow rounded-[4px] border ${props.className ?? ''}`} />
    );
}
