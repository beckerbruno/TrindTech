import { lusitana } from '@/app/ui/fonts';

export default function TrindLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">
        Trin
        <span className="text-red-500">dt</span>
        ech</p>
    </div>
  );
}
