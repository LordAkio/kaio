/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Zap, 
  Smile, 
  BookOpen, 
  Download, 
  ShieldCheck, 
  ChevronDown, 
  Star,
  Gift,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-yellow/30 selection:text-brand-orange">
      {/* Countdown Ribbon */}
      <div className="bg-brand-orange text-white py-2.5 px-4 text-center font-bold text-sm md:text-base sticky top-0 z-50 shadow-lg flex items-center justify-center gap-2">
        <Clock className="h-4 w-4 animate-pulse" />
        <span>OFERTA POR TEMPO LIMITADO:</span>
        <span className="font-mono bg-white/20 px-2 py-0.5 rounded tabular-nums">
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Upsell Popup */}
      <AnimatePresence>
        {isUpsellOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
              <button 
                onClick={() => setIsUpsellOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="inline-flex p-3 rounded-full bg-brand-yellow/30 text-brand-orange mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight uppercase">Espere! Oferta Especial</h2>
                <p className="text-gray-600">Você selecionou o plano básico, mas por que não levar o <strong>PACOTE COMPLETO</strong> agora?</p>
              </div>
              
              <div className="bg-brand-yellow/20 rounded-2xl p-6 mb-8 border border-brand-yellow">
                <p className="text-brand-orange font-bold text-center mb-4">Leve TUDO do Plano Premium por apenas:</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-bold text-brand-orange">R$</span>
                  <span className="text-6xl font-black text-brand-orange">17</span>
                  <span className="text-brand-orange font-medium">,00</span>
                </div>
                <p className="text-center text-sm text-brand-orange mt-2 font-medium">Economia de R$ 10,00 sobre o preço normal!</p>
              </div>
              
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">O QUE VOCÊ VAI GANHAR:</p>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "+1500 Atividades Lúdicas",
                    "120 Dinâmicas Sem Material",
                    "80 Rotinas Lúdicas Prontas",
                    "100 Atividades Emocionais e Calma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-brand-turquoise flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.ggcheckout.com/checkout/v5/FF3xjLGZkm6VNZVyY5nf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-brand-orange text-white font-bold text-lg shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 active:scale-95 text-center block"
                >
                  SIM! QUERO O PACOTE COMPLETO (R$ 17)
                </a>
                <a 
                  href="https://www.ggcheckout.com/checkout/v5/WTkRS3Pm9OiYw7TkyvUD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors text-center block"
                >
                  Não, prefiro ficar apenas com o básico por R$ 10
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* 1️⃣ HERO SECTION */}
      <header className="relative overflow-hidden bg-brand-yellow/10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              1500 Atividades Lúdicas Prontas para Engajar Crianças
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl"
            >
              Mais de 1500 atividades lúdicas organizadas por situações reais para acalmar a turma, recuperar a atenção e conduzir sua aula com mais leveza e menos estresse.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black"
            >
              <video 
                controls 
                className="w-full aspect-video"
                poster="https://i.imgur.com/cymWUTk.jpg"
              >
                <source src="https://i.imgur.com/cymWUTk.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a 
                href="#oferta" 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 active:scale-95"
              >
                QUERO ACESSAR AGORA
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>

            
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-turquoise rounded-full blur-3xl opacity-20"></div>
      </header>

      {/* 2️⃣ BENEFÍCIOS PRINCIPAIS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que este material é essencial para você?</h2>
            <div className="h-1.5 w-20 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Clock className="h-8 w-8 text-brand-orange" />, 
                title: "Economia de tempo", 
                desc: "Nunca mais perca horas procurando atividades na internet." 
              },
              { 
                icon: <Users className="h-8 w-8 text-brand-purple" />, 
                title: "Turma mais engajada", 
                desc: "Atividades que capturam a atenção e o interesse dos alunos." 
              },
              { 
                icon: <Zap className="h-8 w-8 text-brand-turquoise" />, 
                title: "Menos estresse", 
                desc: "Tenha sempre uma solução pronta para momentos difíceis." 
              },
              { 
                icon: <Smile className="h-8 w-8 text-brand-orange" />, 
                title: "Sem materiais caros", 
                desc: "90% das atividades usam apenas o corpo ou materiais simples." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-xl hover:bg-white text-center flex flex-col items-center"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-brand-yellow/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 5️⃣ BÔNUS EXCLUSIVOS */}
      <section className="py-24 bg-brand-purple text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-turquoise/20 text-brand-turquoise text-sm font-bold uppercase tracking-wider mb-4">Oferta Especial</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Você ainda leva 3 Bônus Exclusivos</h2>
            <p className="text-brand-yellow/70 max-w-2xl mx-auto">Comprando hoje, você garante acesso a materiais complementares que vão acelerar seus resultados.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bônus 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl text-gray-900 shadow-xl border-t-8 border-brand-orange relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase z-20">Grátis</div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://i.imgur.com/a7qwCVy.jpeg" 
                  alt="120 Dinâmicas Sem Material" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 pt-0 flex-grow">
                <div className="bg-brand-orange/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-orange -mt-6 relative z-10">
                  <Smile className="h-6 w-6" />
                </div>
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-1 block">Bônus #1</span>
                <h3 className="text-xl font-bold mb-3">120 Dinâmicas Sem Material</h3>
                <p className="text-gray-600 text-sm mb-6">Atividades rápidas para aplicar em qualquer lugar, sem precisar de nada além da sua voz e criatividade.</p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 line-through text-sm">De R$ 47,00</span>
                  <span className="text-brand-orange font-black">POR R$ 0,00</span>
                </div>
              </div>
            </motion.div>

            {/* Bônus 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl text-gray-900 shadow-xl border-t-8 border-brand-yellow relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 bg-brand-yellow text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase z-20">Grátis</div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://i.imgur.com/Tbo2UI9.jpeg" 
                  alt="80 Rotinas Lúdicas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 pt-0 flex-grow">
                <div className="bg-brand-yellow/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-yellow -mt-6 relative z-10">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-1 block">Bônus #2</span>
                <h3 className="text-xl font-bold mb-3">80 Rotinas Lúdicas</h3>
                <p className="text-gray-600 text-sm mb-6">Um guia completo com rotinas prontas para organizar o dia a dia e manter as crianças engajadas.</p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 line-through text-sm">De R$ 67,00</span>
                  <span className="text-brand-yellow font-black">POR R$ 0,00</span>
                </div>
              </div>
            </motion.div>

            {/* Bônus 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl text-gray-900 shadow-xl border-t-8 border-brand-turquoise relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 bg-brand-turquoise text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase z-20">Grátis</div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://i.imgur.com/HuV4nlo.jpeg" 
                  alt="100 Atividades Emocionais e Calmas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 pt-0 flex-grow">
                <div className="bg-brand-turquoise/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-brand-turquoise -mt-6 relative z-10">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-brand-turquoise font-bold text-xs uppercase tracking-widest mb-1 block">Bônus #3</span>
                <h3 className="text-xl font-bold mb-3">100 Atividades Emocionais e Calmas</h3>
                <p className="text-gray-600 text-sm mb-6">Ajude as crianças a identificar emoções e encontrar momentos de calma com atividades práticas e envolventes.</p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 line-through text-sm">De R$ 97,00</span>
                  <span className="text-brand-turquoise font-black">POR R$ 0,00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </section>

      {/* 6️⃣ SEÇÃO DE OFERTA */}
      <section id="oferta" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">Escolha Seu Plano</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {/* Plano Básico */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm flex flex-col text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plano Básico</h3>
              
              <div className="mb-2">
                <span className="text-gray-400 line-through text-xl mr-2">R$47</span>
                <span className="text-5xl font-black text-green-600">R$10,00</span>
              </div>
              <p className="text-gray-500 font-medium mb-2">pagamento único</p>
              <p className="text-yellow-500 font-bold mb-8">Você economiza R$37,00</p>
              
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">+1500 Atividades Lúdicas PDF</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Acesso digital</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Garantia de 7 dias</span>
                </li>
              </ul>
              
              <button 
                type="button"
                onClick={() => setIsUpsellOpen(true)}
                className="w-full py-5 rounded-xl bg-yellow-400 text-gray-900 font-black text-lg transition-all hover:bg-yellow-500 active:scale-95 shadow-md uppercase"
              >
                ESCOLHER PLANO BÁSICO
              </button>
            </div>
            
            {/* Plano Premium */}
            <div className="bg-white rounded-3xl p-10 border-2 border-green-600 shadow-2xl relative flex flex-col text-center z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-black px-8 py-2 rounded-md shadow-md uppercase tracking-wider">MAIS POPULAR</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plano Premium</h3>
              
              <div className="mb-2">
                <span className="text-gray-400 line-through text-xl mr-2">R$97</span>
                <span className="text-5xl font-black text-green-600">R$27,00</span>
              </div>
              <p className="text-gray-500 font-medium mb-2">pagamento único</p>
              <p className="text-yellow-500 font-bold mb-4">Você economiza R$70,00 + R$97 em bônus</p>
              
              <div className="mb-8">
                <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">+1736 pessoas escolheram essa oferta</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">BÔNUS: 120 Dinâmicas sem Material</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">BÔNUS: 80 Rotinas Lúdicas Prontas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">BÔNUS: 100 Atividades Emocionais e Calmas</span>
                </li>
              </ul>
              
              <a 
                href="https://www.ggcheckout.com/checkout/v5/vrKkH2lSsniheIZ13k0M"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-xl bg-green-600 text-white font-black text-lg shadow-lg shadow-green-600/20 transition-all hover:bg-green-700 active:scale-95 text-center block uppercase"
              >
                ESCOLHER PLANO PREMIUM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ GARANTIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="relative">
                <ShieldCheck className="h-32 w-32 text-brand-orange" />
                <div className="absolute inset-0 bg-brand-orange/10 blur-2xl rounded-full"></div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Garantia Incondicional de 7 Dias</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eu confio tanto na qualidade deste material que ofereço uma garantia total. Se por qualquer motivo você achar que o conteúdo não é para você, basta me enviar um e-mail em até 7 dias e eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
              <p className="text-sm font-bold text-brand-orange uppercase tracking-widest">Risco Zero para Você</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ DEPOIMENTOS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que dizem quem já usa</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Mariana Silva", 
                role: "Professora de Educação Infantil", 
                text: "O material salvou meus planejamentos! Antes eu perdia horas no Pinterest, agora abro o PDF e em 2 minutos já sei o que fazer com a turma." 
              },
              { 
                name: "Dr. Ricardo Santos", 
                role: "Pedagogo", 
                text: "Uma curadoria excelente. As atividades são pedagogicamente fundamentadas e realmente funcionam na prática, não é apenas teoria." 
              },
              { 
                name: "Ana Paula", 
                role: "Mãe e Educadora", 
                text: "Uso em casa com meus filhos e também nas minhas aulas particulares. As crianças amam e ficam super engajadas. Vale cada centavo!" 
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="text-brand-turquoise/30 absolute top-4 right-8 text-6xl font-serif opacity-50">"</div>
                <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-brand-purple font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tire suas dúvidas sobre o material.</p>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Para qual idade é indicado?" 
              answer="O material foi desenvolvido focado em crianças de 2 a 10 anos, abrangendo Educação Infantil e os primeiros anos do Ensino Fundamental." 
            />
            <FAQItem 
              question="Preciso imprimir tudo?" 
              answer="Não! Você pode acessar o PDF pelo celular ou tablet durante a aula. O material é otimizado para leitura digital, mas também pode ser impresso se você preferir." 
            />
            <FAQItem 
              question="Funciona com turmas grandes?" 
              answer="Sim, a maioria das atividades foi pensada para o contexto de sala de aula, adaptando-se facilmente para grupos pequenos ou turmas com mais de 30 alunos." 
            />
            <FAQItem 
              question="Preciso de materiais caros?" 
              answer="De forma alguma. 90% das atividades utilizam apenas o corpo, a voz ou materiais simples que você já tem na escola (papel, fita, garrafas pet, etc)." 
            />
            <FAQItem 
              question="Como recebo o acesso?" 
              answer="O acesso é enviado automaticamente para o seu e-mail assim que o pagamento for confirmado. Pagamentos via PIX ou Cartão liberam o acesso em poucos minutos." 
            />
            <FAQItem 
              question="E se eu não gostar?" 
              answer="Você tem 7 dias de garantia incondicional. Se não gostar, basta pedir o reembolso e devolvemos seu dinheiro integralmente." 
            />
          </div>
        </div>
      </section>

      {/* 🔟 CTA FINAL */}
      <section className="py-24 bg-brand-orange text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight">
            Transforme sua sala de aula ainda hoje
          </h2>
          <p className="text-xl text-brand-yellow mb-12 max-w-2xl mx-auto">
            Pare de perder tempo e comece a encantar seus alunos com atividades que realmente funcionam.
          </p>
          <a 
            href="#oferta" 
            className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-xl font-black text-brand-orange shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            SIM! QUERO ACESSO AGORA
          </a>
          <p className="mt-8 text-white/80 text-sm font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            Compra 100% Segura e Garantida
          </p>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 rotate-12"><Zap className="h-24 w-24" /></div>
          <div className="absolute bottom-10 right-10 -rotate-12"><Smile className="h-24 w-24" /></div>
          <div className="absolute top-1/2 left-1/4"><BookOpen className="h-16 w-16" /></div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-2">Didática Lúdica</h3>
              <p className="text-sm max-w-xs">Transformando a educação através do brincar e do engajamento real.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <button type="button" className="hover:text-white transition-colors">Termos de uso</button>
              <button type="button" className="hover:text-white transition-colors">Política de privacidade</button>
              <button type="button" className="hover:text-white transition-colors">Suporte</button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
            <p>© {new Date().getFullYear()} Didática Lúdica. Todos os direitos reservados.</p>
            <p className="mt-2 opacity-50">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
