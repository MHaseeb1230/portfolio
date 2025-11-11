import { Github, Linkedin, Facebook, Mail, MessageCircle } from "lucide-react";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href="https://www.linkedin.com/in/muhammad-haseeb-064b34249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18} /></a>
      <a href="https://github.com/MHaseeb1230" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent"><Github size={18} /></a>
      <a href="https://www.facebook.com/share/19avajB1wd/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></a>
      <a href="mailto:haseeb262721@gmail.com" aria-label="Email" className="hover:text-accent"><Mail size={18} /></a>
      <a href="https://wa.me/923134027332" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent"><MessageCircle size={18} /></a>
    </div>
  );
}
