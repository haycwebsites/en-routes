import { useState, useEffect } from 'react';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useHayc } from '@/hayc/config-context';
import { innerPageHeroImages } from '@/config';
import sedanImg from '@/assets/vehicles/sedan.png';
import minivanImg from '@/assets/vehicles/minivan.png';
import minibusImg from '@/assets/vehicles/minibus.png';
import { ChevronRight, ChevronLeft, Minus, Plus } from 'lucide-react';

// Same locations as Vayo: Athens Airport, Kalamata Airport, Athens, Corinth, ports, Tripoli, Custom
const PICKUP_OPTIONS = [
  'Athens Airport (Eleftherios Venizelos)',
  'Kalamata Airport',
  'Athens',
  'Corinth',
  'Kalamata Port',
  'Patras Port',
  'Piraeus Port',
  'Tripoli',
  'Custom Location',
];

const VEHICLES = [
  {
    id: 'sedan',
    name: 'Sedan (4-seater)',
    type: 'Passenger car',
    capacity: 'Up to 4 passengers',
    image: sedanImg,
  },
  {
    id: 'van',
    name: 'Minivan (7-seater)',
    type: 'Minivan',
    capacity: 'Up to 7 passengers',
    image: minivanImg,
  },
  {
    id: 'minibus',
    name: 'Minibus (9-seater)',
    type: 'Minibus',
    capacity: 'Up to 9 passengers',
    image: minibusImg,
  },
];

