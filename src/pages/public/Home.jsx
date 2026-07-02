import { link } from "react-router-dom";
import { FiTruck, FiTool, FiCheckCircle } from "react-icons/fi";
import Button from "../../components/common/Button";
import { getWhatsAppLink } from "../../utils/whatsappLink";

const categories = [
  { name: "Baby Furniture", path: "/catalogue?category=Baby Furniture" },
  { name: "Storage Furniture", path: "/catalogue?category=Storage Furniture" },
  {
    name: "Living Room Furniture",
    path: "/catalogue?category=Living Room Furniture",
  },
];

const orderingSteps = [
  "Browse the collection",
  "Send an inquiry",
  "Agree on price",
  "Pay deposit",
  "Delivery or collection",
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-semibold text-glimmy-walnut leading-tight">
          Handcrafted Baby Cots & Furniture, Made to Last
        </h1>
        <p className="mt-4 text-glimmy-charcoal/80 max-w-xl mx-auto">
          Quality furniture built for Kenyan homes — from nursery to living
          room.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/catalogue" variant="primary">
            Browse Collection
          </Button>
          <Button href={getWhatsAppLink()} variant="whatsapp">
            Chat on WhatsApp
          </Button>
        </div>
      </section>

      {/* Category shortcuts */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow p-8 text-center border border-glimmy-walnut/10"
            >
              <h3 className="font-heading font-semibold text-glimmy-walnut">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products - placeholder until API is wired */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-semibold text-glimmy-walnut mb-6">
          Featured Pieces
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-sm border border-glimmy-walnut/10 overflow-hidden"
            >
              <div className="aspect-square bg-glimmy-sage/30" />
              <div className="p-4">
                <p className="font-medium">Product name</p>
                <p className="text-sm text-glimmy-charcoal/60">KES —</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-center">
          <div>
            <FiTool className="mx-auto text-3xl text-glimmy-walnut mb-3" />
            <h4 className="font-heading font-semibold">Handcrafted Quality</h4>
            <p className="text-sm text-glimmy-charcoal/70 mt-1">
              Every piece built with care and attention to detail.
            </p>
          </div>
          <div>
            <FiCheckCircle className="mx-auto text-3xl text-glimmy-walnut mb-3" />
            <h4 className="font-heading font-semibold">
              Custom Orders Welcome
            </h4>
            <p className="text-sm text-glimmy-charcoal/70 mt-1">
              Have something specific in mind? We can build it.
            </p>
          </div>
          <div>
            <FiTruck className="mx-auto text-3xl text-glimmy-walnut mb-3" />
            <h4 className="font-heading font-semibold">Nairobi Delivery</h4>
            <p className="text-sm text-glimmy-charcoal/70 mt-1">
              Reliable delivery or collection, your choice.
            </p>
          </div>
        </div>
      </section>

      {/* Ordering process */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-semibold text-glimmy-walnut mb-8 text-center">
          How Ordering Works
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {orderingSteps.map((step, index) => (
            <div
              key={step}
              className="flex-1 flex items-start md:flex-col gap-3 md:text-center"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-glimmy-walnut text-glimmy-cream font-medium shrink-0 md:mx-auto">
                {index + 1}
              </div>
              <p className="text-sm font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-glimmy-sage/20 py-16 text-center px-4">
        <h2 className="font-heading text-2xl font-semibold text-glimmy-walnut">
          Have something specific in mind?
        </h2>
        <p className="mt-2 text-glimmy-charcoal/80">
          Chat with us directly on WhatsApp.
        </p>
        <div className="mt-6">
          <Button href={getWhatsAppLink()} variant="whatsapp">
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
