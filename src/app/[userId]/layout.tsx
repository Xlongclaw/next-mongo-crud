import Explorer from "../components/Explorer";
import NavigationBar from "../components/NavigationBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen py-4 px-48 flex flex-col items-center bg-[#050505]">
      <NavigationBar />
      <div className=" border border-white/10 flex-1 w-full mt-3 rounded-[2rem] flex py-8">
        <Explorer />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
