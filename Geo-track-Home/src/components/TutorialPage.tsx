import React, { useState, useEffect } from 'react';
import {
  UserPlus,
  Settings,
  Shield,
  CreditCard,
  Play,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  MapPin,
  MapPinned,
  Navigation,
  Users,
  FileText,
  CheckCircle2,
  UserCircle,
  Route,
  Activity,
} from 'lucide-react';
import { motion } from 'motion/react';


import logoImage from "../assets/geotrack.png";

import app_launch from "./assets1/app_launch.png";
import login from "./assets1/login.png";
import access from "./assets1/access.png";
import allow from "./assets1/allow.png";
import map_screen from "./assets1/map_screen.png";
import start_meeting from "./assets1/start_meeting.png"; 
import meeting_notes from "./assets1/meeting_notes.png";
import end_meeting from "./assets1/end_meeting.png";
import client_details from "./assets1/client_details.png";
import focus_marker from "./assets1/focus_marker.png";
import client_screen from "./assets1/client_screen.png";
import add_client from "./assets1/add_client.png";
import activity from "./assets1/activity.png";
import profile_screen from "./assets1/profile_screen.png";
import sign_out from "./assets1/sign_out.png";
import trip_details from "./assets1/trip_details.png";
import single_leg_1 from "./assets1/single_leg_1.png";
import single_leg_2 from "./assets1/single_leg_2.png";
import single_leg_3 from "./assets1/single_leg_3.png";
import multi_leg_trip_1 from "./assets1/multi_leg_trip_1.png";
import multi_leg_trip_2 from "./assets1/multi_leg_trip_2.png";
import multi_leg_trip_3 from "./assets1/multi_leg_trip_3.png";
import meeting_details from "./assets1/meeting_details.png";


import { TutorialVideo } from './TutorialVideo';
import { Footer} from './Footer';

