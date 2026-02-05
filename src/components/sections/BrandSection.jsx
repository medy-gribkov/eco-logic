import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Play, ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { useLanguage } from '../../i18n';

const BrandSection = () => {
    const { isRTL } = useLanguage();

    const socialPosts = [
        {
            image: '/assets/icons/globe.webp', // Temporary: using high-quality icon as abstract post
            caption: isRTL ? 'השפעה בלתי נראית' : 'Invisible Impact',
            likes: '2.4K',
            platform: 'facebook',
            Icon: Facebook
        },
        {
            image: '/assets/icons/seedling.webp',
            caption: isRTL ? 'צעד אחד היום' : 'One Step Today',
            likes: '1.8K',
            platform: 'instagram',
            Icon: Instagram
        },
        {
            image: '/assets/icons/recycle-heart.webp',
            caption: isRTL ? 'אהבה לטבע' : 'Love for Nature',
            likes: '850',
            platform: 'twitter',
            Icon: Twitter
        }
    ];

    // ... (rest of the file until the map loop)

    <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
        {socialPosts.map((post, index) => {
            const PostIcon = post.Icon;
            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="flex-shrink-0 w-72 bg-paper rounded-2xl shadow-elevated overflow-hidden cursor-pointer border border-gray/20 group relative"
                >
                    <div className="aspect-square overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                        <img
                            src={post.image}
                            alt={post.caption}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-3 right-3 z-20 bg-paper/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <PostIcon className={`w-4 h-4 ${post.platform === 'instagram' ? 'text-magenta' : post.platform === 'facebook' ? 'text-blue' : 'text-black'}`} />
                        </div>
                    </div>
                    <div className="p-5">
                        <p className="text-base text-graphite font-display mb-3 line-clamp-2">
                            {post.caption}
                        </p>
                        <div className="flex items-center justify-between text-xs text-graphite/60 border-t border-sand pt-3">
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-magenta/10 flex items-center justify-center text-magenta">♥</div>
                                <span>{post.likes}</span>
                            </div>
                            <span>2h ago</span>
                        </div>
                    </div>
                </motion.div>
            );
        })}
        {/* Placeholder for more */}
        <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-72 aspect-[4/5] bg-gradient-to-br from-green/5 to-blue/5 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray/30 hover:border-green/50 hover:bg-green/5 transition-all cursor-pointer group"
        >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-green" />
            </div>
            <span className="font-display text-lg text-graphite/60 group-hover:text-green transition-colors">{isRTL ? 'לכל הפוסטים' : 'View All Posts'}</span>
        </motion.a>
    </div>
                </motion.div >

    {/* CTA */ }
    < motion.div
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
className = "text-center"
    >
    <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-magenta to-magenta/80 text-paper rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
    >
        <Instagram className="w-5 h-5" />
        {isRTL ? 'עקבו אחרינו באינסטגרם' : 'Follow Us on Instagram'}
    </a>
                </motion.div >
            </Container >
        </Section >
    );
};

export default BrandSection;
