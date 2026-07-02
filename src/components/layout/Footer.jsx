function Footer() {
  return (
    <footer className="bg-glimmy-walnut text-glimmy-cream mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">
            Glimmy Baby Cots & Furniture
          </h3>
          <p className="text-sm opacity-90">
            Handcrafted baby cots and furniture, made to last.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-2">Contact</h4>
          <p className="text-sm opacity-90">WhatsApp: +254 7XX XXX XXX</p>
          <p className="text-sm opacity-90">Nairobi, Kenya</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-2">Quick Links</h4>
          <p className="text-sm opacity-90">Home · Catalogue · Contact</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-white/10 opacity-70">
        © {new Date().getFullYear()} Glimmy Baby Cots & Furniture. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
