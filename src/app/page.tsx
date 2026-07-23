// import Header from "@/Components/Header";
// import Overview from "@/Components/Overview";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black flex justify-center items-start py-6">
//       <div className="w-full max-w-[430px] min-h-screen bg-[#F5F7FA] rounded-3xl overflow-hidden shadow-2xl">
//         <Header />
//         <Overview />
//       </div>
//     </main>
//   );
// }


import Header from "@/Components/Header";
import Overview from "@/Components/Overview";

export default function Home() {
  return (
    <main className="h-screen bg-gray-500 flex items-center justify-center overflow-hidden">

      {/* Mobile Device */}
      <div className="w-[430px] h-[900px] bg-[#F5F7FA] rounded-[38px] border-[8px] border-gray-900 shadow-2xl overflow-hidden">

        {/* Scrollable App */}
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">

          <Header />
          <Overview />

        </div>

      </div>

    </main>
  );
}