import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Package, User, MapPin, CreditCard, PartyPopper } from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../i18n';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;
    const BackArrow = isRTL ? ArrowRight : ArrowLeft;
    const { items, subtotal, clearCart } = useCart();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        notes: ''
    });
    const [orderComplete, setOrderComplete] = useState(false);

    const steps = [
        { id: 1, icon: Package, label: { he: 'סיכום', en: 'Summary' } },
        { id: 2, icon: User, label: { he: 'פרטים', en: 'Details' } },
        { id: 3, icon: MapPin, label: { he: 'משלוח', en: 'Shipping' } },
        { id: 4, icon: CreditCard, label: { he: 'תשלום', en: 'Payment' } }
    ];

    const hasPhysicalItems = items.some(item => item.type === 'product');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Mock order completion
        setOrderComplete(true);
        clearCart();
    };

    const canProceed = () => {
        if (step === 1) return items.length > 0;
        if (step === 2) return formData.firstName && formData.email;
        if (step === 3) return !hasPhysicalItems || (formData.address && formData.city);
        return true;
    };

    if (orderComplete) {
        return (
            <div className="min-h-screen bg-paper py-12">
                <Container size="small">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <PartyPopper className="w-12 h-12 text-green" />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                            {language === 'he' ? 'תודה על ההזמנה!' : 'Thank you for your order!'}
                        </h1>
                        <p className="text-xl text-graphite/70 mb-8 max-w-md mx-auto">
                            {language === 'he'
                                ? 'קיבלנו את ההזמנה שלך ונהיה בקשר בקרוב.'
                                : 'We received your order and will be in touch soon.'}
                        </p>
                        <p className="text-sm text-graphite/50 mb-8">
                            {language === 'he'
                                ? '💚 כל התמיכה שלכם חוזרת לפעילות חינוכית'
                                : '💚 All your support goes back to educational activities'}
                        </p>
                        <Button
                            onClick={() => navigate('/')}
                            className="bg-green hover:bg-green/90"
                        >
                            {language === 'he' ? 'חזרה לדף הבית' : 'Back to Home'}
                        </Button>
                    </motion.div>
                </Container>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-paper py-12">
                <Container size="small">
                    <div className="text-center py-16">
                        <Package className="w-16 h-16 text-sand mx-auto mb-4" />
                        <h1 className="font-display text-3xl mb-4 text-graphite">
                            {language === 'he' ? 'הסל ריק' : 'Your cart is empty'}
                        </h1>
                        <Button
                            onClick={() => navigate('/')}
                            variant="outline"
                        >
                            <BackArrow className="w-4 h-4 me-2" />
                            {language === 'he' ? 'המשך לגלוש' : 'Continue browsing'}
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-paper py-12">
            <Container>
                {/* Back button */}
                <button
                    onClick={() => step > 1 ? setStep(step - 1) : navigate('/')}
                    className="flex items-center gap-2 text-graphite/60 hover:text-graphite mb-8 transition-colors"
                >
                    <BackArrow className="w-4 h-4" />
                    {step > 1
                        ? (language === 'he' ? 'חזרה' : 'Back')
                        : (language === 'he' ? 'המשך לגלוש' : 'Continue browsing')
                    }
                </button>

                {/* Progress Steps */}
                <div className="flex justify-center gap-4 mb-12">
                    {steps.map(({ id, icon: Icon, label }) => {
                        const isActive = step === id;
                        const isComplete = step > id;

                        return (
                            <div key={id} className="flex items-center gap-2">
                                <div className={`
                                    w-10 h-10 rounded-full flex items-center justify-center transition-all
                                    ${isComplete ? 'bg-green text-paper' :
                                        isActive ? 'bg-green/20 text-green border-2 border-green' :
                                            'bg-sand text-graphite/40'}
                                `}>
                                    {isComplete ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                                </div>
                                <span className={`hidden md:block font-body text-sm ${isActive ? 'text-graphite' : 'text-graphite/40'}`}>
                                    {label[language]}
                                </span>
                                {id < 4 && <div className="w-8 h-px bg-sand hidden md:block" />}
                            </div>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-[1fr,380px] gap-8">
                    {/* Main Content */}
                    <Card className="p-8">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h2 className="font-display text-2xl mb-6 text-graphite">
                                    {language === 'he' ? 'סיכום הזמנה' : 'Order Summary'}
                                </h2>
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={`${item.type}-${item.id}`} className="flex gap-4 p-4 bg-sand/30 rounded-xl">
                                            <div className="w-16 h-16 bg-paper rounded-lg flex items-center justify-center overflow-hidden border border-sand">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-2xl">{item.icon || '📦'}</span>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-display text-graphite">{item.name}</h3>
                                                <span className="text-sm text-graphite/50">
                                                    {language === 'he' ? `כמות: ${item.quantity}` : `Qty: ${item.quantity}`}
                                                </span>
                                            </div>
                                            <div className="font-display text-green">₪{item.price * item.quantity}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h2 className="font-display text-2xl mb-6 text-graphite">
                                    {language === 'he' ? 'פרטי יצירת קשר' : 'Contact Information'}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-graphite/70 mb-2">
                                            {language === 'he' ? 'שם פרטי *' : 'First Name *'}
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-graphite/70 mb-2">
                                            {language === 'he' ? 'שם משפחה' : 'Last Name'}
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-graphite/70 mb-2">
                                            {language === 'he' ? 'אימייל *' : 'Email *'}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-graphite/70 mb-2">
                                            {language === 'he' ? 'טלפון' : 'Phone'}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h2 className="font-display text-2xl mb-6 text-graphite">
                                    {language === 'he' ? 'פרטי משלוח' : 'Shipping Details'}
                                </h2>
                                {!hasPhysicalItems ? (
                                    <div className="text-center py-8 bg-green/5 rounded-xl border border-green/20">
                                        <Package className="w-12 h-12 text-green mx-auto mb-4" />
                                        <p className="text-graphite/70">
                                            {language === 'he'
                                                ? 'ההזמנה שלך כוללת רק מוצרים דיגיטליים - לא נדרש משלוח!'
                                                : 'Your order contains only digital products - no shipping required!'}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-graphite/70 mb-2">
                                                {language === 'he' ? 'כתובת *' : 'Address *'}
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-graphite/70 mb-2">
                                                    {language === 'he' ? 'עיר *' : 'City *'}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-graphite/70 mb-2">
                                                    {language === 'he' ? 'מיקוד' : 'Zip Code'}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="zipCode"
                                                    value={formData.zipCode}
                                                    onChange={handleInputChange}
                                                    className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h2 className="font-display text-2xl mb-6 text-graphite">
                                    {language === 'he' ? 'אישור הזמנה' : 'Confirm Order'}
                                </h2>
                                <div className="bg-sand/30 rounded-xl p-6 mb-6">
                                    <p className="text-graphite/70 mb-4">
                                        {language === 'he'
                                            ? 'זוהי הזמנה לדוגמה בלבד. במערכת אמיתית, כאן יופיעו אפשרויות תשלום.'
                                            : 'This is a demo order only. In a real system, payment options would appear here.'}
                                    </p>
                                    <div className="flex items-center gap-3 text-green">
                                        <Check className="w-5 h-5" />
                                        <span>
                                            {language === 'he' ? 'מוכן לאישור' : 'Ready to confirm'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-graphite/70 mb-2">
                                        {language === 'he' ? 'הערות להזמנה' : 'Order Notes'}
                                    </label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full p-3 border border-sand rounded-lg focus:border-green focus:outline-none transition-colors resize-none"
                                        placeholder={language === 'he' ? 'הערות מיוחדות...' : 'Special notes...'}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </Card>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="font-display text-xl mb-4 text-graphite">
                                {language === 'he' ? 'סיכום' : 'Summary'}
                            </h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-graphite/70">
                                    <span>{language === 'he' ? 'סה״כ פריטים' : 'Items'}</span>
                                    <span>{items.reduce((sum, i) => sum + i.quantity, 0)}</span>
                                </div>
                                <div className="flex justify-between text-graphite/70">
                                    <span>{language === 'he' ? 'סכום ביניים' : 'Subtotal'}</span>
                                    <span>₪{subtotal}</span>
                                </div>
                                {hasPhysicalItems && (
                                    <div className="flex justify-between text-graphite/70">
                                        <span>{language === 'he' ? 'משלוח' : 'Shipping'}</span>
                                        <span>{language === 'he' ? 'חינם' : 'Free'}</span>
                                    </div>
                                )}
                                <div className="border-t border-sand pt-3 flex justify-between font-display text-xl text-graphite">
                                    <span>{language === 'he' ? 'סה״כ' : 'Total'}</span>
                                    <span className="text-green">₪{subtotal}</span>
                                </div>
                            </div>

                            <Button
                                onClick={() => step < 4 ? setStep(step + 1) : handleSubmit()}
                                disabled={!canProceed()}
                                className="w-full py-4 bg-green hover:bg-green/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {step < 4
                                    ? (language === 'he' ? 'המשך' : 'Continue')
                                    : (language === 'he' ? 'אישור הזמנה' : 'Confirm Order')
                                }
                                <Arrow className="w-5 h-5" />
                            </Button>
                        </Card>

                        {/* Non-profit note */}
                        <div className="text-center text-sm text-graphite/50">
                            <p>💚 {language === 'he' ? 'ארגון ללא מטרות רווח' : 'Non-profit organization'}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CheckoutPage;
