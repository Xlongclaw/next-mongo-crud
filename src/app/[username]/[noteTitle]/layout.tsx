import Explorer from "../../components/Explorer";
import NavigationBar from "../../components/NavigationBar";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { noteTitle: string };
}>) {
  // await axios
  //   .post("http://localhost:3000/api/get-user-by-username", {
  //     username: "xlc876589",
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => console.log(error));

  return (
    <div className="h-screen py-4 px-48 flex flex-col items-center bg-[#050505]">
      <NavigationBar />
      <div className=" border border-white/10 flex-1 w-full mt-3 rounded-[2rem] flex py-8">
        <Explorer />
        {params.noteTitle}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
