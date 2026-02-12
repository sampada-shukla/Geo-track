import React, { useState, useEffect, useRef } from 'react';
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
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  Sparkles,
  Zap,
  Eye,
  Info
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

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
import { Footer } from './Footer';

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
        iconColor: '#3B82F6',
        image: app_launch,
        details: [
         'Locate the GeoTrack app icon on your device',
          'App loads to secure login screen',
          'System checks device compatibility automatically',
],
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
          ],
        },
        icon: Shield,
        iconColor: '#1D4ED8',
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
        iconColor: '#06B6D4',
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
        number: 4,
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
        iconColor: '#22C55E',
        image: allow,
      },
    ],
  },
  {
    sectionId: 3,
    sectionTitle: '3. Map Screen & Client Tracking',
    sectionDescription: 'View your location and track nearby clients on the map',
    steps: [
      {
        number: 5,
        title: 'View Your Location & Nearby Clients',
        description: 'The map displays your current location. Nearby clients are shown using colored markers.',
        details: [
          'Red – Client not visited',
          'Green – Client visited',
        ],
        icon: MapPinned,
        iconColor: '#F97316',
        image: map_screen,
      },
      {
        number: 6,
        title: 'Click on Client Marker',
        description: 'On tapping a client marker, you can view client details and start a meeting with the client.',
        details: [
   'View client address and last interaction time',
  'Start Meeting option available to initiate a meeting',
  'Mark visit status instantly from the action menu',
  'Update client status (Met Successfully / Not Available / Office Closed / Spoke on Phone)',
  
],
        icon: Navigation,
        iconColor: '#EF4444',
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
        number: 7,
        title: 'Start Meeting',
        description: 'When Start Meeting is selected, view client location, phone number, meeting start time & duration.',
        details: [
          'Active – Client discussion in progress',
          'Completed – Client interested / deal done',
          'Inactive – Client not interested',
        ],
        icon: Users,
        iconColor: '#A855F7',
        image: meeting_details,
      },
      {
        number: 8,
        title: 'During the Meeting',
        description: 'Add meeting notes, attach documents, images, or files, and update meeting outcomes in real time.',
        details: [
  'Add meeting notes in the provided text area',
  'Attach images, documents, or files using Add Files option',
  'View uploaded attachments before ending the meeting',
  'Update client discussion details in real time',

],
        icon: FileText,
        iconColor: '#4F46E5',
        image: meeting_notes,
      },
      {
        number: 9,
        title: 'End Meeting',
        description: 'Tap End Meeting. Client status automatically updates from Active → Inactive/Completed. Notes and attachments are securely saved.',
        details: ['Tap End Meeting once the discussion with the client is completed',
                  'A confirmation prompt appears to ensure the meeting is being closed intentionally',
                  'All meeting notes, attachments, and updates are securely saved in the system'
        ],
        icon: CheckCircle2,
        iconColor: '#22C55E',
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
        number: 10,
        title: 'View Client Details',
        description: 'From the client screen or map, view client status, last visited date & history, contact information (Email, Address, Coordinates), meeting notes & attachments, and client location highlighted on the map.',
        details: [ 'View complete client profile including current status (Active, Inactive, Completed)',
                  'Displays last visited date and visit history for performance tracking',
                  'Access previously saved meeting notes and attachments',
                  'Shows Contact Information',
        ], 
        icon: UserCircle,
        iconColor: '#3B82F6',
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
        number: 11,
        title: 'Choose Trip Type',
        description: 'Select between Single Trip (one-way journey, single transport mode) or Multi-Leg Trip (multiple journeys, different transport modes in one trip).',
        details: ['Select between-Single Trip – One-way journey using a single transport mode',
                  'Multi-Leg Trip – Multiple journeys using different transport modes within one trip',
                  'Helps organize travel records systematically',
                  'Provides structured expense tracking for reimbursement and reporting purposes'
                ],
        icon: Route,
        iconColor: '#22C55E',
        image: trip_details
      },
      {
        number: 12,
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
        number: 13,
        title: 'Multi-Leg Trip Entry',
        description: 'Enter trip name, multiple journey legs with start/end location, distance, transport mode, amount spent, notes, and attach receipts. View total legs, distance, and expense amount.',
        details: [
          'Start & end location',
          'Trip name & multiple journey legs',
          'Transport mode',
          'Amount spent',
          'View total legs & expense amount',
        ],
        icon: CreditCard,
        iconColor: '#F97316',
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
        number: 14,
        title: 'Client Marker Status on Map',
        description: 'Client markers on map indicate visit status and priority.',
        details: [
          'Red – Never visited (shows client count)',
          'Green – Recently visited (shows visit count)',
          'Yellow – Follow-up required soon',
          'Orange – Overdue visit',
        ],
        icon: MapPin,
        iconColor: '#EF4444',
        image: focus_marker,
      },
    ],
  },
  {
    sectionId: 8,
    sectionTitle: '8. Client Screen',
    sectionDescription: 'Manage and organize all your clients in one place',
    steps: [
      {
        number: 15,
        title: 'View All Clients',
        description: 'Clients are categorized as All, Active, Inactive, and Completed. Search by name, sort by distance, and filter by status.',
        details: [
          'Search by client name',
          'Sort by nearest distance',
          'Filter by client status',
          'View client name, email, phone, distance',
        ],
        icon: Users,
        iconColor: '#A855F7',
        image: client_screen,
      },
      {
        number: 16,
        title: 'Add New Client',
        description: 'Tap Add Client and choose Quick Fill (scan business card to auto-populate) or Manual Entry (client name, phone, email, address, pincode, notes).',
        details: [
          'Enter client details including name, phone number, email, address, pincode, and optional notes',
          'Save to instantly include the client in map tracking and visit management'
        ],
        icon: UserPlus,
        iconColor: '#4F46E5',
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
        number: 17,
        title: 'View Activity Logs',
        description: 'Displays total number of activities, date & time, latitude & longitude, location coordinates, and distance traveled.',
        details: [
          'Access a complete timeline of user activity logs',
          'Track movement history and field activity in a structured format for monitoring and reporting purposes'
        ],
        icon: Activity,
        iconColor: '#3B82F6',
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
        number: 18,
        title: 'Profile Information',
        description: 'View & edit profile name, User/Employee ID, and view total expenses incurred.',
        details: [
          'View and edit your name and profile details',
          'View total expense summary at a glance',
          'Toggle background location tracking',
          
],
        icon: UserCircle,
        iconColor: '#22C55E',
        image: profile_screen,
      },
      {
        number: 19,
        title: 'Account Settings',
        description: 'Enable/disable background location tracking, view registered email and member since date. Tap Sign Out to exit the app securely.',
        details: [
          'View registered email and account details',
          'Check membership information',
          'Manage app preferences and privacy settings',
          
],
        icon: Settings,
        iconColor: '#0D9488',
        image: sign_out,
      },
    ],
  },
];

