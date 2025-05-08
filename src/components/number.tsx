interface NumberProps {
  num: number;
}
const Number = ({ num }: NumberProps) => {
  const padded = String(num).padStart(2, "0");
  return (
    <div className="relative h-[8.5rem] w-700">
      {/* 縦線 */}
      <div className="absolute left-1/2 h-1000 w-px -translate-x-1/2 bg-slate-300"></div>
      {/* 丸 */}
      <div className="typo-button absolute top-1000 left-1/2 flex h-700 w-700 -translate-x-1/2 items-center justify-center rounded-full border border-slate-300 text-center text-slate-600">
        {padded}
      </div>
    </div>
  );
};

export default Number;
