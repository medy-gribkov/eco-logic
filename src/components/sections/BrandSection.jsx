import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { useLanguage } from '../../i18n';

const BrandSection = () => {
    const { isRTL } = useLanguage();

    const socialPosts = [
        {
            image: '/assets/images/social-post-1.jpg',
            caption: isRTL ? 'השפעה בלתי נראית' : 'Invisible Impact',
            likes: '2.4K',
        },
        {
            image: '/assets/images/social-post-2.jpg',
            caption: isRTL ? 'צעד אחד היום' : 'One Step Today',
            likes: '1.8K',
        },
    ];

    return (
        <Section id="brand" spacing="default" className="bg-gradient-to-b from-paper to-green/5">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-6">
                        <Play className="w-4 h-4" />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {isRTL ? 'מדיה' : 'Media'}
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl mb-4">
                        {isRTL ? 'EcoLogic בעולם' : 'EcoLogic in Action'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {isRTL
                            ? 'ראו איך המסר שלנו מגיע לכל מקום'
                            : 'See how our message reaches everywhere'}
                    </p>
                </motion.div>

                {/* Masonry Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
                    {/* Large Billboard - spans 7 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 group"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-paper">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src="/assets/images/billboard.jpg"
                                    alt="EcoLogic Billboard Campaign"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/80 to-transparent p-6">
                                <span className="inline-block bg-green text-paper text-xs font-body uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                                    {isRTL ? 'קמפיין' : 'Campaign'}
                                </span>
                                <h3 className="text-paper font-display text-2xl">
                                    {isRTL ? 'שלט חוצות - תל אביב' : 'Billboard - Tel Aviv'}
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column - stacked items */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        {/* Merch Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group flex-1"
                        >
                            <div className="relative h-full rounded-2xl overflow-hidden shadow-card bg-paper">
                                <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                                    <img
                                        src="/assets/images/merch.png"
                                        alt="EcoLogic Merchandise"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/80 to-transparent p-4">
                                    <span className="text-paper/80 text-sm">
                                        {isRTL ? 'קולקציית מוצרים' : 'Product Collection'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-green text-paper rounded-2xl p-6 flex items-center justify-between"
                        >
                            <div className="text-center">
                                <div className="font-display text-3xl">15K+</div>
                                <div className="text-paper/70 text-sm">{isRTL ? 'עוקבים' : 'Followers'}</div>
                            </div>
                            <div className="w-px h-12 bg-paper/20" />
                            <div className="text-center">
                                <div className="font-display text-3xl">500+</div>
                                <div className="text-paper/70 text-sm">{isRTL ? 'פוסטים' : 'Posts'}</div>
                            </div>
                            <div className="w-px h-12 bg-paper/20" />
                            <div className="text-center">
                                <div className="font-display text-3xl">50K+</div>
                                <div className="text-paper/70 text-sm">{isRTL ? 'לייקים' : 'Likes'}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Social Feed - Horizontal Scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-display text-xl">
                            {isRTL ? 'מהפיד שלנו' : 'From Our Feed'}
                        </h3>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green hover:text-green/80 transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="font-body text-sm">@ecologic.il</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                        {socialPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="flex-shrink-0 w-64 bg-paper rounded-xl shadow-card overflow-hidden cursor-pointer border border-gray/20"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.caption}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-graphite/70 font-medium mb-2">
                                        {post.caption}
                                    </p>
                                    <div className="flex items-center gap-1 text-xs text-graphite/50">
                                        <span>{post.likes}</span>
                                        <span>{isRTL ? 'לייקים' : 'likes'}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Placeholder for more */}
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-64 aspect-square bg-gradient-to-br from-green/10 to-blue/10 rounded-xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray/30 hover:border-green/50 transition-colors cursor-pointer"
                        >
                            <Instagram className="w-8 h-8 text-green/60" />
                            <span className="text-sm text-graphite/60">{isRTL ? 'ראו עוד' : 'See More'}</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
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
                </motion.div>
            </Container>
        </Section>
    );
};

export default BrandSection;