const tutorialSections = [
  {
    sectionId: 1,
    sectionTitle: '1. Sign-In & Account Creation',
    sectionDescription: 'Get started by creating your account and setting up your profile',
    steps: [
      {
        number: 1,
        title: 'Launch the Application',
        description: 'Open the GeoTrack app on your mobile device.',
        icon: UserPlus,
        iconColor: 'rgb(59, 130, 246)',
        image: app_launch,
      },
      {
        number: 2,
        title: 'Sign In / Sign Up',
        description: 'Enter the domain email ID provided by the admin (Example: username@companydomain.com) and password. Tap Sign In.',
        details: [
          'Enter admin-provided domain email',
          'Enter password',
          'For new users, select Create Account',
          'Sign-up allowed only with admin-approved domain email',
        ],
        warning: {
          title: 'Email & Domain Validation Rules',
          points: [
            'Generic email services (Gmail, Yahoo, Outlook) are detected as Trial Accounts',
            'Trial users can only view the app - core features disabled',
            'Admin-approved domain email is mandatory',
            'Full app access enabled only after domain validation',
          ],
        },
        icon: Shield,
        iconColor: 'rgb(29, 78, 216)',
        image: login,
        
      },
      {
        number: 3,
        title: 'Background Location Access',
        description: 'After successful sign-in, the app will request background location permission.',
        details: [
          'Show nearby clients',
          'Track visit history',
          'Verify your working area automatically',
        ],
        icon: MapPin,
        iconColor: 'rgb(6, 182, 212)',
        image: access,
      },
    ],
  },
  {
    sectionId: 2,
    sectionTitle: '2. Permission Setup',
    sectionDescription: 'Allow necessary permissions for seamless app functionality',
    steps: [
      {
        number: 5,
        title: 'Allow Required Services',
        description: 'To ensure smooth functioning, allow the following permissions:',
        details: [
          'Location (Always Allow)',
          'Camera (for document & card scanning)',
          'Gallery (file attachments)',
          'Notifications (meeting & trip alerts)',
          'Storage (receipts & notes)',
        ],
        warning: {
          title: 'Important',
          points: ['Without these permissions, some features may not work correctly.'],
        },
        icon: Settings,
        iconColor: 'rgb(34, 197, 94)',
        image: allow,
      },
    ],
  },
  {
    sectionId: 3,
    sectionTitle: '3.Map Screen & Client Tracking',
    sectionDescription: 'View your location and track nearby clients on the map',
    steps: [
      {
        number: 6,
        title: 'View Your Location & Nearby Clients',
        description: 'The map displays your current location. Nearby clients are shown using colored markers.',
        details: [
          'Red – Client not visited',
          'Green – Client visited',
        ],
        icon: MapPinned,
        iconColor: 'rgb(249, 115, 22)',
        image: map_screen,
      },
      {
        number: 7,
        title: 'Click on Client Marker',
        description: 'On tapping a client marker, you can view client details and start a meeting with the client.',
        icon: Navigation,
        iconColor: 'rgb(239, 68, 68)',
        image: start_meeting,
      },
    ],
  },
  {
    sectionId: 4,
    sectionTitle: '4. Meeting Management',
    sectionDescription: 'Start, manage, and complete client meetings efficiently',
    steps: [
      {
        number: 8,
        title: 'Start Meeting',
        description: 'When Start Meeting is selected, view client location, phone number, meeting start time & duration.',
        details: [
          'Active – Client discussion in progress',
          'Completed – Client interested / deal done',
          'Inactive – Client not interested',
        ],
        icon: Users,
        iconColor: 'rgb(168, 85, 247)',
        image: meeting_details,
      },
      {
        number: 9,
        title: 'During the Meeting',
        description: 'Add meeting notes, attach documents, images, or files, and update meeting outcomes in real time.',
        icon: FileText,
        iconColor: 'rgb(79, 70, 229)',
        image: meeting_notes,
      },
      {
        number: 10,
        title: 'End Meeting',
        description: 'Tap End Meeting. Client status automatically updates from Active → Inactive/Completed. Notes and attachments are securely saved.',
        icon: CheckCircle2,
        iconColor: 'rgb(34, 197, 94)',
        image: end_meeting,
      },
    ],
  },
  {
    sectionId: 5,
    sectionTitle: '5. Client Detail View',
    sectionDescription: 'Access complete client information and history',
    steps: [
      {
        number: 11,
        title: 'View Client Details',
        description: 'From the client screen or map, view client status, last visited date & history, contact information (Email, Address, Coordinates), meeting notes & attachments, and client location highlighted on the map.',
        icon: UserCircle,
        iconColor: 'rgb(59, 130, 246)',
        image: client_details,
      },
    ],
  },
  {
    sectionId: 6,
    sectionTitle: '6. Trip & Expense Management',
    sectionDescription: 'Track your trips and manage expenses efficiently',
    steps: [
      {
        number: 12,
        title: 'Choose Trip Type',
        description: 'Select between Single Trip (one-way journey, single transport mode) or Multi-Leg Trip (multiple journeys, different transport modes in one trip).',
        icon: Route,
        iconColor: 'rgb(34, 197, 94)',
        image: trip_details
      },
     {
        number: 13,
        title: 'Single Trip Entry',
        description: 'Fill in start location, end location, date & time, distance, transport mode (Bus/Train/Bike/Rickshaw), expense details, and upload receipts.',
        details: [
          'Start & end location',
          'Date & time',
          'Distance',
          'Transport mode',
          'Amount spent',
          'Upload receipts',
        ],
        icon: MapPin,
        iconColor: 'rgb(13, 148, 136)',
        multiImages: true,
        images: [single_leg_1, single_leg_2, single_leg_3],
      },
      {
        number: 14,
        title: 'Multi-Leg Trip Entry',
        description: 'Enter trip name, multiple journey legs with start/end location, distance, transport mode, amount spent, notes, and attach receipts. View total legs, distance, and expense amount.',
        icon: CreditCard,
        iconColor: 'rgb(249, 115, 22)',
        multiImages: true,
        images: [multi_leg_trip_1, multi_leg_trip_2, multi_leg_trip_3],
      },
    ],
  },
  {
    sectionId: 7, 
    sectionTitle: '7. Client Marker Status on Map',
    sectionDescription: 'Client markers on map indicate visit status and priority.',
    steps: [
      {
        number: 15,
        title: 'Client Marker Status on Map',
        description: 'Client markers on map indicate visit status and priority.',
        details: [
          'Red – Never visited (shows client count)',
          'Green – Recently visited (shows visit count)',
          'Yellow – Follow-up required soon',
          'Orange – Overdue visit',
        ],
        icon: MapPin,
        iconColor: 'rgb(239, 68, 68)',
        image: focus_marker,
      },
    ],
  },
  {
    sectionId: 8,
    sectionTitle: 'Client Screen',
    sectionDescription: 'Manage and organize all your clients in one place',
    steps: [
      {
        number: 16,
        title: 'View All Clients',
        description: 'Clients are categorized as All, Active, Inactive, and Completed. Search by name, sort by distance, and filter by status.',
        details: [
          'Search by client name',
          'Sort by nearest distance',
          'Filter by client status',
          'View client name, email, phone, distance',
        ],
        icon: Users,
        iconColor: 'rgb(168, 85, 247)',
        image: client_screen,
      },
      {
        number: 17,
        title: 'Add New Client',
        description: 'Tap Add Client and choose Quick Fill (scan business card to auto-populate) or Manual Entry (client name, phone, email, address, pincode, notes).',
        icon: UserPlus,
        iconColor: 'rgb(79, 70, 229)',
        image: add_client,
      },
    ],
  },
  {
    sectionId: 9,
    sectionTitle: '9. Activity Screen',
    sectionDescription: 'Track all your activities and movements',
    steps: [
      {
        number: 18,
        title: 'View Activity Logs',
        description: 'Displays total number of activities, date & time, latitude & longitude, location coordinates, and distance traveled.',
        icon: Activity,
        iconColor: 'rgb(59, 130, 246)',
        image: activity,
      },
    ],
  },
  {
    sectionId: 10,
    sectionTitle: '10. Profile & Settings',
    sectionDescription: 'Manage your account preferences and information',
    steps: [
      {
        number: 19,
        title: 'Profile Information',
        description: 'View & edit profile name, User/Employee ID, and view total expenses incurred.',
        icon: UserCircle,
        iconColor: 'rgb(34, 197, 94)',
        image: profile_screen,
      },
      {
        number: 20,
        title: 'Account Settings',
        description: 'Enable/disable background location tracking, view registered email and member since date. Tap Sign Out to exit the app securely.',
        icon: Settings,
        iconColor: 'rgb(13, 148, 136)',
        image: sign_out,
      },
    ],
  },
];

