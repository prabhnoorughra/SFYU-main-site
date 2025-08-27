import { SiInstagram, SiTiktok, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const links = [
  { label: "Instagram", href: "https://instagram.com/stemfellowshipyorku", Icon: SiInstagram, bg: "from-pink-500 to-yellow-500" },
  { label: "TikTok", href: "https://tiktok.com/@stemfellowshipyorku", Icon: SiTiktok, bg: "from-zinc-800 to-zinc-600" },
  { label: "LinkedIn", href: "https://linkedin.com/company/stem-fellowship-at-york-university/", Icon: SiLinkedin, bg: "from-sky-600 to-sky-500" },
  { label: "Email", href: "mailto:stemfellowshipyorku@gmail.com", Icon: MdEmail, bg: "from-emerald-600 to-emerald-500" },
];

function ContactsPage() {
  return (
    <div className="w-full min-h-full px-4 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map(({ label, href, Icon, bg }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card bg-[#1F80FF] hover:bg-sky-300 transition-colors shadow-md"
          >
            <div className="card-body flex-row items-center gap-4">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${bg} text-white`}>
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="card-title text-base">{label}</h3>
                <p className="text-sm opacity-70">Tap to open</p>
              </div>
              <span className="btn btn-sm">Open</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage
