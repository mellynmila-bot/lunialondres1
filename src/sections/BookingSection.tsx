import React, { useState } from 'react';
import {
  Search,
  FileEdit,
  Camera,
  HeartPulse,
  Leaf,
  Send,
  Sparkles,
  Users
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';

interface BookingSectionProps {
  lang: 'pt' | 'en';
  onOpenBookingWithMessage: (message: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  onOpenBookingWithMessage
}) => {
  const [name, setName] = useState('');
  const [treatment, setTreatment] = useState(lang === 'pt' ? 'Preenchimento Labial' : 'Lip Filler');
  const [preferredTime, setPreferredTime] = useState('');
  const [expectation, setExpectation] = useState('');
  const [firstTime, setFirstTime] = useState(lang === 'pt' ? 'Sim' : 'Yes');
  const [healthNotes, setHealthNotes] = useState('');

  const treatmentOptions = [
    {
      value: lang === 'pt' ? 'Preenchimento Labial' : 'Lip Filler',
      label: lang === 'pt' ? 'Preenchimento Labial' : 'Lip Filler'
    },
    { value: 'Premium Repair Brows', label: 'Premium Repair Brows' },
    { value: 'Brow Lamination', label: 'Brow Lamination' },
    {
      value: lang === 'pt' ? 'Ainda não sei, quero avaliação' : 'Not sure yet, want consultation',
      label: lang === 'pt' ? 'Ainda não sei, quero avaliação' : 'Not sure yet, want consultation'
    }
  ];

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const formattedMessage =
      lang === 'pt'
        ? `Olá, Lúnia! 💛 Vi o seu site e gostaria de agendar uma avaliação.\n\nNome: ${name || 'Não informado'}\nTratamento: ${treatment}\nMelhor dia e horário: ${preferredTime || 'A combinar'}\nExpectativa: ${expectation || 'Gostaria de uma recomendação natural'}\nPrimeira vez: ${firstTime}\nObservações: ${healthNotes || 'Nenhuma'}`
        : `Hello, Lúnia! 💛 I saw your website and would like to book an assessment.\n\nName: ${name || 'Not specified'}\nTreatment: ${treatment}\nPreferred day & time: ${preferredTime || 'To be agreed'}\nExpectation: ${expectation || 'Looking for natural recommendations'}\nFirst time: ${firstTime}\nHealth notes: ${healthNotes || 'None'}`;

    onOpenBookingWithMessage(formattedMessage);
  };

  return (
    <section id="agendamento" className="py-24 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-16 text-[#E6CF9A]/20 pointer-events-none">✦</div>
      <div className="absolute bottom-16 right-20 text-[#E6CF9A]/30 pointer-events-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6CF9A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'PRIMEIRO PASSO' : 'FIRST STEP'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6EFE4] font-normal leading-tight">
            {lang === 'pt'
              ? 'O seu primeiro passo para um resultado natural'
              : 'Your first step to a natural result'}
          </h2>

          <p className="text-sm sm:text-base text-[#F6EFE4]/85 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Conte-nos o que deseja e a Lúnia prepara a sua avaliação com todo o cuidado.'
              : 'Tell us what you want and Lúnia will prepare your assessment with care.'}
          </p>
        </div>

        {/* 2-Column Split: Left Educational Cards + Right Mini Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Educational Preparation */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#E6CF9A] mb-2">
              {lang === 'pt' ? 'Antes de agendar:' : 'Before booking:'}
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-[#C29F5B]/50 bg-[#F6EFE4] text-[#3F2E22] flex items-start gap-3 shadow-sm">
                <Search className="w-5 h-5 text-[#8F7030] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {lang === 'pt' ? 'A avaliação inicial é essencial' : 'Initial assessment is essential'}
                  </div>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5 leading-relaxed">
                    {lang === 'pt'
                      ? 'Cada plano é definido após conhecer a sua pele, os seus traços e a sua história clínica.'
                      : 'Every plan is tailored after examining your skin, facial features, and medical background.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#C29F5B]/50 bg-[#F6EFE4] text-[#3F2E22] flex items-start gap-3 shadow-sm">
                <FileEdit className="w-5 h-5 text-[#8F7030] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {lang === 'pt' ? 'Conte a sua expectativa' : 'Share your expectation'}
                  </div>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5 leading-relaxed">
                    {lang === 'pt'
                      ? 'Explique o que deseja alcançar e o acabamento estético que mais combina com seu estilo.'
                      : 'Tell us what you wish to achieve and the look that best fits your lifestyle.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#C29F5B]/50 bg-[#F6EFE4] text-[#3F2E22] flex items-start gap-3 shadow-sm">
                <Camera className="w-5 h-5 text-[#8F7030] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {lang === 'pt' ? 'Foto de referência' : 'Reference photo'}
                  </div>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5 leading-relaxed">
                    {lang === 'pt'
                      ? 'Se tiver fotos que você gosta, pode enviá-las na conversa para alinharmos o objetivo.'
                      : 'If you have reference styles you love, you can send them in the chat to align aesthetics.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#C29F5B]/50 bg-[#F6EFE4] text-[#3F2E22] flex items-start gap-3 shadow-sm">
                <HeartPulse className="w-5 h-5 text-[#8F7030] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {lang === 'pt' ? 'Saúde primeiro' : 'Health first'}
                  </div>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5 leading-relaxed">
                    {lang === 'pt'
                      ? 'Informe alergias, medicações, gravidez, amamentação ou qualquer condição de pele relevante.'
                      : 'Please disclose allergies, medications, pregnancy, breastfeeding, or skin conditions.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#C29F5B]/50 bg-[#F6EFE4] text-[#3F2E22] flex items-start gap-3 shadow-sm">
                <Leaf className="w-5 h-5 text-[#8F7030] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {lang === 'pt' ? 'Resultados individuais' : 'Individual results'}
                  </div>
                  <p className="text-xs text-[#3F2E22]/80 mt-0.5 leading-relaxed">
                    {lang === 'pt'
                      ? 'Variam de pessoa para pessoa, e a Lúnia explica tudo com transparência na consulta.'
                      : 'Outcomes vary by personal biology, explained with complete clinical honesty.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mini Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-[#C29F5B] bg-[#4A3727]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <h3 className="font-serif text-2xl text-[#F6EFE4] mb-2 font-normal">
                {lang === 'pt' ? 'Organize a sua mensagem' : 'Prepare your booking enquiry'}
              </h3>
              <p className="text-xs text-[#E6CF9A] mb-6">
                {lang === 'pt'
                  ? 'Preencha os campos abaixo. Ao clicar em enviar, você poderá escolher entre Instagram DM ou WhatsApp.'
                  : 'Fill in the fields below. When ready, click send to select Instagram DM or WhatsApp.'}
              </p>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt' ? 'Como gostaria de ser chamada(o)?' : 'How would you like to be addressed?'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'pt' ? 'Ex: Camila' : 'E.g. Sophie'}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#3F2E22] border border-[#C29F5B]/50 text-[#F6EFE4] text-xs placeholder-[#D9C7AC]/50 focus:border-[#E6CF9A] focus:outline-none transition-colors"
                  />
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt' ? 'Tratamento de interesse' : 'Treatment of interest'}
                  </label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#3F2E22] border border-[#C29F5B]/50 text-[#F6EFE4] text-xs focus:border-[#E6CF9A] focus:outline-none transition-colors cursor-pointer"
                  >
                    {treatmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#4A3727] text-[#F6EFE4]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Best day & time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt' ? 'Melhor dia e horário para você' : 'Preferred day & time window'}
                  </label>
                  <input
                    type="text"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    placeholder={lang === 'pt' ? 'Ex: Terças à tarde ou sábados pela manhã' : 'E.g. Tuesday afternoons or Saturday mornings'}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#3F2E22] border border-[#C29F5B]/50 text-[#F6EFE4] text-xs placeholder-[#D9C7AC]/50 focus:border-[#E6CF9A] focus:outline-none transition-colors"
                  />
                </div>

                {/* Expectation */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt' ? 'Qual a sua expectativa com o tratamento?' : 'What is your aesthetic expectation?'}
                  </label>
                  <input
                    type="text"
                    value={expectation}
                    onChange={(e) => setExpectation(e.target.value)}
                    placeholder={lang === 'pt' ? 'Ex: Recuperar fios que perdi e manter naturalidade' : 'E.g. Restore thinning brows with subtle definition'}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#3F2E22] border border-[#C29F5B]/50 text-[#F6EFE4] text-xs placeholder-[#D9C7AC]/50 focus:border-[#E6CF9A] focus:outline-none transition-colors"
                  />
                </div>

                {/* First time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt' ? 'É a sua primeira vez neste tratamento?' : 'Is this your first time having this treatment?'}
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFirstTime(lang === 'pt' ? 'Sim' : 'Yes')}
                      className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                        firstTime === (lang === 'pt' ? 'Sim' : 'Yes')
                          ? 'bg-[#C29F5B] border-[#E6CF9A] text-[#4A3727]'
                          : 'bg-[#3F2E22] border-[#C29F5B]/40 text-[#F6EFE4]'
                      }`}
                    >
                      {lang === 'pt' ? 'Sim' : 'Yes'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFirstTime(lang === 'pt' ? 'Não' : 'No')}
                      className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                        firstTime === (lang === 'pt' ? 'Não' : 'No')
                          ? 'bg-[#C29F5B] border-[#E6CF9A] text-[#4A3727]'
                          : 'bg-[#3F2E22] border-[#C29F5B]/40 text-[#F6EFE4]'
                      }`}
                    >
                      {lang === 'pt' ? 'Não' : 'No'}
                    </button>
                  </div>
                </div>

                {/* Health notes (optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E6CF9A] mb-1.5">
                    {lang === 'pt'
                      ? 'Algo que devemos saber? (opcional: alergias, medicações, gravidez)'
                      : 'Anything we should know? (optional: allergies, medication, pregnancy)'}
                  </label>
                  <textarea
                    rows={2}
                    value={healthNotes}
                    onChange={(e) => setHealthNotes(e.target.value)}
                    placeholder={lang === 'pt' ? 'Nenhuma observação no momento' : 'No specific allergies or conditions'}
                    className="w-full px-4 py-2 rounded-lg bg-[#3F2E22] border border-[#C29F5B]/50 text-[#F6EFE4] text-xs placeholder-[#D9C7AC]/50 focus:border-[#E6CF9A] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#C29F5B] hover:bg-[#E6CF9A] text-[#4A3727] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {lang === 'pt' ? 'Enviar a minha solicitação' : 'Send my inquiry'}
                    </span>
                  </button>
                </div>

                {/* Closing quote & VIP link */}
                <p className="text-[11px] text-center text-[#E6CF9A]/80 italic pt-1">
                  {lang === 'pt'
                    ? 'Quanto mais detalhes você enviar, mais personalizada será a sua avaliação.'
                    : 'The more details you provide, the more tailored your consultation will be.'}
                </p>

                <div className="text-center pt-2 border-t border-[#C29F5B]/30">
                  <a
                    href={siteData.vipGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E6CF9A] hover:underline"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Prefere aguardar? Entrar no Grupo VIP' : 'Prefer updates? Join the VIP Group'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionDivider lightMode={false} />
      </div>
    </section>
  );
};
