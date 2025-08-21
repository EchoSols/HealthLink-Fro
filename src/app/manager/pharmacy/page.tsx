import InventoryFilters from "@/components/manager/pharmacy/InventoryFilters";
import InventoryList from "@/components/manager/pharmacy/InventoryList";
import InventoryStats from "@/components/manager/pharmacy/InventoryStats";
import PharmacyHeader from "@/components/manager/pharmacy/PharmacyHeader";

export default function PharmacyPage() {
  return (
    <div className="p-6">
      <PharmacyHeader />
      <InventoryStats />
      <InventoryFilters />
      <h2 className="text-xl font-semibold mb-4">Medical inventory</h2>
      <InventoryList />
    </div>
  );
}
