interface NumberProps {
  num: number;
}
const Number = ({ num }: NumberProps) => {
  const padded = String(num).padStart(2, "0");
  return (
    <div className="flex h-[8.5rem] w-700 flex-col items-center">
      {/* 縦線 */}
      <span className="block h-1000 w-px bg-slate-300"></span>
      {/* 丸 */}
      <div className="top-1000 flex h-700 w-700 items-center justify-center rounded-full border border-slate-300 bg-white">
        <span className="typo-button text-slate-600">{padded}</span>
      </div>
    </div>
  );
};

export default Number;
