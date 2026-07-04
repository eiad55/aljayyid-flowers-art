/**

 * Smooth scroll to element by ID

 * @param elementId - The ID of the element to scroll to

 */

export function scrollToElement(elementId: string) {

  const element = document.getElementById(elementId);

  if (element) {

    element.scrollIntoView({ behavior: "smooth", block: "start" });

  }

}

/**

 * Generate WhatsApp message link

 * @param message - The message to send

 * @param phoneNumber - The phone number (with country code)

 */

export function generateWhatsAppLink(message: string, phoneNumber: string): string {

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

}

/**

 * Generate phone call link

 * @param phoneNumber - The phone number (with country code)

 */

export function generatePhoneLink(phoneNumber: string): string {

  return `tel:${phoneNumber}`;

}