// Floating Navigation Buttons Component
const FloatingNavButtons = ({ onScrollToTop, onScrollToBottom, showTop, showBottom }) => {
  return (
    <div
      style={{
        position: 'fixed',
        right: '2rem',
        bottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollToTop}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(29, 78, 216))',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4), 0 0 0 4px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'shimmer 2s infinite',
              }}
            />
            <ArrowUp color="white" size={28} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollToBottom}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgb(6, 182, 212), rgb(13, 148, 136))',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4), 0 0 0 4px rgba(6, 182, 212, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'shimmer 2s infinite',
              }}
            />
            <ArrowDown color="white" size={28} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Step Component with Premium Design
const ScrollingStoryStep = ({ step, isMobile, isTablet, activeImageIndex,   stepIndex, totalSteps }) => {
  const stepRef = useRef(null);
  const imageRef = useRef(null);
  const popRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  // Mobile popup handling with scroll threshold
useEffect(() => {
  if (!isMobile) return;

  let lastScrollY = window.scrollY;
  const scrollThreshold = 50; // pixels scrolled before closing

  const handleClickOutside = (event) => {
    if (
      showPopup &&
      imageRef.current &&
      popRef.current &&
      !imageRef.current.contains(event.target) &&
      !popRef.current.contains(event.target)
    ) {
      setShowPopup(false);
    }
  };

  const handleScroll = () => {
    if (showPopup) {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      if (scrollDelta > scrollThreshold) {
        setShowPopup(false);
      }
    }
  };

  if (showPopup) {
    lastScrollY = window.scrollY; 
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
    window.removeEventListener('scroll', handleScroll, true);
  };
}, [showPopup, isMobile]);

  const imageOnLeft = step.number % 2 === 1;

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    imageOnLeft ? [-80, 0, 0, -80] : [80, 0, 0, 80]
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);

  const textX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    imageOnLeft ? [80, 0, 0, 80] : [-80, 0, 0, -80]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);

  const Icon = step.icon;
  const images = step.multiImages ? step.images : [step.image];

  // Progress indicator
  const progressPercentage = ((stepIndex + 1) / totalSteps) * 100;

  return (
    <div
      ref={stepRef}
      style={{
        minHeight: isMobile ? '85vh' : '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '2rem 1rem' : '3rem 2rem',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        animate={isInView ? {
          background: [
            `radial-gradient(circle at ${imageOnLeft ? '20%' : '80%'} 50%, ${step.iconColor}08, transparent 60%)`,
            `radial-gradient(circle at ${imageOnLeft ? '30%' : '70%'} 60%, ${step.iconColor}12, transparent 70%)`,
            `radial-gradient(circle at ${imageOnLeft ? '20%' : '80%'} 50%, ${step.iconColor}08, transparent 60%)`,
          ]
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Progress indicator line */}
      <div
        style={{
          position: 'absolute',
          left: isMobile ? '1rem' : '3rem',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, transparent, rgba(203, 213, 225, 0.3), transparent)',
          zIndex: 0,
        }}
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, ${step.iconColor}, ${step.iconColor}80)`,
            transformOrigin: 'top',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1300px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* Image Side */}
        <motion.div
          style={{
            x: isMobile ? 0 : imageX,
            scale: imageScale,
            opacity: imageOpacity,
            order: isMobile ? 1 : imageOnLeft ? 1 : 2,
            position: 'relative',
            background: `linear-gradient(135deg, ${step.iconColor}05, ${step.iconColor}02)`,
            borderRadius: '32px',
            padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
            marginBottom: isMobile && showPopup ? '2rem' : '0',
          }}
        >
          {/* Animated floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: step.iconColor,
                top: `${20 + i * 15}%`,
                left: imageOnLeft ? `${10 + i * 5}%` : `${80 - i * 5}%`,
                filter: 'blur(1px)',
                zIndex: 0,
                boxShadow: `0 0 20px ${step.iconColor}`,
              }}
            />
          ))}

          {/* Rotating gradient ring */}
          <motion.div
            animate={isInView ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: `conic-gradient(from 0deg, ${step.iconColor}20, transparent, ${step.iconColor}20)`,
              filter: 'blur(30px)',
              zIndex: -1,
            }}
          />

          {/* Pulsing glow effect */}
          <motion.div
            animate={isInView ? {
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              borderRadius: '30px',
              background: `radial-gradient(circle, ${step.iconColor}15, transparent 70%)`,
              filter: 'blur(40px)',
              zIndex: -1,
            }}
          />

          <motion.div
            whileHover={{ scale: 1.02, rotate: imageOnLeft ? -2 : 2 }}
            transition={{ duration: 0.3 }}
            style={{ 
              position: 'relative',
              minHeight: isMobile ? '400px' : '550px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Light background card behind mockup */}
            <div
              style={{
                position: 'absolute',
                inset: -15,
                borderRadius: '28px',
                background: `linear-gradient(135deg, ${step.iconColor}08, ${step.iconColor}05)`,
                zIndex: -1,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.img
              ref={imageRef}
              key={activeImageIndex[step.number] ?? 0}
              src={images[activeImageIndex[step.number] ?? 0]}
              alt={step.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              onMouseEnter={() => !isMobile && setShowPopup(true)}
              onMouseLeave={() => !isMobile && setShowPopup(false)}
              onClick={() => {
                if (isMobile) {
                  setShowPopup(!showPopup);
                }
              }}
              style={{
                width: '100%',
                maxWidth: isMobile ? '420px' : isTablet ? '500px' : '550px',
                height: 'auto',
                margin: '0 auto',
                display: 'block',
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.18))',
                borderRadius: '20px',
                cursor: 'pointer',
                border: `3px solid ${step.iconColor}40`,
                transformStyle: 'preserve-3d',
                aspectRatio: 'auto',
                objectFit: 'contain',
              }}
            />
            </AnimatePresence>

            {/* Image overlay effect on hover with animated icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${step.iconColor}20, ${step.iconColor}10)`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                backdropFilter: 'blur(2px)',
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Eye color="white" size={48} strokeWidth={2.5} 
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} 
                />
              </motion.div>
            </motion.div>

            {/* Corner accent decorations */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: -10,
                left: -10,
                width: '40px',
                height: '40px',
                border: `3px solid ${step.iconColor}`,
                borderRight: 'none',
                borderBottom: 'none',
                borderRadius: '20px 0 0 0',
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              style={{
                position: 'absolute',
                bottom: -10,
                right: -10,
                width: '40px',
                height: '40px',
                border: `3px solid ${step.iconColor}`,
                borderLeft: 'none',
                borderTop: 'none',
                borderRadius: '0 0 20px 0',
              }}
            />
          </motion.div>

          {/* Enhanced Popup */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  position: isMobile ? 'relative' : 'absolute',
                  bottom: isMobile ? 'auto' : '80px',
                  top: isMobile ? 'auto' : 'auto',
                  left: isMobile ? '0' : (imageOnLeft ? '0' : 'auto'),
                  right: isMobile ? '0' : (imageOnLeft ? 'auto' : '0'),
                  width: isMobile ? 'auto' : '320px',
                  maxWidth: isMobile ? 'none' : '320px',
                  marginTop: isMobile ? '1.5rem' : '0',
                  background: 'linear-gradient(135deg, rgb(15, 23, 42), rgb(30, 41, 59))',
                  borderRadius: '1.5rem',
                  padding: isMobile ? '1.5rem' : '1.75rem',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(59, 130, 246, 0.3)',
                  color: 'white',
                  zIndex: 1000,
                  pointerEvents: isMobile ? 'auto' : 'none',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${step.iconColor}40`,
                }}
              >
                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                  }}
                >
                  <Sparkles color={step.iconColor} size={20} />
                </motion.div>

                {/* Step badge - Enhanced with vibrant color */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-26px',
                    left: '-26px',
                    width: isMobile ? '50px' : '56px',
                    height: isMobile ? '50px' : '56px',
                    borderRadius: '50%',
                    background: step.iconColor,
                    boxShadow: `0 0 0 6px ${step.iconColor}99, 0 12px 25px rgba(0,0,0,0.35)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '1.15rem' : '1.4rem',
                    fontWeight: 700,
                    color: 'white',
                    zIndex: 20,
                  }}
                >
                  
                  {step.number}
                </motion.div>

                <div
                ref={popRef}
                  style={{
                    width: isMobile ? '3rem' : '3.5rem',
                    height: isMobile ? '3rem' : '3.5rem',
                    borderRadius: '1rem',
                    background: `linear-gradient(135deg, ${step.iconColor}, ${step.iconColor}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: `0 8px 20px ${step.iconColor}40`,
                  }}
                >
                  <Icon color="white" size={isMobile ? 20 : 24} strokeWidth={2.5} />
                </div>

                <h4
                  style={{
                    fontSize: isMobile ? '1.1rem' : '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.6rem',
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h4>

                <p
                  style={{
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {step.description}
                </p>
{step.warning && (
  <div
  style={{
  marginTop: '1rem',
  padding: '0.75rem',
  background: 'rgba(239, 68, 68, 0.1)',
  border: '1px solid rgba(239, 68, 68, 0.3)',
  borderRadius: '0.5rem',
  }}
  >
  <div
  style={{
  fontSize: isMobile ? '0.85rem' : '0.9rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.95)',
  marginBottom: '0.5rem',
  fontFamily: '"Inter", sans-serif',
}}
>
  {step.warning.title}
    </div>
    <ul
    style={{
    marginTop: '0.5rem',
    paddingLeft: '0',
    listStyle: 'none',
}}
>
{step.warning.points.map((point, i) => (
<li
key={i}
style={{
fontSize: isMobile ? '0.75rem' : '0.8rem',
color: 'rgba(255,255,255,0.8)',
marginBottom: '0.25rem',
fontFamily: '"Inter", sans-serif',
display: 'flex',
alignItems: 'flex-start',
gap: '0.5rem',
}}
  >
<span style={{ marginTop: '2px' }}>•</span>
<span>{point}</span>
</li>
))}
</ul>
  </div>
  )}
</motion.div>
    )}
    </AnimatePresence>
    </motion.div>

        {/* Text Side - Enhanced */}
        <motion.div
          style={{
            x: isMobile ? 0 : textX,
            opacity: textOpacity,
            order: isMobile ? 2 : imageOnLeft ? 2 : 1,
            position: 'relative',
            marginLeft: !isMobile && imageOnLeft ? '4rem' : '0',
            marginRight: !isMobile && !imageOnLeft ? '4rem' : '0',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.65), rgba(248,250,252,0.55))',
              padding: isMobile ? '1.6rem' : '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 25px 60px rgba(0, 0, 0, 0.18), 0 10px 25px rgba(0, 0, 0, 0.12)`,
              backdropFilter: 'blur(14px) saturate(120%)',
              WebkitBackdropFilter: 'blur(14px) saturate(120%)',
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '100%' : '500px',
            }}
          >
            {/* Animated corner decoration */}
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: `conic-gradient(from 0deg, ${step.iconColor}15, transparent, ${step.iconColor}15)`,
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />

            {/* Header with icon and step number */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    width: isMobile ? '56px' : '64px',
                    height: isMobile ? '56px' : '64px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${step.iconColor}, ${step.iconColor}dd)`,
                    backgroundColor: step.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 12px 28px ${step.iconColor}40, 0 0 20px ${step.iconColor}20`,
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <Icon 
                    color="white" 
                    size={isMobile ? 28 : 32} 
                    strokeWidth={2.5}
                    style={{ 
                      position: 'relative', 
                      zIndex: 3,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                  
                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '16px',
                      border: `2px solid ${step.iconColor}`,
                      zIndex: 1,
                    }}
                  />
                </motion.div>

                <div>
                  <div
                    style={{
                      fontSize: isMobile ? '0.75rem' : '0.8rem',
                      fontWeight: 700,
                      color: step.iconColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Step {step.number} of {totalSteps}
                  </div>
                  <div
                    style={{
                      width: '60px',
                      height: '3px',
                      background: `linear-gradient(to right, ${step.iconColor}, transparent)`,
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>

              {/* Large step number - Square Badge */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: isMobile ? '52px' : '64px',
                  height: isMobile ? '52px' : '64px',
                  borderRadius: '16px',
                  background: step.iconColor,
                  border: '2px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: isMobile ? '22px' : '28px',
                  fontWeight: 800,
                  color: 'white',
                  boxShadow: `0 0 0 2px white, 0 8px 20px ${step.iconColor}, 0 18px 40px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.5)`,
                }}
              >
                {step.number}
              </motion.div>
            </div>

            {/* Title */}
            <h4
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: isMobile ? '22px' : isTablet ? '26px' : '30px',
                fontWeight: 700,
                color: 'rgb(20, 47, 83)',
                lineHeight: 1.3,
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {step.title}
            </h4>

            {/* Details */}
            {step.details && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: `linear-gradient(90deg, ${step.iconColor}08, transparent)`,
                      borderRadius: '12px',
                      borderLeft: `4px solid ${step.iconColor}`,
                      boxShadow: `0 2px 8px ${step.iconColor}10`,
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color={step.iconColor}
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: isMobile ? '14px' : '15px',
                        color: 'rgb(100, 116, 139)',
                        lineHeight: 1.6,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '116px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                height: '4px',
                background: step.iconColor,
                marginTop: '0.5rem',
                borderRadius: '10px',
                boxShadow: `0 3px 12px ${step.iconColor}, 0 6px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)`,
                position: 'relative',
                zIndex: 10,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

            

export default function TutorialPage() {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add shimmer animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      * {
        box-sizing: border-box;
      }
      
      html, body {
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
      }
      
      body {
        overflow-y: auto;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
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
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowTopButton(scrollTop > 300);
      setShowBottomButton(scrollTop < scrollHeight - clientHeight - 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const totalSteps = tutorialSections.reduce((acc, section) => acc + section.steps.length, 0);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #e0f7fa 0%, #ffffff 40%, #ffffff 100%)',
        position: 'relative',
        fontFamily: '"Inter", sans-serif',
        width: '100%',
      }}
    >
      {/* Floating Navigation Buttons */}
      {!isMobile && (
        <FloatingNavButtons
          onScrollToTop={scrollToTop}
          onScrollToBottom={scrollToBottom}
          showTop={showTopButton}
          showBottom={showBottomButton}
        />
      )}

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

<div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Hero Section */}
        <section
          style={{
            padding: isMobile ? '2rem 1rem' : isTablet ? '2.5rem 1.5rem' : '1rem 1.5rem',
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
              padding: isMobile ? '0' : '0 1.5rem',
            }}
          >
            <div
              style={{
                display: isMobile ? 'flex' : 'grid',
                flexDirection: isMobile ? 'column' : undefined,
                gridTemplateColumns: isMobile ? undefined : isTablet ? '1fr' : '1.1fr 0.9fr',
                gap: isMobile ? '0rem' : isTablet ? '2.5rem' : '3rem',
                alignItems: 'start',
              }}
            >
              {/* Logo - appears first on mobile */}
              {isMobile && (
                <div
  style={{
    paddingTop: '1.5rem',
    paddingBottom: '0.5rem', 
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <img
    src={logoImage}
    alt="GeoTrack"
    style={{
      maxWidth: '100%',
      width: '220px',
      marginTop: '-12px',
      height: 'auto',
    }}
  />
</div>
)}
{/* Video - appears second on mobile */}
{isMobile && (
                <motion.div
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '-16px',
                  }}
                >
                  <TutorialVideo />
                </motion.div>
              )}

              {/* Text Content */}
              <div
                style={{
                  maxWidth: isMobile ? '100%' : '650px',
                  marginTop: isMobile ? '0' : '-2.5rem',
                   marginLeft: isMobile ? '0' : '-6rem',
                }}
              >
                <motion.h1
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
                    fontWeight: 700,
                    marginTop:'1rem',
                    marginBottom: '1rem',
                    lineHeight: isMobile ? '38px' : isTablet ? '46px' : '58px',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {!isMobile && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.05 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: '-4rem',
                        marginBottom: '-2.5rem',
                      }}
                    >
                      <img
                        src={logoImage}
                        alt="Geotrack Logo"
                        style={{
                          width: isTablet ? '16rem' : '20rem',
                          height: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </motion.div>
                  )}

                  <span style={{ color: 'rgb(6, 182, 212)', fontWeight: 900 }}>Explore Geotrack</span>{' '}
                  <span style={{ color: '#0F172A' }}>with Detailed Step-by-Step Tutorials</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 400,
                    color: '#475569',
                    marginTop: '-0.75rem',
                    marginBottom: '1.5rem',
                    lineHeight: isMobile ? '22px' : '26px',
                  }}
                >
               Learn how to discover nearby clients, plan meetings, and track field <br/> visits with tutorials covering client mapping,and visit tracking.
                </motion.p>

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
                          fontSize: isMobile ? '18px' : '19px',
                          fontWeight: 500,
                          color: '#475569',
                          lineHeight: isMobile ? '28px' : '30px',
                        }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Video for desktop/tablet */}
              {!isMobile && (
                <motion.div
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '4rem',
                  }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <TutorialVideo />
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Tutorial Section Header */}
        <section
          style={{
            padding: isMobile ? '2.5rem 1rem 1.5rem' : '3rem 1.5rem 2rem',
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: isMobile ? '28px' : isTablet ? '34px' : '40px',
                fontWeight: 700,
                color: 'rgb(20, 47, 83)',
                marginBottom: '0.75rem',
                lineHeight: isMobile ? '36px' : isTablet ? '42px' : '48px',
              }}
            >
              Complete Step-by-Step Guide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: isMobile ? '15px' : '17px',
                color: '#475569',
               // maxWidth: '720px',
                margin: '0 auto',
                lineHeight: isMobile ? '23px' : '26px',
                fontWeight: 400,
              }}
            >
              Master Geotrack with our comprehensive guide covering every feature from sign-up to advanced functionality
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.35 }}
  viewport={{ once: true }}
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: isMobile ? '0.65rem 1rem' : '0.75rem 1.25rem',
    margin: '1.25rem auto 0',
    maxWidth: 'fit-content',

    // BOX STYLES
    background:
      'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))',
    border: '1.5px solid rgba(6,182,212,0.35)',
    borderRadius: '999px',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    boxShadow:
      '0 6px 20px rgba(6,182,212,0.18), inset 0 1px 0 rgba(255,255,255,0.6)',
  }}
>
<motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isMobile ? '2.25rem' : '2.5rem',
                  height: isMobile ? '2.25rem' : '2.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(6, 182, 212, 0.25))',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1.5px solid rgba(6, 182, 212, 0.5)',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 20px rgba(6, 182, 212, 0.2)',
                }}
              >
                {/* Icon glow effect */}
  <div
  style={{
    position: 'absolute',
    inset: '-4px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent 70%)',
    filter: 'blur(6px)',
    animation: 'pulse 2s ease-in-out infinite',
  }}
></div>
<Info size={isMobile ? 18 : 20} color="#06B6D4" strokeWidth={2.5} style={{ position: 'relative', zIndex: 1 }} />
              </motion.div>
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: isMobile ? '0.875rem' : isTablet ? '0.9375rem' : '1rem',

                  color: '#0e7490',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 1px 3px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.5)',
                  letterSpacing: '-0.01em',
                }}
              >
                {isMobile ? 'Tap cards for details' : 'Hover over cards to highlight the steps'}
              </span>
            </motion.div>
          </div>
        </section>
        {/* Scrolling Story Steps */}
        <section
          style={{
            background: '#f0fdff',
            position: 'relative',
          }}
        >
          {tutorialSections.map((section, sectionIndex) => {
            const sectionStepStart = tutorialSections
              .slice(0, sectionIndex)
              .reduce((acc, s) => acc + s.steps.length, 0);

            return (
              <div
                key={section.sectionId}
                style={{
                  position: 'relative',
                  paddingTop: sectionIndex === 0 ? '2rem' : '4rem',
                  paddingBottom: '2rem',
                }}
              >
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    padding: isMobile ? '2rem 1rem 1rem' : '2.5rem 2rem 1.5rem',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: isMobile ? '250px' : '400px',
                      height: isMobile ? '250px' : '400px',
                      background: `radial-gradient(circle, ${section.steps[0].iconColor}12, transparent 70%)`,
                      borderRadius: '50%',
                      filter: 'blur(50px)',
                      zIndex: 0,
                    }}
                  />

                  <h2
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
                      fontWeight: 700,
                      color: 'rgb(20, 47, 83)',
                      marginBottom: '0.5rem',
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(135deg, rgb(20, 47, 83), rgb(71, 85, 105))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {section.sectionTitle}
                  </h2>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      color: '#64748b',
                      lineHeight: '1.6',
                      fontSize: isMobile ? '14px' : '16px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {section.sectionDescription}
                  </p>
                </motion.div>

                {/* Steps */}
                {section.steps.map((step, stepIndex) => (
                  <ScrollingStoryStep
                    key={step.number}
                    step={step}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    activeImageIndex={activeImageIndex}
                    stepIndex={sectionStepStart + stepIndex}
                    totalSteps={totalSteps}
                  />
                ))}
              </div>
            );
          })}
        </section>

        {/* CTA SECTION */}
        <div
          style={{
            padding: isMobile ? '3rem 1.25rem 4rem' : isTablet ? '4rem 2.5rem 5rem' : '5rem 3rem 6rem',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #f0fbff, #f8fafc)',
          }}
        >
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = 'https://geo-track-em3s.onrender.com/dashboard';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: isMobile ? '1rem 2rem' : isTablet ? '1.125rem 3rem' : '1.25rem 3.5rem',
              background: 'linear-gradient(135deg, rgb(30, 41, 59), rgb(15, 23, 42))',
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
              position: 'relative',
              overflow: 'hidden',
              margin: '0 auto',
              zIndex: 100,
            }}
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>Go to Dashboard</span>
            <ArrowRight style={{ width: isMobile ? '1.4rem' : '1.6rem', height: isMobile ? '1.4rem' : '1.6rem', position: 'relative', zIndex: 1 }} />
          </motion.button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
