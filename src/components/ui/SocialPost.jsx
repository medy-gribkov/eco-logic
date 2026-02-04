import React from 'react';
import Card from './Card';
import Button from './Button';
import { Share2, Instagram, Twitter, Droplet } from 'lucide-react';

const SocialPost = ({ type = 'story', data, onShare }) => {
    const { savedAmount, equivalent, fact } = data;

    const renderContent = () => {
        switch (type) {
            case 'story':
                return (
                    <div className="aspect-[9/16] bg-graphite text-paper p-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-50">ECO LOGIC</div>
                        <div className="mt-12">
                            <h3 className="text-4xl font-display leading-none mb-4">I JUST SAVED</h3>
                            <h2 className="text-6xl font-display text-magenta mb-2">{savedAmount}</h2>
                            <h3 className="text-4xl font-display leading-none">OF WATER</h3>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="bg-paper text-graphite p-4 rotate-2 shadow-card">
                                <p className="font-bold text-lg">That's {equivalent}!</p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue">
                                    <Droplet className="w-10 h-10" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center font-mono text-sm mt-auto">
                            ecologic.app/join-me
                        </div>
                    </div>
                );
            case 'feed':
                return (
                    <div className="aspect-square bg-paper border-4 border-graphite p-6 flex flex-col justify-center items-center text-center relative">
                        <div className="absolute top-4 left-4"><Instagram size={24} /></div>
                        <h3 className="font-display text-3xl mb-2">DID YOU KNOW?</h3>
                        <p className="font-body text-lg mb-6">{fact}</p>
                        <div className="bg-green text-white px-4 py-2 font-mono text-sm uppercase">
                            Carbon Footprint: -2.4kg
                        </div>
                    </div>
                );
            case 'twitter':
                return (
                    <div className="aspect-[1.91/1] bg-blue text-white p-6 flex flex-col justify-center relative rounded-lg">
                        <div className="absolute top-4 right-4"><Twitter size={24} /></div>
                        <h3 className="font-display text-4xl mb-2">STOP DOOMSCROLLING.</h3>
                        <p className="font-body text-xl max-w-[80%]">Take one action today. I just saved {savedAmount} of water in 5 minutes.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="group relative">
            <div className="transform transition-transform group-hover:scale-[1.02] shadow-elevated">
                {renderContent()}
            </div>
            <div className="mt-4 flex justify-center">
                <Button variant="secondary" onClick={() => onShare(type)} className="text-sm py-2 px-4 flex items-center gap-2">
                    <Share2 size={16} /> Share {type}
                </Button>
            </div>
        </div>
    );
};

export default SocialPost;