export function BookingPage() {
  const { t, config, cp } = useHayc();
  const bc = config.bookingPageConfig;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    returnTrip: false,
    returnPickup: '',
    returnDestination: '',
    returnDate: '',
    returnTime: '',
    adults: 1,
    children: 0,
    vehicleId: '',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  // Brief loading simulation when entering step 2 (like Vayo "Φόρτωση διαθέσιμων οχημάτων...")
  useEffect(() => {
    if (step === 2) {
      setLoadingVehicles(true);
      const t = setTimeout(() => setLoadingVehicles(false), 600);
      return () => clearTimeout(t);
    } else {
      setLoadingVehicles(true);
    }
  }, [step]);

  const steps = [
    { num: 1, label: t(bc.step1) },
    { num: 2, label: t(bc.step2) },
    { num: 3, label: t(bc.step3) },
    { num: 4, label: t(bc.step4) },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep((s) => s + 1);
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      pickup: '',
      destination: '',
      date: '',
      time: '',
      returnTrip: false,
      returnPickup: '',
      returnDestination: '',
      returnDate: '',
      returnTime: '',
      adults: 1,
      children: 0,
      vehicleId: '',
      fullName: '',
      email: '',
      phone: '',
      notes: '',
    });
  };

  if (submitted) {
    return (
      <>
        <PageHero title={t(bc.pageTitle)} titleConfigPath="bookingPageConfig.pageTitle" breadcrumbs={[{ label: t(bc.breadcrumb), configPath: 'bookingPageConfig.breadcrumb' }]} />
        <section className="section-padding">
          <div className="container-custom max-w-lg mx-auto text-center">
            <div className="rounded-lg border border-[var(--gold-500)]/30 bg-gray-900/50 p-8">
              <h2 className="font-serif text-2xl text-[var(--gold-400)] mb-4" {...cp('bookingPageConfig.successTitle')}>{t(bc.successTitle)}</h2>
              <p className="text-white/70 text-sm mb-2" {...cp('bookingPageConfig.bookingNumberLabel')}>{t(bc.bookingNumberLabel)}: —</p>
              <p className="text-white/80 mb-6" {...cp('bookingPageConfig.successMessage')}>{t(bc.successMessage)}</p>
              <Button type="button" className="btn-primary" {...cp('bookingPageConfig.newBooking')} onClick={resetForm}>
                {t(bc.newBooking)}
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title={t(bc.pageTitle)} titleConfigPath="bookingPageConfig.pageTitle" breadcrumbs={[{ label: t(bc.breadcrumb), configPath: 'bookingPageConfig.breadcrumb' }]} backgroundImage={innerPageHeroImages.booking} />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-gray-900/80 shadow-lg px-5 py-6 md:px-8 md:py-8">
            {/* Step indicator – Vayo style: 1 Travel Details • 2 Vehicle Selection • … */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
              {steps.map((s, i) => (
                <span key={s.num} className="flex items-center gap-2">
                  <span className={s.num === step ? 'text-[var(--gold-400)] font-medium' : 'text-white/50'}>
                    {s.num} {s.label}
                  </span>
                  {i < steps.length - 1 && <ChevronRight className="size-4 text-white/30" />}
                </span>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.pickupLabel')}>{t(bc.pickupLabel)} *</Label>
                  <Select value={formData.pickup} onValueChange={(v) => setFormData((f) => ({ ...f, pickup: v }))} required>
                    <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder={t(bc.pickupPlaceholder)} />
                    </SelectTrigger>
                    <SelectContent>
                      {PICKUP_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.destinationLabel')}>{t(bc.destinationLabel)} *</Label>
                  <Select value={formData.destination} onValueChange={(v) => setFormData((f) => ({ ...f, destination: v }))} required>
                    <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder={t(bc.destinationPlaceholder)} />
                    </SelectTrigger>
                    <SelectContent>
                      {PICKUP_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/90" {...cp('bookingPageConfig.dateLabel')}>{t(bc.dateLabel)} *</Label>
                    <Input type="date" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.date} onChange={(e) => setFormData((f) => ({ ...f, date: e.target.value }))} required />
                  </div>
                  <div>
                    <Label className="text-white/90" {...cp('bookingPageConfig.timeLabel')}>{t(bc.timeLabel)} *</Label>
                    <Input type="time" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.time} onChange={(e) => setFormData((f) => ({ ...f, time: e.target.value }))} required />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="return"
                    checked={formData.returnTrip}
                    onChange={(e) => setFormData((f) => ({ ...f, returnTrip: e.target.checked }))}
                    className="rounded border-white/20 bg-white/5 text-[var(--gold-500)]"
                  />
                  <Label htmlFor="return" className="text-white/90" {...cp('bookingPageConfig.returnTripLabel')}>{t(bc.returnTripLabel)}</Label>
                </div>

                {formData.returnTrip && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h3 className="font-medium text-white/90" {...cp('bookingPageConfig.returnSectionTitle')}>{t(bc.returnSectionTitle)}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white/70 text-sm" {...cp('bookingPageConfig.returnPickupLabel')}>{t(bc.returnPickupLabel)} *</Label>
                        <Select value={formData.returnPickup} onValueChange={(v) => setFormData((f) => ({ ...f, returnPickup: v }))} required>
                          <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder={t(bc.pickupPlaceholder)} />
                          </SelectTrigger>
                          <SelectContent>
                            {PICKUP_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm" {...cp('bookingPageConfig.returnDestinationLabel')}>{t(bc.returnDestinationLabel)} *</Label>
                        <Select value={formData.returnDestination} onValueChange={(v) => setFormData((f) => ({ ...f, returnDestination: v }))} required>
                          <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white">
                            <SelectValue placeholder={t(bc.destinationPlaceholder)} />
                          </SelectTrigger>
                          <SelectContent>
                            {PICKUP_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm" {...cp('bookingPageConfig.returnDateLabel')}>{t(bc.returnDateLabel)} *</Label>
                        <Input type="date" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.returnDate} onChange={(e) => setFormData((f) => ({ ...f, returnDate: e.target.value }))} required />
                      </div>
                      <div>
                        <Label className="text-white/70 text-sm" {...cp('bookingPageConfig.returnTimeLabel')}>{t(bc.returnTimeLabel)} *</Label>
                        <Input type="time" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.returnTime} onChange={(e) => setFormData((f) => ({ ...f, returnTime: e.target.value }))} required />
                      </div>
                    </div>
                  </div>
                )}

                {/* Adults / Children – Vayo style with - + buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <Label className="text-white/90" {...cp('bookingPageConfig.adultsLabel')}>{t(bc.adultsLabel)} *</Label>
                    <div className="mt-2 flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-md border-white/20 text-white hover:bg-white/10"
                        onClick={() => setFormData((f) => ({ ...f, adults: Math.max(1, f.adults - 1) }))}
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="text-white font-medium min-w-[2rem] text-center">{formData.adults}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-md border-white/20 text-white hover:bg-white/10"
                        onClick={() => setFormData((f) => ({ ...f, adults: Math.min(20, f.adults + 1) }))}
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-white/90" {...cp('bookingPageConfig.childrenLabel')}>{t(bc.childrenLabel)}</Label>
                    <div className="mt-2 flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-md border-white/20 text-white hover:bg-white/10"
                        onClick={() => setFormData((f) => ({ ...f, children: Math.max(0, f.children - 1) }))}
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="text-white font-medium min-w-[2rem] text-center">{formData.children}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="rounded-md border-white/20 text-white hover:bg-white/10"
                        onClick={() => setFormData((f) => ({ ...f, children: Math.min(20, f.children + 1) }))}
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {loadingVehicles ? (
                  <p className="text-white/70" {...cp('bookingPageConfig.loadingVehicles')}>
                    {t(bc.loadingVehicles)}
                  </p>
                ) : VEHICLES.length === 0 ? (
                  <p className="text-white/70" {...cp('bookingPageConfig.noVehiclesFound')}>
                    {t(bc.noVehiclesFound)}
                  </p>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {VEHICLES.map((v) => {
                      const selected = formData.vehicleId === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() =>
                            setFormData((f) => ({
                              ...f,
                              vehicleId: v.id,
                            }))
                          }
                          className={
                            'text-left rounded-xl border bg-gray-900/70 hover:bg-gray-900 transition-all flex flex-col sm:flex-row gap-4 overflow-hidden' +
                            (selected
                              ? ' border-[var(--gold-500)] shadow-[0_0_0_1px_rgba(212,164,86,0.6)]'
                              : ' border-white/10 hover:border-[var(--gold-500)]/40')
                          }
                        >
                          <div className="sm:w-40 bg-gray-800 flex items-center justify-center">
                            <img
                              src={v.image}
                              alt={v.name}
                              className="h-24 w-full object-contain object-center"
                            />
                          </div>
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <div className="space-y-1">
                              <h3 className="font-serif text-lg text-white">{v.name}</h3>
                              <p className="text-sm text-white/60">{v.type}</p>
                              <p className="text-sm text-white/70">{v.capacity}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="text-xs uppercase tracking-wide text-white/50">
                                {selected ? 'Selected vehicle' : 'Tap to select'}
                              </span>
                              <span
                                className={
                                  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ' +
                                  (selected
                                    ? 'bg-[var(--gold-500)] text-black'
                                    : 'bg-white/5 text-white/80')
                                }
                              >
                                {selected ? 'Selected' : 'Select'}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.fullNameLabel')}>{t(bc.fullNameLabel)} *</Label>
                  <Input className="mt-2 bg-white/5 border-white/10 text-white" value={formData.fullName} onChange={(e) => setFormData((f) => ({ ...f, fullName: e.target.value }))} required />
                </div>
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.emailLabel')}>{t(bc.emailLabel)} *</Label>
                  <Input type="email" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.email} onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))} required />
                </div>
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.phoneLabel')}>{t(bc.phoneLabel)} *</Label>
                  <Input type="tel" className="mt-2 bg-white/5 border-white/10 text-white" value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))} required />
                </div>
                <div>
                  <Label className="text-white/90" {...cp('bookingPageConfig.notesLabel')}>{t(bc.notesLabel)}</Label>
                  <Textarea className="mt-2 bg-white/5 border-white/10 text-white min-h-[100px]" value={formData.notes} onChange={(e) => setFormData((f) => ({ ...f, notes: e.target.value }))} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="rounded-lg border border-white/10 bg-gray-900/50 p-6 space-y-3 text-white/90">
                <p><strong>{t(bc.pickupLabel)} → {t(bc.destinationLabel)}:</strong> {formData.pickup || '—'} → {formData.destination || '—'}</p>
                <p><strong>{t(bc.dateLabel)} &amp; {t(bc.timeLabel)}:</strong> {formData.date} {formData.time}</p>
                <p><strong>{t(bc.passengersLabel)}:</strong> {formData.adults} adults, {formData.children} children</p>
                <p><strong>Vehicle:</strong> {VEHICLES.find((v) => v.id === formData.vehicleId)?.name ?? '—'}</p>
                <p><strong>{t(bc.priceLabel)}:</strong> {t(bc.priceOnRequest)}</p>
                <hr className="border-white/10" />
                <p><strong>{t(bc.fullNameLabel)}:</strong> {formData.fullName}</p>
                <p><strong>{t(bc.emailLabel)}:</strong> {formData.email}</p>
                <p><strong>{t(bc.phoneLabel)}:</strong> {formData.phone}</p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 ? (
                <Button type="button" variant="outline" className="btn-dark" onClick={() => setStep((s) => s - 1)}>
                  <ChevronLeft className="size-4 mr-1" /> {t(bc.prevStep)}
                </Button>
              ) : null}
              <Button type="submit" className="btn-primary">
                {step < 4 ? <>{t(bc.nextStep)} <ChevronRight className="size-4 ml-1" /></> : t(bc.submitBooking)}
              </Button>
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
