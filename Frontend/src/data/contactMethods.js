import { generateGeneralContactMessage } from '../utils/whatsapp';
import { generatePhoneLink, generateEmailLink, DISPLAY_PHONE, EMAIL_ADDRESS } from '../utils/contact';

export const contactMethods = [
  {
    id: 1,
    platform: "Instagram",
    handle: "@sivasagartravel",
    actionText: "Follow Us",
    icon: "instagram",
    link: "https://www.instagram.com/sivasagartravelagency04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    variant: "outline"
  },
  {
    id: 2,
    platform: "WhatsApp Us",
    handle: DISPLAY_PHONE,
    actionText: "Message Now",
    icon: "whatsapp",
    link: generateGeneralContactMessage(),
    variant: "outline"
  },
  {
    id: 3,
    platform: "Phone",
    handle: DISPLAY_PHONE,
    actionText: "Call Now",
    icon: "phone",
    link: generatePhoneLink(),
    variant: "outline"
  },
  {
    id: 4,
    platform: "Email",
    handle: EMAIL_ADDRESS,
    actionText: "Send Email",
    icon: "mail",
    link: generateEmailLink(),
    variant: "outline"
  }
];
