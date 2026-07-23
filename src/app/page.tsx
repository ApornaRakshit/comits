import Header from "@/Components/Header";
import Overview from "@/Components/Overview";
import QuickActions from "@/Components/QuickActions";
import MyAccounts from "@/Components/MyAccounts";
import BalanceCard from "@/Components/BalanceCard";
import SummaryCards from "@/Components/SummaryCards";
import RecentTransactions from "@/Components/RecentTransactions";
import BottomNavigation from "@/Components/BottomNavigation";

export default function Home() {
  return (
    <main className="h-screen bg-gray-500 flex items-center justify-center overflow-hidden">

      {/* Mobile Device */}
      <div className="w-[430px] h-[900px] bg-[#F5F7FA] rounded-[38px] border-[8px] border-gray-900 shadow-2xl overflow-hidden">

        {/* Scrollable App */}
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">

          <Header />
          <Overview />
          <QuickActions />
          <MyAccounts />
          <BalanceCard />
          <SummaryCards />
          <RecentTransactions />
          <BottomNavigation />

        </div>

      </div>

    </main>
  );
}