export default function TutorialPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const updated = { ...prev };
        tutorialSections.forEach((section) => {
          section.steps.forEach((step) => {
            if (step.multiImages && step.images) {
              const currentIndex = updated[step.number] ?? 0;
              updated[step.number] = (currentIndex + 1) % step.images.length;
            }
          });
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCardInteraction = (stepNumber: number) => {
    if (isMobile) {
      setActiveCard(activeCard === stepNumber ? null : stepNumber);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 40%, #ffffff 100%)',
        position: 'relative',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(224,247,250,0.3) 0%, rgba(255,255,255,0) 50%)',
            opacity: 0.6,
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <section
          style={{
            padding: isMobile ? '2rem 1rem' : isTablet ? '2.5rem 1.5rem' : '3rem 1.5rem',
            minHeight: isMobile ? 'auto' : '500px',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #ecfeff 100%)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              width: '100%',
              padding: isMobile ? '0 0.5rem' : '0 1.5rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1.1fr 0.9fr',
                gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                alignItems: 'center',
              }}
            >
              {/* LEFT: Text Content */}
              <div style={{ maxWidth: isMobile ? '100%' : '650px' }}>
                {/* ✅ Animated H1 with Logo */}
                <motion.h1
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    lineHeight: isMobile ? '38px' : isTablet ? '46px' : '58px',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {/* ✅ Logo Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: isMobile ? '1rem' : '1.5rem',
                    }}
                  >
                    <img
                      src={logoImage}
                      alt="Geotrack Logo"
                      style={{
                        width: isMobile ? '5rem' : isTablet ? '6rem' : '7.5rem',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  </motion.div>

                  {/* ✅ Title Text */}
                  <span style={{ color: 'rgb(6, 182, 212)', fontWeight: 900 }}>Explore Geotrack</span>{' '}
                  <span style={{ color: '#0F172A' }}>with Detailed Step-by-Step Tutorials</span>
                </motion.h1>

                {/* ✅ Animated Description */}
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 400,
                    color: '#475569',
                    marginBottom: '1.5rem',
                    lineHeight: isMobile ? '22px' : '26px',
                  }}
                >
                  Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials
                  covering setup, configuration, and advanced features.
                </motion.p>

                {/* ✅ Feature List - Staggered Animation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    'Quick start guides for instant setup',
                    'Advanced feature walkthroughs',
                    'How it works steps for smooth onboarding',
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
                    >
                      <div
                        style={{
                          width: isMobile ? '1.75rem' : '2.25rem',
                          height: isMobile ? '1.75rem' : '2.25rem',
                          borderRadius: '0.5rem',
                          background: 'rgba(6, 182, 212, 0.15)',
                          border: '2px solid rgb(6, 182, 212)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle
                          style={{
                            width: isMobile ? '1rem' : '1.25rem',
                            height: isMobile ? '1rem' : '1.25rem',
                            color: 'rgb(6, 182, 212)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: isMobile ? '14px' : '16px',
                          fontWeight: 500,
                          color: '#475569',
                          lineHeight: isMobile ? '22px' : '26px',
                        }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* RIGHT: Enhanced Video Card */}
              <motion.div
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                animate={isMobile ? {} : { y: [0, -12, 0] }}
                transition={
                  isMobile
                    ? {}
                    : {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              >
                <TutorialVideo />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tutorial Section Header */}
        <section
          style={{
            padding: isMobile ? '1.5rem 1rem 1rem' : '2rem 1.5rem 1.5rem',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), #f8fafc)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              textAlign: 'center',
              padding: isMobile ? '0 0.5rem' : '0 1.5rem',
            }}
          >
            <h2
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
                fontWeight: 700,
                color: 'rgb(20, 47, 83)',
                marginBottom: '0.65rem',
                lineHeight: isMobile ? '32px' : isTablet ? '38px' : '46px',
              }}
            >
              Complete Step-by-Step Guide
            </h2>

            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: isMobile ? '14px' : '16px',
                color: '#475569',
                maxWidth: '720px',
                margin: '0 auto',
                lineHeight: isMobile ? '22px' : '26px',
                fontWeight: 400,
              }}
            >
              Master Geotrack with our comprehensive guide covering every feature from sign-up to advanced functionality
            </p>
          </div>
        </section>

        <section style={{ padding: isMobile ? '2rem 0.5rem' : isTablet ? '2.5rem 1rem' : '3rem 1rem' }}>
          <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
            {tutorialSections.map((section) => (
              <div key={section.sectionId} style={{ marginBottom: '0.5rem' }}>
                <h3
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
                    fontWeight: 700,
                    color: 'rgb(20, 47, 83)',
                    padding: isMobile ? '0 0.5rem' : '0',
                  }}
                >
                  {section.sectionTitle}
                </h3>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontSize: isMobile ? '13px' : '15px',
                    padding: isMobile ? '0 0.5rem' : '0',
                  }}
                >
                  {section.sectionDescription}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingTop: '2rem',
                    gap: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '3rem',
                    paddingInline: isMobile ? '0' : isTablet ? '1.5rem' : '2rem',

                  }}
                >
                  {section.steps.map((step, stepIndex) => {
                    const Icon = step.icon;
                    const isHovered = hoveredCard === step.number;
                    const isActive = activeCard === step.number;
                    const showPopup = isMobile ? isActive : isHovered;

                    const images = step.multiImages ? step.images : [step.image];

                    return (
                      <div
                        key={step.number}
                        onMouseEnter={() => !isMobile && setHoveredCard(step.number)}
                        onMouseLeave={() => !isMobile && setHoveredCard(null)}
                        onClick={() => handleCardInteraction(step.number)}
                        style={{
                          position: 'relative',
                          width: isMobile ? '95%' : isTablet ? 'calc(50% - 1.5rem)' : '340px',
                          maxWidth: isMobile ? '400px' : 'none',
                          perspective: '1200px',
                          margin: '0 auto',
                          cursor: isMobile ? 'pointer' : 'default',
                        }}
                      >
                        {/* Staggered Animation Wrapper */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: 'easeOut',
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
>
  <div
    style={{
      position: 'relative',
      overflow: 'visible',
    }}
  >
    <div style={{ transition: 'transform 0.25s ease' }}>
      <motion.img
        key={activeImageIndex[step.number] ?? 0}
        src={images[activeImageIndex[step.number] ?? 0]}
        alt={step.title}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: isMobile ? 'auto' : isTablet ? '600px' : '680px',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>

                          {/* POPUP DESCRIPTION */}
                          {showPopup && (
                            <motion.div
                              initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                              transition={{ duration: 0.25 }}
                              style={{
                                position: isMobile ? 'relative' : 'fixed',
                                top: isMobile ? 'auto' : '50%',
                                left: isMobile ? 'auto' : '50%',
                                transform: isMobile ? 'none' : 'translate(-50%, -50%)',
                                width: isMobile ? '100%' : isTablet ? '300px' : '320px',
                                background: 'rgba(15, 23, 42, 0.95)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '1.25rem',
                                padding: isMobile ? '1.25rem' : '1.5rem',
                                boxShadow: isMobile
                                  ? '0 10px 30px rgba(0,0,0,0.4)'
                                  : '0 30px 60px rgba(0,0,0,0.6)',
                                color: 'white',
                                zIndex: isMobile ? 10 : 99999,
                                pointerEvents: isMobile ? 'auto' : 'none',
                                whiteSpace: 'normal',
                                wordWrap: 'break-word',
                                marginTop: isMobile ? '1rem' : '0',
                              }}
                            >
                              {/* STEP NUMBER BADGE */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-14px',
                                  left: '-14px',
                                  width: isMobile ? '36px' : '42px',
                                  height: isMobile ? '36px' : '42px',
                                  borderRadius: '50%',
                                  background: step.iconColor,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                                  fontWeight: 800,
                                  color: 'white',
                                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                                }}
                              >
                                {step.number}
                              </div>
                              <div
                                style={{
                                  width: isMobile ? '2.5rem' : '3rem',
                                  height: isMobile ? '2.5rem' : '3rem',
                                  borderRadius: '0.75rem',
                                  background: step.iconColor,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginBottom: '0.75rem',
                                }}
                              >
                                <Icon color="white" size={isMobile ? 18 : 22} />
                              </div>

                              <h4
                                style={{
                                  fontSize: isMobile ? '1rem' : '1.1rem',
                                  fontWeight: 700,
                                  marginBottom: '0.5rem',
                                }}
                              >
                                {step.title}
                              </h4>

                              <p
                                style={{
                                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                                  color: 'rgba(255,255,255,0.85)',
                                  lineHeight: 1.6,
                                }}
                              >
                                {step.description}
                              </p>

                              {step.details && (
                                <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                                  {step.details.map((d, i) => (
                                    <li
                                      key={i}
                                      style={{
                                        fontSize: isMobile ? '0.75rem' : '0.8rem',
                                        color: 'rgba(255,255,255,0.75)',
                                        marginBottom: '0.35rem',
                                      }}
                                    >
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              )}  
                            </motion.div>
                          )}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1.25rem',
            marginBottom: '2.5rem',
            padding: isMobile ? '0 1rem' : '0',
          }}
        >
          <button
            onClick={() => (window.location.href = 'https://geo-track-em3s.onrender.com/dashboard')}
            style={{
              padding: isMobile ? '1rem 2rem' : isTablet ? '1.125rem 3rem' : '1.25rem 3.5rem',
              background: 'rgb(30, 41, 59)',
              color: 'white',
              borderRadius: '1rem',
              border: 'none',
              fontSize: isMobile ? '1rem' : '1.125rem',
              fontWeight: 700,
              lineHeight: 1.3,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgb(15, 23, 42)';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgb(30, 41, 59)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Go to Dashboard
            <ArrowRight style={{ width: isMobile ? '1.4rem' : '1.6rem', height: isMobile ? '1.4rem' : '1.6rem' }} />
          </button>
        </div>
        <Footer />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
