import React, { useState, useEffect, useRef } from 'react';
import { X, Copy, Check, MessageCircle, Send, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
  customMessage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  customMessage
}) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const defaultMessage =
    lang === 'pt'
      ? 'Olá, Lúnia! 💛 Vi o seu site e gostaria de agendar uma avaliação.'
      : 'Hello, Lúnia! 💛 I saw your website and would like to book an assessment.';

  const messageToUse = customMessage || defaultMessage;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setCopied(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(messageToUse);
        setCopied(true);
        setTimeout(() => setCopied(false), 3500);
        return true;
      }
      throw new Error('Clipboard API unavailable');
    } catch {
      setCopyError(true);
      return false;
    }
  };

  const handleInstagramClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await copyToClipboard();
    // Open Instagram DM in new tab
    window.open(siteData.instagramDmUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(messageToUse);
    const url = `https://wa.me/${siteData.whatsappPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const hasWhatsApp = Boolean(siteData.whatsappPhone && siteData.whatsappPhone.trim() !== '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#F6EFE4] text-[#3F2E22] rounded-2xl border border-[#C29F5B]/50 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Decorative corner shimmer */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E6CF9A]/30 to-transparent rounded-bl-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#4A3727] hover:bg-[#EADFCC] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C29F5B]"
          aria-label={lang === 'pt' ? 'Fechar modal' : 'Close modal'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EADFCC] text-[#C29F5B] mb-3 border border-[#C29F5B]/30">
            <Sparkles className="w-5 h-5 text-[#8F7030]" />
          </div>
          <h3 id="booking-modal-title" className="text-2xl sm:text-3xl font-serif text-[#4A3727]">
            {lang === 'pt' ? 'Como prefere agendar?' : 'How would you like to book?'}
          </h3>
          <p className="text-sm text-[#3F2E22]/80 mt-1 max-w-sm mx-auto">
            {lang === 'pt'
              ? 'Inicie a sua conversa com a Lúnia. Cada atendimento começa com atenção aos seus detalhes.'
              : 'Start your conversation with Lúnia. Every journey begins with personal care and clinical attention.'}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Instagram DM Option */}
          <div className="relative group p-4 sm:p-5 rounded-xl border border-[#C29F5B]/40 bg-white/70 hover:bg-white hover:border-[#C29F5B] transition-all shadow-sm hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#EADFCC] text-[#8F7030] mt-0.5">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-[#4A3727]">
                    Instagram DM
                  </h4>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5">
                    {lang === 'pt'
                      ? 'Envie uma mensagem direta para @lunia.aesthetics'
                      : 'Send a direct message to @lunia.aesthetics'}
                  </p>
                  <p className="text-[11px] text-[#8F7030] mt-1 italic">
                    {lang === 'pt'
                      ? 'Copiaremos sua mensagem automaticamente para você colar no chat.'
                      : 'We will automatically copy your message ready to paste into the chat.'}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleInstagramClick}
              className="mt-3.5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                {lang === 'pt' ? 'Abrir DM no Instagram' : 'Open Instagram DM'}
              </span>
            </button>
          </div>

          {/* WhatsApp Option */}
          {hasWhatsApp && (
            <div className="relative group p-4 sm:p-5 rounded-xl border border-[#C29F5B]/40 bg-white/70 hover:bg-white hover:border-[#C29F5B] transition-all shadow-sm hover:shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#EADFCC] text-[#8F7030] mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-[#4A3727]">
                    WhatsApp
                  </h4>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5">
                    {lang === 'pt'
                      ? 'Fale diretamente pelo WhatsApp com a mensagem já pronta.'
                      : 'Chat directly on WhatsApp with your pre-filled inquiry.'}
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="mt-3.5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#C29F5B] text-[#4A3727] hover:bg-[#C29F5B] hover:text-[#F6EFE4] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#8F7030] group-hover:text-inherit" />
                <span>
                  {lang === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Copy Toast Feedback */}
        {copied && (
          <div className="mt-4 p-3 rounded-lg bg-[#EADFCC] border border-[#C29F5B] flex items-center justify-center gap-2 text-xs font-medium text-[#4A3727] animate-in fade-in duration-150">
            <Check className="w-4 h-4 text-emerald-700" />
            <span>
              {lang === 'pt'
                ? 'Mensagem copiada! Cole na conversa do Instagram.'
                : 'Message copied! Paste it into the Instagram conversation.'}
            </span>
          </div>
        )}

        {/* Message preview / manual copy box */}
        <div className="mt-4 pt-4 border-t border-[#D9C7AC]/50">
          <div className="flex items-center justify-between text-[11px] text-[#8F7030] mb-1.5 font-medium">
            <span>{lang === 'pt' ? 'Mensagem pronta:' : 'Prepared message:'}</span>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1 hover:text-[#4A3727] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-800">{lang === 'pt' ? 'Copiado!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'pt' ? 'Copiar texto' : 'Copy text'}</span>
                </>
              )}
            </button>
          </div>
          <div className="p-2.5 rounded-lg bg-white/60 border border-[#D9C7AC]/40 text-xs text-[#3F2E22] font-mono whitespace-pre-wrap max-h-24 overflow-y-auto selection:bg-[#E6CF9A]">
            {messageToUse}
          </div>
        </div>

        <p className="text-[11px] text-center text-[#3F2E22]/60 mt-4">
          {lang === 'pt'
            ? 'Atendimento personalizado com hora marcada em Bournemouth, UK.'
            : 'Personalised consultations by appointment in Bournemouth, UK.'}
        </p>
      </div>
    </div>
  );
};
