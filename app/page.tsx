'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { getDashboardPath } from '@/lib/rolePermissions';
import Link from 'next/link';
import { 
  FaSeedling, 
  FaUsers, 
  FaWarehouse, 
  FaChartLine, 
  FaQrcode, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
  FaLock,
  FaSync,
  FaChartBar,
  FaUserCheck,
  FaHandshake,
  FaAward,
  FaTruck,
  FaBox,
  FaUserTie,
  FaClipboardCheck,
  FaLeaf
} from 'react-icons/fa';

export default function Home() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      router.push(getDashboardPath(user.role));
    }
  }, [isAuthenticated, user, router]);

  if (isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaSeedling className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">FertTech</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors scroll-smooth">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors scroll-smooth">How It Works</a>
              <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition-colors scroll-smooth">Benefits</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors scroll-smooth">About</a>
            </div>
            <Link
              href="/login"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-100 p-4 rounded-full">
                <FaSeedling className="text-6xl text-primary-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              FertTech
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
              National Farmer Input Distribution System
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Fair, Transparent, and Auditable Agricultural Input Delivery for Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/login"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <FaArrowRight className="inline-block ml-2" />
              </Link>
              <a
                href="#features"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-primary-600 transform hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1.2M+</div>
              <div className="text-gray-600">Farmers Registered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">11</div>
              <div className="text-gray-600">Regions Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">84%</div>
              <div className="text-gray-600">Distribution Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Transparent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solution for transparent and efficient agricultural input distribution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Farmer Registration</h3>
              <p className="text-gray-600">
                Seasonal registration using existing farmer books without introducing new bureaucracy
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaQrcode className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">QR Code System</h3>
              <p className="text-gray-600">
                Secure QR code-based entitlement with anti-forgery protection and one-active-code enforcement
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaWarehouse className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
              <p className="text-gray-600">
                Digital stock flow from federal to kebele levels with real-time tracking and reconciliation
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audit & Oversight</h3>
              <p className="text-gray-600">
                Complete transparency with immutable transaction logs and multi-level oversight dashboards
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaMobileAlt className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Offline-First</h3>
              <p className="text-gray-600">
                Works in areas without internet with automatic sync when connectivity is restored
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-600">
                One-active-QR enforcement, signed QR codes, and fraud pattern detection
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaSync className="text-3xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partial Distribution</h3>
              <p className="text-gray-600">
                Support for partial distributions when stock is insufficient, with balance tracking
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaGlobe className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nationally Scalable</h3>
              <p className="text-gray-600">
                Designed to scale from pilot regions to national deployment with high-volume support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fertilizer Distribution Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-6 rounded-full">
                <FaLeaf className="text-5xl text-green-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fertilizer Distribution for Farmers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ensuring every farmer receives their entitled fertilizer through a transparent, secure process
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Distribution Flow */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="text-center relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUserTie className="text-3xl text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Farmer Registration</h4>
                  <p className="text-sm text-gray-600">Land size recorded</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                  <FaArrowRight className="text-primary-400 text-xl" />
                </div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBox className="text-3xl text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entitlement Calculated</h4>
                  <p className="text-sm text-gray-600">Based on land size</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                  <FaArrowRight className="text-primary-400 text-xl" />
                </div>
              </div>
              
              <div className="text-center relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaQrcode className="text-3xl text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">QR Code Issued</h4>
                  <p className="text-sm text-gray-600">Secure entitlement card</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                  <FaArrowRight className="text-primary-400 text-xl" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTruck className="text-3xl text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fertilizer Distributed</h4>
                  <p className="text-sm text-gray-600">At cooperative</p>
                </div>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <FaBox className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fertilizer Types</h3>
                    <p className="text-sm text-gray-600">Urea, DAP, NPS</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Multiple fertilizer types distributed based on crop requirements and regional policies
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaClipboardCheck className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fair Distribution</h3>
                    <p className="text-sm text-gray-600">Based on land size</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Each farmer receives fertilizer proportional to their registered land size, ensuring fairness
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <FaWarehouse className="text-2xl text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Stock Tracking</h3>
                    <p className="text-sm text-gray-600">Real-time updates</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Digital inventory management ensures accurate stock levels and prevents shortages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process for fair input distribution
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Registration</h3>
                <p className="text-gray-600">
                  Farmers register once per season at kebele level using existing records. Land size determines entitlement.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">QR Code Generation</h3>
                <p className="text-gray-600">
                  System generates unique QR code containing only FarmerID and checksum. Printed as laminated card.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Distribution</h3>
                <p className="text-gray-600">
                  Cooperative scans QR, views entitlement, and issues inputs. System automatically updates balances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FertTech?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for Ethiopia's agricultural needs with context-appropriate solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">Secure & Transparent</h3>
              </div>
              <p className="text-gray-600">
                One active QR per farmer with digital signatures and complete audit trails. No favoritism, no manual overrides.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">Offline-First</h3>
              </div>
              <p className="text-gray-600">
                Works in areas without internet connectivity. Local data storage with automatic sync when online.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaUserCheck className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">No Smartphone Required</h3>
              </div>
              <p className="text-gray-600">
                Farmers don't need smartphones. QR code is a simple card that represents entitlement, not money or personal data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">Uses Existing Structures</h3>
              </div>
              <p className="text-gray-600">
                Leverages existing farmer books and cooperative systems. No new bureaucracy introduced.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaChartBar className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
              </div>
              <p className="text-gray-600">
                Multi-level oversight dashboards for woreda, zonal, and regional officers. Detect issues early.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaAward className="text-3xl text-primary-600 mr-4" />
                <h3 className="text-xl font-semibold">Audit-Ready</h3>
              </div>
              <p className="text-gray-600">
                Complete immutable transaction logs. Export data for independent review. Government data ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lost QR Replacement</h4>
                  <p className="text-gray-600">Identity verification and instant QR reissue with full entitlement preservation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partial Distribution Support</h4>
                  <p className="text-gray-600">Collect remaining balance later when stock is insufficient</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stock Reconciliation</h4>
                  <p className="text-gray-600">Prevent theft with digital stock flow and discrepancy detection</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fraud Detection</h4>
                  <p className="text-gray-600">Identify suspicious patterns like repeated QR replacements or abnormal times</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multilingual Support</h4>
                  <p className="text-gray-600">Icon-based, low-text interface supporting local languages</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Seasonal Policy Config</h4>
                  <p className="text-gray-600">Adjust input ratios per crop and region without code changes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About FertTech</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              FertTech is Ethiopia's comprehensive solution for fair, transparent, and auditable delivery of agricultural inputs. 
              Built around core realities of Ethiopian agriculture, the system ensures that every farmer receives their entitled 
              inputs through a secure, QR-code-based mechanism.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The system functions effectively in conditions of illiteracy, offline connectivity, partial stock availability, 
              and high audit requirements. It leverages existing farmer structures and aligns with cooperative distribution 
              systems, minimizing resistance while ensuring transparency at every level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="font-semibold text-gray-900">Pilot-Ready</div>
                <div className="text-sm text-gray-600">Easy to test in pilot regions</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="font-semibold text-gray-900">Nationally Scalable</div>
                <div className="text-sm text-gray-600">Designed for country-wide deployment</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="font-semibold text-gray-900">Context-Appropriate</div>
                <div className="text-sm text-gray-600">Built for Ethiopia's realities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Agricultural Input Distribution?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers, officers, and cooperatives using FertTech for transparent, fair, and efficient input delivery
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Login to Dashboard
              <FaArrowRight className="inline-block ml-2" />
            </Link>
            <a
              href="#features"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FaSeedling className="text-2xl text-primary-400" />
                <span className="text-xl font-bold">FertTech</span>
              </div>
              <p className="text-gray-400">
                National Farmer Input Distribution System for Ethiopia
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">System</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ministry of Agriculture</li>
                <li>Ethiopia</li>
                <li>Email: support@ferttech.et</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 FertTech. All rights reserved.</p>
            <p className="mt-2 text-sm">Built for Ethiopia's Agricultural Future</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
