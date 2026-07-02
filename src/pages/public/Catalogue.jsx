import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import ProductFilters from "../../components/product/ProductFilters";
import { getProducts } from "../../api/productApi";

function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filters = {
    category: searchParams.get("category") || "",
    sort: searchParams.get("sort") || "",
  };

  const handleFilterChange = (next) => {
    const params = {};
    if (next.category) params.category = next.category;
    if (next.sort) params.sort = next.sort;
    setSearchParams(params);
  };

  // Fetch once — the backend doesn't support server-side filtering yet
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Couldn't load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter + sort client-side whenever URL params or product list change
  const visibleProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.sort === "price_asc") {
      result.sort((a, b) => a.listedPrice - b.listedPrice);
    } else if (filters.sort === "price_desc") {
      result.sort((a, b) => b.listedPrice - a.listedPrice);
    }

    return result;
  }, [products, filters.category, filters.sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-heading text-2xl md:text-3xl font-semibold text-glimmy-walnut mb-6">
        Our Collection
      </h1>

      <ProductFilters filters={filters} onChange={handleFilterChange} />

      {loading && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-2xl bg-glimmy-sage/10 animate-pulse"
            />
          ))}
        </div>
      )}

      {error && <p className="text-center text-red-600 py-12">{error}</p>}

      {!loading && !error && visibleProducts.length === 0 && (
        <p className="text-center text-glimmy-charcoal/60 py-12">
          No products found. Try adjusting your filters.
        </p>
      )}

      {!loading && !error && visibleProducts.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalogue;
