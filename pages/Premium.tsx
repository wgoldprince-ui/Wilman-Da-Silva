import React from 'react';
import { Check, Star } from 'lucide-react';

export const Premium: React.FC = () => {
    return (
        <div className="pb-32 min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-angola-red/20">
            <div className="text-center pt-16 px-4">
                <h1 className="text-5xl font-black mb-6">Sons da Banda <span className="text-angola-yellow">Premium</span></h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Apoia a música nacional e desbloqueia o poder total do ritmo angolano.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 px-6">
                {/* Free Plan */}
                <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
                    <span className="bg-zinc-700 px-3 py-1 rounded-full text-sm font-bold">Atual</span>
                    <h2 className="text-2xl font-bold mt-4 mb-2">Banda Free</h2>
                    <p className="text-3xl font-black mb-6">0 Kz <span className="text-sm font-normal text-gray-400">/mês</span></p>
                    <ul className="space-y-4 mb-8 text-gray-300">
                        <li className="flex items-center gap-3"><Check size={20} /> Acesso a todas as músicas</li>
                        <li className="flex items-center gap-3"><Check size={20} /> Qualidade de áudio padrão</li>
                        <li className="flex items-center gap-3 opacity-50"><Check size={20} /> Anúncios ocasionais</li>
                    </ul>
                    <button className="w-full py-3 rounded-full border border-white font-bold hover:bg-white hover:text-black transition-colors">
                        Plano Atual
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white text-black p-8 rounded-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-angola-red/20">
                    <div className="absolute top-0 right-0 bg-angola-red text-white text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
                    <div className="flex items-center gap-2 mb-4 mt-2">
                        <Star className="fill-angola-yellow text-angola-yellow" />
                        <h2 className="text-2xl font-bold">Banda VIP</h2>
                    </div>
                    <p className="text-3xl font-black mb-6">2.500 Kz <span className="text-sm font-normal text-gray-600">/mês</span></p>
                    <ul className="space-y-4 mb-8 font-medium">
                        <li className="flex items-center gap-3"><Check size={20} className="text-angola-red" /> Sem Anúncios</li>
                        <li className="flex items-center gap-3"><Check size={20} className="text-angola-red" /> Downloads Ilimitados</li>
                        <li className="flex items-center gap-3"><Check size={20} className="text-angola-red" /> Alta Fidelidade (Hi-Fi)</li>
                        <li className="flex items-center gap-3"><Check size={20} className="text-angola-red" /> Apoie Artistas Locais</li>
                    </ul>
                    <button className="w-full py-3 rounded-full bg-black text-white font-bold hover:bg-angola-red transition-colors shadow-lg">
                        Aderir Agora (Multicaixa)
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">7 dias grátis para novos usuários.</p>
                </div>
            </div>
        </div>
    )
}