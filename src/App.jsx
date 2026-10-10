import React, { useState, useEffect } from 'react'
import {
  Compass,
  Sparkles,
  MapPin,
  Activity,
  Globe,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Layers,
  Radio,
  Shield,
  Eye,
  CheckCircle2,
  Calendar,
  Users,
  Send,
  Info,
  Sliders,
  Maximize2,
  Zap,
  Wind,
  Terminal,
  Clock,
  Target,
  UserCheck,
  AlertTriangle,
  TreePine,
  Waves,
  Mountain
} from 'lucide-react'

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null) // 'expedition' | 'discovery-mountains' | 'discovery-forest' | 'discovery-oceans' | 'ecosystem-data'
  const [scrolled, setScrolled] = useState(false)
  const [selectedExpeditionZone, setSelectedExpeditionZone] = useState('Floating Mountains')
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Newsletter form state with validation
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  // Track scroll position for navbar styling & section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'observation', 'discover', 'ecosystem', 'timeline', 'expeditions']
      const scrollPos = window.scrollY + 220
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your interstellar comms ID / email.')
      setNewsletterSuccess(false)
    } else if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Invalid format. Please use name@domain.com')
      setNewsletterSuccess(false)
    } else {
      setNewsletterError('')
      setNewsletterSuccess(true)
      setNewsletterEmail('')
    }
  }

  const handleOpenExpedition = (zone = 'Floating Mountains') => {
    setSelectedExpeditionZone(zone)
    setFormSubmitted(false)
    setActiveModal('expedition')
  }

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-black">

      {/* ==================================================
          1. UNIQUE UNCONVENTIONAL HEADER
          ================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060B18]/95 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-xl shadow-black/40'
            : 'bg-[#060B18]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Minimalist Brand Typography + Index Label */}
            <div className="flex items-center gap-6">
              <a href="#home" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded border border-cyan-400/40 bg-cyan-950/30 flex items-center justify-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-xl tracking-[0.22em] text-white">
                    PANDORA
                  </span>
                  <span className="text-[8px] font-tech text-cyan-400/70 tracking-[0.35em] uppercase -mt-0.5">
                    Beyond The Horizon
                  </span>
                </div>
              </a>

              {/* Decorative index label & thin horizontal rule extending across */}
              <div className="hidden xl:flex items-center gap-3 text-[10px] font-tech text-slate-400 pl-4 border-l border-white/10">
                <span>[ 01 // ORBITAL ARCHIVE ]</span>
                <div className="w-24 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent" />
              </div>
            </div>

            {/* Right: Compact Navigation Group + Status Indicator + Understated Button */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-7 text-xs font-medium tracking-[0.16em] uppercase">
                <a
                  href="#home"
                  className={`editorial-link transition-colors ${
                    activeNav === 'home' ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Home
                </a>
                <a
                  href="#discover"
                  className={`editorial-link transition-colors ${
                    activeNav === 'discover' ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Discover
                </a>
                <a
                  href="#ecosystem"
                  className={`editorial-link transition-colors ${
                    activeNav === 'ecosystem' ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Ecosystem
                </a>
                <a
                  href="#expeditions"
                  className={`editorial-link transition-colors ${
                    activeNav === 'expeditions' || activeNav === 'timeline'
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Expeditions
                </a>
              </nav>

              {/* Thin Vertical Divider */}
              <div className="h-4 w-[1px] bg-white/15" />

              {/* Small Expedition Status Indicator */}
              <div className="flex items-center gap-2 text-[10px] font-tech text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-cyan-300/90 font-mono">SYS ONLINE</span>
              </div>

              {/* Understated Editorial Action Button */}
              <button
                onClick={() => handleOpenExpedition()}
                className="px-4 py-2 rounded border border-cyan-400/40 bg-cyan-950/40 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 text-xs font-tech uppercase tracking-widest transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#060B18]/98 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-tech text-cyan-300">
              <span>EXPEDITION SYSTEM ONLINE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium text-sm tracking-wider uppercase py-1"
            >
              Home
            </a>
            <a
              href="#discover"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium text-sm tracking-wider uppercase py-1"
            >
              Discover
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium text-sm tracking-wider uppercase py-1"
            >
              Ecosystem
            </a>
            <a
              href="#expeditions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium text-sm tracking-wider uppercase py-1"
            >
              Expeditions
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  handleOpenExpedition()
                }}
                className="w-full py-2.5 rounded border border-cyan-400/50 bg-cyan-950 text-cyan-300 text-xs font-tech tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <span>EXPLORE PANDORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ==================================================
          2. ASYMMETRICAL EDITORIAL HERO SECTION
          ================================================== */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Typography, Labels, Action Links */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            
            {/* Small uppercase editorial label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 bg-cyan-400 rounded-sm" />
              <span className="text-[11px] font-tech text-cyan-300 tracking-[0.28em] uppercase font-semibold">
                THE PANDORA EXPERIENCE
              </span>
            </div>

            {/* Headline in Sophisticated Display Font */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300">
                THE KNOWN
              </span>
            </h1>

            {/* Short decorative line */}
            <div className="w-16 h-[2px] bg-cyan-400 mb-6" />

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-md">
              Enter a world where nature, mystery, and imagination exist beyond the boundaries of Earth.
            </p>

            {/* Understated Action Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
              <button
                onClick={() => handleOpenExpedition()}
                id="hero-primary-btn"
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wider text-cyan-300 hover:text-white uppercase transition-colors"
              >
                <span>BEGIN EXPLORATION</span>
                <div className="w-7 h-7 rounded-full border border-cyan-400/40 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              <a
                href="#discover"
                id="hero-secondary-btn"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wider text-slate-400 hover:text-cyan-300 uppercase transition-colors"
              >
                <span>DISCOVER THE WORLD</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Small vertical section index & coordinates */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-tech text-slate-400">
              <span>SECTION 01 / 04</span>
              <span>COORD: 04° 17′ S • 142° 58′ E</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Cinematic Landscape Visual + Overlapping Panels */}
          <div className="lg:col-span-7 relative">
            
            {/* Rotated narrow text element along the top edge */}
            <div className="flex items-center justify-between pb-2 text-[10px] font-tech text-slate-400 uppercase tracking-widest">
              <span>[ SPECTROGRAPHIC OPTICAL TELEMETRY ]</span>
              <span className="text-cyan-400">SECTOR 07 // PANDORA</span>
            </div>

            {/* Main Landscape Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/25 bg-[#020612] shadow-2xl shadow-black/80 group">
              <img
                src="./images/hero.jpg"
                alt="Pandora Cinematic Landscape"
                className="w-full h-[360px] sm:h-[460px] md:h-[520px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />

              {/* Offset Narrow Vertical Text along right edge */}
              <div className="hidden sm:block absolute top-6 right-3 z-20 vertical-lr text-[9px] font-tech text-cyan-300/70 tracking-[0.3em] uppercase py-2 bg-[#060B18]/70 backdrop-blur-md rounded px-1 border border-white/10">
                HIGH LUMINOSITY BIOME • CLASS M
              </div>

              {/* Compact Floating Observation Data Panel (Inside lower-right) */}
              <div className="absolute bottom-5 right-5 z-20 w-60 sm:w-64 rounded-xl p-3.5 bg-[#040A18]/90 backdrop-blur-xl border border-cyan-400/30 text-left text-xs shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <span className="text-[9px] font-tech text-cyan-400 uppercase font-semibold">
                    OBSERVATION DATA
                  </span>
                  <span className="flex items-center gap-1 text-[8.5px] font-tech text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] font-tech">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">LOCATION</span>
                    <span className="text-slate-200">ALPHA CENTAURI</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">ATMOSPHERE</span>
                    <span className="text-cyan-300">BIOLUMINESCENT</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">STATUS</span>
                    <span className="text-emerald-300">READY TO EXPLORE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offset Image Caption Beside/Below */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-tech text-slate-400 text-left">
              <span>Fig. 01 — Floating monolith formations at twilight (Hallelujah Range).</span>
              <span className="text-cyan-400/80">LAT -04.2984° // LNG +142.9011°</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. CUSTOM PLANETARY OBSERVATION MODULE (Almost-Black Background)
          ================================================== */}
      <section
        id="observation"
        className="bg-[#02040A] py-16 border-y border-white/10 text-left relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-[0.25em]">
                SCIENTIFIC TELEMETRY REPORT
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Planetary Observation Matrix
              </h3>
            </div>
            <div className="text-[11px] font-tech text-slate-400">
              SYS PROTOCOL: RDA-9042 // EXPEDITION CLEARANCE LEVEL 04
            </div>
          </div>

          {/* 5-Block Grid Data Layout with Thin Hairline Separators */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-4 border-l border-cyan-400/40 bg-[#050C1F]/40">
              <span className="text-[10px] font-tech text-slate-400 uppercase block mb-1">
                01 // LOCATION
              </span>
              <div className="font-display font-bold text-lg text-white">
                Alpha Centauri
              </div>
              <p className="text-[11px] font-tech text-cyan-400 mt-1">4.37 Light Years</p>
            </div>

            <div className="p-4 border-l border-cyan-400/40 bg-[#050C1F]/40">
              <span className="text-[10px] font-tech text-slate-400 uppercase block mb-1">
                02 // ATMOSPHERE
              </span>
              <div className="font-display font-bold text-lg text-white">
                Bioluminescent
              </div>
              <p className="text-[11px] font-tech text-teal-300 mt-1">1.18 terrestrial bar</p>
            </div>

            <div className="p-4 border-l border-cyan-400/40 bg-[#050C1F]/40">
              <span className="text-[10px] font-tech text-slate-400 uppercase block mb-1">
                03 // STATUS
              </span>
              <div className="font-display font-bold text-lg text-emerald-300">
                Ready to Explore
              </div>
              <p className="text-[11px] font-tech text-slate-400 mt-1">12 Zones Active</p>
            </div>

            <div className="p-4 border-l border-cyan-400/40 bg-[#050C1F]/40">
              <span className="text-[10px] font-tech text-slate-400 uppercase block mb-1">
                04 // SPECIES COUNT
              </span>
              <div className="font-display font-bold text-lg text-white">
                8,420+ Cataloged
              </div>
              <p className="text-[11px] font-tech text-cyan-300 mt-1">Active Neural Nodes</p>
            </div>

            <div className="p-4 border-l border-violet-400/40 bg-[#050C1F]/40 col-span-2 lg:col-span-1">
              <span className="text-[10px] font-tech text-slate-400 uppercase block mb-1">
                05 // BIOSPHERE
              </span>
              <div className="font-display font-bold text-lg text-violet-300">
                96.4% Coverage
              </div>
              <p className="text-[11px] font-tech text-slate-400 mt-1">Synchronized Synapses</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. COMPLEX EDITORIAL IMAGE COLLAGE (Perfect Geometric Alignment)
          ================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left">
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest">
              COLLECTION 01 // VISUAL SURVEY
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
              Planetary Survey Collage
            </h2>
          </div>
          <div className="hidden sm:block text-[11px] font-tech text-slate-400">
            [ ARCHIVAL CAMERA ARRAY A-3 ]
          </div>
        </div>

        {/* Editorial Collage Grid with Synchronized Heights and Clean Baseline Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Element 1: Large Panoramic Planetary Landscape (Col 1-6) */}
          <div className="md:col-span-6 space-y-3 flex flex-col justify-between">
            <div className="rounded-xl overflow-hidden border border-cyan-500/25 bg-[#030816] h-[380px]">
              <img
                src="./images/mountains.jpg"
                alt="Floating Mountains Panoramic View"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="flex justify-between text-[11px] font-tech text-slate-400 px-1 pt-1">
              <span>Plate 01.A — Anti-gravity monolith elevation study (Hallelujah Range).</span>
              <span className="text-cyan-400 font-semibold shrink-0 ml-2">4,200m ALT</span>
            </div>
          </div>

          {/* Element 2: Forest Survey Frame (Col 7-9) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div className="rounded-xl overflow-hidden border border-cyan-500/25 bg-[#030816] h-[380px]">
              <img
                src="./images/forest.jpg"
                alt="Bioluminescent Forest Nocturnal Flora"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="text-[11px] font-tech text-slate-400 px-1 pt-1">
              <span>Plate 01.B — Valley of Moara bioluminescent flora.</span>
            </div>
          </div>

          {/* Element 3: Aquatic Reef Vertical Survey (Col 10-12) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div className="rounded-xl overflow-hidden border border-cyan-500/25 bg-[#030816] h-[380px]">
              <img
                src="./images/oceans.jpg"
                alt="Metkayina Deep Ocean Reef"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="text-[11px] font-tech text-slate-400 px-1 pt-1">
              <span>Plate 01.C — Metkayina reef aquatic organisms.</span>
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          5. DISCOVERY SECTION (3 Intentionally Different Layouts - Blue-Grey Slate Background)
          ================================================== */}
      <section
        id="discover"
        className="bg-[#0B1222] py-24 border-t border-cyan-900/30 relative text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Oversized Numerical Marker */}
          <div className="relative mb-16 pb-6 border-b border-white/10">
            <span className="absolute -top-8 right-4 font-display font-black text-7xl sm:text-9xl text-white/5 pointer-events-none select-none">
              02
            </span>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5" /> PLANETARY REGIONS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              DISCOVER PANDORA
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mt-2">
              Three distinct biomes documented through geological, botanical, and oceanographic research expeditions.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* FEATURE A: Wide Landscape Image with Title Below */}
            <div className="rounded-2xl border border-white/10 bg-[#060D1E]/60 p-6 sm:p-8 space-y-6">
              <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[420px]">
                <img
                  src="./images/mountains.jpg"
                  alt="Floating Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#060B18]/80 backdrop-blur-md border border-white/10 text-[10px] font-tech text-cyan-300 uppercase">
                  REGION 01 // HALLELUJAH RANGE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-7 space-y-2">
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                    FLOATING MOUNTAINS
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Ancient stone formations suspended above an endless sea of clouds. Colossal anti-gravity rock formations engulfed in cascading waterfalls and sacred perpetual mists.
                  </p>
                </div>
                <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <div className="text-xs font-tech text-slate-300 space-y-1">
                    <p className="text-slate-500 uppercase">GEOLOGY METRICS:</p>
                    <p>Altitude: 4,200m • Gravity: 0.78G</p>
                  </div>
                  <button
                    onClick={() => handleOpenExpedition('Floating Mountains')}
                    className="inline-flex items-center gap-2 text-xs font-tech text-cyan-400 hover:text-white uppercase tracking-wider"
                  >
                    <span>Register Expedition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* FEATURE B: Smaller Image with Vertically Aligned Metadata Table (Split Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-[#060D1E]/60 p-6 sm:p-8">
              <div className="lg:col-span-6 rounded-xl overflow-hidden h-[300px] sm:h-[360px] border border-cyan-500/20">
                <img
                  src="./images/forest.jpg"
                  alt="Bioluminescent Forest"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] font-tech text-teal-400 uppercase tracking-widest block mb-1">
                    REGION 02 // VALLEY OF MOARA
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    BIOLUMINESCENT FOREST
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    A living landscape illuminated by extraordinary organic light. A radiant nocturnal canopy illuminated by glowing flora and living light pathways.
                  </p>
                </div>

                {/* Vertically Aligned Metadata Table */}
                <div className="border-t border-b border-white/10 py-3 space-y-2 text-xs font-tech">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">CANOPY HEIGHT</span>
                    <span className="text-white">150 Meters</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">LUMINESCENT INDEX</span>
                    <span className="text-teal-300">98.4% Output</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">NEURAL ROOT DENSITY</span>
                    <span className="text-cyan-300">High (10¹² synapses)</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenExpedition('Bioluminescent Forest')}
                  className="inline-flex items-center gap-2 text-xs font-tech text-teal-300 hover:text-white uppercase tracking-wider"
                >
                  <span>Explore Forest Zone</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* FEATURE C: Text-Led Feature with Large Numerical Identifier */}
            <div className="rounded-2xl border border-white/10 bg-[#060D1E]/60 p-6 sm:p-10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2 text-center lg:text-left">
                  <span className="font-display font-black text-6xl sm:text-8xl text-cyan-400/40">
                    03
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest">
                    REGION 03 // METKAYINA CORAL REEF
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    THE GREAT OCEANS
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Explore the mysterious depths of Pandora's vast aquatic world. Endless crystalline waters teeming with luminescent reefs, deep-sea abyss marvels, and majestic marine life.
                  </p>
                </div>

                <div className="lg:col-span-4 rounded-xl border border-cyan-500/20 p-4 bg-[#030816] text-xs font-tech space-y-2">
                  <div className="text-slate-400 uppercase text-[10px]">OCEANOGRAPHIC SURVEY:</div>
                  <div className="text-white font-medium">Max Depth: 8,400 meters</div>
                  <div className="text-cyan-300">Coral Species: 1,400+ Identified</div>
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenExpedition('The Great Oceans')}
                      className="w-full py-2 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-300 text-[11px] uppercase tracking-wider hover:bg-cyan-400 hover:text-slate-950 transition-colors"
                    >
                      Book Dive Expedition
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. ECOSYSTEM SECTION (Misty-Blue Background Editorial Split)
          ================================================== */}
      <section
        id="ecosystem"
        className="bg-[#0F1B33] py-24 border-t border-cyan-500/20 text-left relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Planetary Image with Floating Image Label */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#060B18] shadow-2xl">
                <img
                  src="./images/ecosystem.jpg"
                  alt="Eywa Neural Tree"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Floating Image Label */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded bg-[#060B18]/85 backdrop-blur-md border border-violet-400/40 text-[10px] font-tech text-violet-300 uppercase">
                EYWA NEURAL NEXUS // SECTOR 03
              </div>

              {/* Technical Data Panel Tag */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#08132B] border border-white/10 grid grid-cols-3 gap-2 text-center text-xs font-tech">
                <div>
                  <span className="text-slate-400 text-[9px] block">OXYGEN LEVEL</span>
                  <span className="text-cyan-300 font-bold">21.4%</span>
                </div>
                <div className="border-x border-white/10">
                  <span className="text-slate-400 text-[9px] block">BIODIVERSITY</span>
                  <span className="text-teal-300 font-bold">EXTREME</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[9px] block">ENERGY SIG</span>
                  <span className="text-violet-300 font-bold">DETECTED</span>
                </div>
              </div>
            </div>

            {/* Right: Content & 3 Distinct Statistics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-tech text-cyan-300 uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5" /> LIVING BIOSPHERE
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
                A WORLD THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300">
                  BREATHES
                </span>
              </h2>

              <p className="text-slate-300 text-base font-light leading-relaxed">
                Discover an extraordinary ecosystem where every living element is connected through an intricate network of life.
              </p>

              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Through electromagnetic root filaments and bioluminescent signatures, life on Pandora communicates in a harmonious electrochemical balance unknown to terrestrial biology.
              </p>

              {/* Three Statistics with Individual Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-[#08132B]/80 border border-white/10">
                  <TreePine className="w-5 h-5 text-cyan-400 mb-2" />
                  <div className="font-display text-2xl font-bold text-white">8,000+</div>
                  <div className="text-[10px] font-tech text-slate-400 uppercase mt-1">Unique Species</div>
                </div>

                <div className="p-4 rounded-xl bg-[#08132B]/80 border border-white/10">
                  <Compass className="w-5 h-5 text-teal-400 mb-2" />
                  <div className="font-display text-2xl font-bold text-white">12</div>
                  <div className="text-[10px] font-tech text-slate-400 uppercase mt-1">Exploration Zones</div>
                </div>

                <div className="p-4 rounded-xl bg-[#08132B]/80 border border-white/10">
                  <Zap className="w-5 h-5 text-violet-400 mb-2" />
                  <div className="font-display text-2xl font-bold text-white">96%</div>
                  <div className="text-[10px] font-tech text-slate-400 uppercase mt-1">Ecosystem Coverage</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveModal('ecosystem-data')}
                  className="px-5 py-2.5 rounded border border-cyan-400/40 bg-cyan-950/40 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 text-xs font-tech uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>VIEW ECOSYSTEM ARCHIVE</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7. MISSION TIMELINE (Dark Navy)
          ================================================== */}
      <section
        id="timeline"
        className="bg-[#060B18] py-20 border-t border-white/10 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest">
                EXPEDITION LIFECYCLE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Mission Progression Timeline
              </h3>
            </div>
            <div className="text-[11px] font-tech text-slate-400">
              4-PHASE DEPLOYMENT PROTOCOL
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl border border-white/10 bg-[#040918] space-y-3">
              <div className="font-display font-black text-3xl text-cyan-400">01</div>
              <div className="text-xs font-tech text-cyan-300 uppercase font-semibold">ARRIVAL</div>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Enter the Pandora system."
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-[#040918] space-y-3">
              <div className="font-display font-black text-3xl text-teal-400">02</div>
              <div className="text-xs font-tech text-teal-300 uppercase font-semibold">DISCOVERY</div>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Explore unfamiliar environments."
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-[#040918] space-y-3">
              <div className="font-display font-black text-3xl text-violet-400">03</div>
              <div className="text-xs font-tech text-violet-300 uppercase font-semibold">CONNECTION</div>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Study the interconnected ecosystem."
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-[#040918] space-y-3">
              <div className="font-display font-black text-3xl text-indigo-400">04</div>
              <div className="text-xs font-tech text-indigo-300 uppercase font-semibold">EXPEDITION</div>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                "Begin your journey into the unknown."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          8. CALL TO ACTION EXPEDITION BANNER (Asymmetrical Split Layout)
          ================================================== */}
      <section
        id="expeditions"
        className="bg-[#050C1F] py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 text-left"
      >
        <div className="max-w-7xl mx-auto rounded-3xl border border-cyan-500/30 bg-[#030816] p-8 sm:p-12 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-[0.25em] block">
                INTERSTELLAR CLEARANCE // WINDOW OPEN
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
                YOUR JOURNEY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300">
                  STARTS HERE
                </span>
              </h2>
              <p className="text-slate-300 text-base font-light max-w-xl">
                Step into the unknown and discover what lies beyond the horizon.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <button
                onClick={() => handleOpenExpedition()}
                id="join-expedition-btn"
                className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-colors shadow-lg shadow-cyan-400/20"
              >
                <span>JOIN AN EXPEDITION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] font-tech text-slate-400 text-center">
                Orbital shuttles depart standard cycle Alpha Centauri A-4
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          9. MULTI-COLUMN EDITORIAL FOOTER
          ================================================== */}
      <footer className="bg-[#02040A] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column (Col 1-4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-cyan-400 rounded-sm" />
              <span className="font-display font-black text-xl tracking-[0.2em] text-white">
                PANDORA
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-light">
              Pioneering the frontiers of interstellar exploration. Connecting humanity with the vibrant wonder of Pandora's bioluminescent living ecosystem.
            </p>
            <div className="pt-2 text-[10px] font-tech text-cyan-400/70">
              RDA Interplanetary Treaty Compliant • Code 9042
            </div>
          </div>

          {/* Navigation Links Column (Col 5-6) */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home Overview</a></li>
              <li><a href="#observation" className="hover:text-cyan-300 transition-colors">Telemetry Matrix</a></li>
              <li><a href="#discover" className="hover:text-cyan-300 transition-colors">Planetary Survey</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-300 transition-colors">Living Biosphere</a></li>
            </ul>
          </div>

          {/* Expeditions Column (Col 7-8) */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider mb-3">
              Expeditions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><button onClick={() => handleOpenExpedition('Floating Mountains')} className="hover:text-cyan-300 transition-colors">Hallelujah Range</button></li>
              <li><button onClick={() => handleOpenExpedition('Bioluminescent Forest')} className="hover:text-cyan-300 transition-colors">Valley of Moara</button></li>
              <li><button onClick={() => handleOpenExpedition('The Great Oceans')} className="hover:text-cyan-300 transition-colors">Metkayina Reefs</button></li>
            </ul>
          </div>

          {/* Working Newsletter Form (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-tech font-bold text-white uppercase tracking-wider mb-2">
              Orbital Dispatches
            </h4>
            <p className="text-slate-400 text-xs font-light">
              Receive real-time atmospheric updates directly from orbit.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value)
                    if (newsletterError) setNewsletterError('')
                  }}
                  placeholder="name@expedition.org"
                  className="flex-1 px-3.5 py-2 rounded bg-[#050C1F] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-tech"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-tech font-bold text-xs uppercase transition-colors"
                >
                  Join
                </button>
              </div>

              {newsletterError && (
                <p className="text-rose-400 text-[10px] font-tech">{newsletterError}</p>
              )}
              {newsletterSuccess && (
                <p className="text-emerald-400 text-[10px] font-tech flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Manifest recorded. Comms active.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-400">
          <p>© 2026 PANDORA Expeditions. All rights reserved. Beyond the Horizon.</p>
          <div className="flex items-center gap-2 text-[10px] text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
        </div>
      </footer>

      {/* ==================================================
          INTERACTIVE MODALS
          ================================================== */}

      {/* EXPEDITION REGISTRATION MODAL */}
      {activeModal === 'expedition' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#060D1E] border border-cyan-400/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <div className="text-left">
                <span className="text-cyan-400 text-[10px] font-tech uppercase tracking-widest block mb-1">
                  CLEARANCE FORM // ALPHA CENTAURI
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Join The Pandora Expedition
                </h3>
                <p className="text-slate-300 text-xs mb-6 font-light">
                  Complete your biosuit configuration and orbital docking manifest.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[10px] font-tech text-slate-400 uppercase mb-1">
                      Explorer Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Commander Jack Sully"
                      className="w-full px-4 py-2.5 rounded bg-[#030816] border border-white/15 text-white focus:outline-none focus:border-cyan-400 text-sm font-tech"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-tech text-slate-400 uppercase mb-1">
                      Primary Destination
                    </label>
                    <select
                      value={selectedExpeditionZone}
                      onChange={(e) => setSelectedExpeditionZone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded bg-[#030816] border border-white/15 text-white focus:outline-none focus:border-cyan-400 text-sm font-tech"
                    >
                      <option value="Floating Mountains">Floating Mountains (Hallelujah Range)</option>
                      <option value="Bioluminescent Forest">Bioluminescent Forest (Valley of Moara)</option>
                      <option value="The Great Oceans">The Great Oceans (Metkayina Reefs)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-tech text-slate-400 uppercase mb-1">
                        Expedition Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2026-11-15"
                        className="w-full px-3 py-2 rounded bg-[#030816] border border-white/15 text-white text-xs font-tech focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-tech text-slate-400 uppercase mb-1">
                        Party Size
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="8"
                        defaultValue="2"
                        className="w-full px-3 py-2 rounded bg-[#030816] border border-white/15 text-white text-xs font-tech focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-display font-bold text-xs tracking-widest uppercase transition-colors"
                  >
                    CONFIRM MANIFEST
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Expedition Cleared
                </h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed">
                  Registration for <span className="text-cyan-300 font-semibold">{selectedExpeditionZone}</span> confirmed. Orbital telemetry coordinates transmitted.
                </p>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 rounded bg-cyan-400 text-slate-950 font-tech font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ECOSYSTEM ARCHIVE DATA MODAL */}
      {activeModal === 'ecosystem-data' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#060D1E] border border-cyan-400/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-cyan-400 text-[10px] font-tech uppercase tracking-widest block mb-1">
              SCIENTIFIC DATA MATRIX // SECTOR 03
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Pandora Planetary Biosphere Metrics
            </h3>

            <div className="space-y-2.5 font-tech text-xs text-slate-300">
              <div className="p-3 rounded bg-[#030816] border border-white/10 flex justify-between">
                <span>ATMOSPHERIC DENSITY</span>
                <span className="text-cyan-300 font-bold">1.18 terrestrial bar</span>
              </div>
              <div className="p-3 rounded bg-[#030816] border border-white/10 flex justify-between">
                <span>NEURAL NODE FREQUENCY</span>
                <span className="text-violet-300 font-bold">432.8 MHz (Resonant)</span>
              </div>
              <div className="p-3 rounded bg-[#030816] border border-white/10 flex justify-between">
                <span>BIOCHEMICAL FLUX</span>
                <span className="text-teal-300 font-bold">Synchronized Synaptic Pulse</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded bg-cyan-400 text-slate-950 font-tech font-bold text-xs uppercase"
              >
                Close Archive
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
