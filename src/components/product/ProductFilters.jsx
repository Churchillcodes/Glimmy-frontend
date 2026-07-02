const categories = [
  "All",
  "Baby Furniture",
  "Storage Furniture",
  "Living Room Furniture",
];

function ProductFilters({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-8">
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        className="rounded-full border border-glimmy-walnut/20 px-4 py-2 text-sm bg-white"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat === "All" ? "" : cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={filters.sort}
        onChange={(e) => onChange({ ...filters, sort: e.target.value })}
        className="rounded-full border border-glimmy-walnut/20 px-4 py-2 text-sm bg-white"
      >
        <option value="">Sort: Newest</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default ProductFilters;
