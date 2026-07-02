import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    _id,
    name,
    images,
    listedPrice,
    negotiable,
    isMadeToOrder,
    quantity,
    category,
  } = product;
  const image = images?.[0]?.url;

  const isNegotiable = negotiable && !isMadeToOrder;
  const inStock = isMadeToOrder || quantity > 0;

  return (
    <Link
      to={`/products/${_id}`}
      className={`rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-glimmy-walnut/10 overflow-hidden block ${
        !inStock ? "opacity-60" : ""
      }`}
    >
      <div className="aspect-square bg-glimmy-sage/20 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-glimmy-charcoal/30 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-glimmy-walnut/70">{category}</p>

          {isMadeToOrder ? (
            <span className="text-[10px] bg-glimmy-sage/40 text-glimmy-walnut px-2 py-1 rounded-full font-medium">
              Made to Order
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-medium">
              <span
                className={`w-1.5 h-1.5 rounded-full ${inStock ? "bg-green-600" : "bg-red-600"}`}
              />
              <span className={inStock ? "text-green-700" : "text-red-700"}>
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </span>
          )}
        </div>

        <p className="font-medium">{name}</p>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm text-glimmy-charcoal/70">
            KES {listedPrice?.toLocaleString()}
          </p>
          {isNegotiable && (
            <span className="text-[10px] bg-glimmy-walnut/10 text-glimmy-walnut px-2 py-0.5 rounded-full font-medium">
              Negotiable
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
