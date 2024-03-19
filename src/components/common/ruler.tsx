export default function Ruler() {
    return (
        <div className="relative border-t-[0.5px] border-GGx-yellow mt-2">
            <div className="absolute left-0 w-[4px] h-full text-xl" style={{ content: "•", verticalAlign: 'middle' }}></div>
        </div>
    )
}
