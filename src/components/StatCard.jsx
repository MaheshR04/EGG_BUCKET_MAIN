export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <p className="text-gray-500 text-sm mb-2">{title}</p>
      <h2 className="text-3xl font-bold text-orange-600">{value}</h2>
    </div>
  );
}
