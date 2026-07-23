import BalanceCard from "./BalanceCard";
import QuickActions from "./QuickActions";
import SummaryCards from "./SummaryCards";
import RecentTransactions from "./RecentTransactions";
import BottomNavigation from "./BottomNavigation";
import Overview from "./Overview";

export default function Dashboard() {
  return (
    <main className="bg-gray-100 min-h-screen pb-24">
      <Overview />
      <BalanceCard />
      <QuickActions />
      <SummaryCards />
      <RecentTransactions />
      <BottomNavigation />
    </main>
  );
}