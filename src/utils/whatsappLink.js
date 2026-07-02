const WHATSAPP_NUMBER = "254719246761"; // replace with Glimmy's real number, no + or leading 0

export function getWhatsAppLink(
  message = "Hi, I'd like to know more about Glimmy's furniture.",
) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getProductWhatsAppLink(productName) {
  return getWhatsAppLink(
    `Hi, I'm interested in the ${productName} — is it available?`,
  );
}
