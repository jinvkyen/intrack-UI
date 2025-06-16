import { useState } from "react";
import {
  Clock,
  Database,
  BarChart3,
  Shield,
  Download,
  Building2,
  CheckCircle2,
  TrendingUp,
  Target,
  Code2,
  Zap,
  Globe,
  ArrowRight,
  Star,
  Play,
} from "lucide-react";

function App() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Log daily tasks and hours with precision. Track progress toward required internship hours automatically.",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      title: "Company Management",
      description:
        "Manage multiple companies during your internship experience with detailed information and requirements.",
      color: "text-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Visual Progress",
      description:
        "Dynamic progress bars and visual feedback keep you motivated and informed about your completion status.",
      color: "text-purple-600",
    },
    {
      icon: Database,
      title: "Local Storage",
      description:
        "SQLite database ensures your data is stored locally and accessible offline, giving you full control.",
      color: "text-indigo-600",
    },
  ];

  const goals = [
    {
      icon: Target,
      title: "Accurate Hour Tracking",
      description: "Monitor daily progress and total hours rendered toward required internship completion.",
    },
    {
      icon: Zap,
      title: "Simplified Data Entry",
      description: "Intuitive interface for logging tasks without requiring technical knowledge or complex setup.",
    },
    {
      icon: TrendingUp,
      title: "Visual Motivation",
      description: "Progress bars and completion percentages provide clear visual feedback and motivation.",
    },
    {
      icon: Globe,
      title: "Offline Accessibility",
      description: "Works completely offline with local SQLite database - no internet connection required.",
    },
  ];

  const techSpecs = [
    { label: "Framework", value: "Java Swing" },
    { label: "Database", value: "SQLite" },
    { label: "IDE", value: "NetBeans" },
    { label: "Deployment", value: "Launch4j (.exe)" },
    { label: "Storage", value: "Local Database" },
    { label: "Platform", value: "Windows Desktop" },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section
        id='home'
        className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium'>
                <Star className='w-4 h-4 mr-2 text-yellow-400' />
                Internship Progress Tracking Made Simple
              </div>

              <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent'>InTrack</span>
              </h1>

              <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                A lightweight, user-friendly desktop application that helps students efficiently track their internship
                progress with visual feedback and seamless data management.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href='/src/app/intrack.exe'
                  className='inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg'>
                  <Download className='w-5 h-5 mr-2' />
                  Download Now
                </a>
                <a
                  href='https://github.com/jinvkyen/InTrack'
                  className='inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg'
                  target='_blank'
                  rel='noopener noreferrer'>
                  View Documentation
                </a>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
                <div className='space-y-6'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold'>Daily Progress</h3>
                    <span className='text-emerald-400 font-semibold'>78%</span>
                  </div>

                  <div className='space-y-3'>
                    <div className='bg-white/20 rounded-full h-3 overflow-hidden'>
                      <div className='bg-gradient-to-r from-emerald-400 to-blue-400 h-full w-3/4 rounded-full transition-all duration-1000'></div>
                    </div>
                    <div className='text-sm text-blue-200'>312 / 400 hours completed</div>
                  </div>

                  <div className='space-y-3'>
                    {[
                      { task: "Code Review", hours: "2.5h", status: "completed" },
                      { task: "Feature Development", hours: "4h", status: "in-progress" },
                      { task: "Documentation", hours: "1h", status: "pending" },
                    ].map((item, index) => (
                      <div key={index} className='flex items-center justify-between p-3 bg-white/5 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.status === "completed"
                                ? "bg-emerald-400"
                                : item.status === "in-progress"
                                ? "bg-yellow-400"
                                : "bg-gray-400"
                            }`}></div>
                          <span className='text-sm'>{item.task}</span>
                        </div>
                        <span className='text-sm text-blue-200'>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Powerful Features for
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {" "}
                Success
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              InTrack combines simplicity with powerful functionality to make internship tracking effortless and
              effective.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-white shadow-lg border-l-4 border-blue-600 transform scale-105"
                        : "bg-white/50 hover:bg-white hover:shadow-md"
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}>
                    <div className='flex items-start space-x-4'>
                      <div className={`p-3 rounded-lg bg-gray-100 ${feature.color}`}>
                        <Icon className='w-6 h-6' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                        <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='relative'>
              <div className='bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
                <div className='space-y-6'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-bold'>InTrack Dashboard</h3>
                    <div className='flex space-x-2'>
                      <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='font-semibold'>Total Completed</span>
                        <span className='text-emerald-300'>65%</span>
                      </div>
                      <div className='bg-white/20 rounded-full h-2'>
                        <div className='bg-emerald-400 h-2 rounded-full w-2/3 transition-all duration-1000'></div>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold'>260</div>
                        <div className='text-sm text-blue-200'>Hours Logged</div>
                      </div>
                      <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold'>3</div>
                        <div className='text-sm text-blue-200'>Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section id='tech' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Built with
              <span className='bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent'>
                {" "}
                Java Technology
              </span>
            </h2>
          </div>

          <div className='grid lg:grid-cols-3 gap-8 mb-16'>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='p-3 bg-blue-600 rounded-lg'>
                  <Code2 className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>Java Swing</h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Built with Java Swing for a native desktop experience with rich UI components and cross-platform
                compatibility.
              </p>
            </div>

            <div className='bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='p-3 bg-emerald-600 rounded-lg'>
                  <Database className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>SQLite</h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Local SQLite database ensures your data stays private and accessible offline, with fast query
                performance.
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='p-3 bg-purple-600 rounded-lg'>
                  <Shield className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>Standalone</h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Packaged as a standalone .exe file using Launch4j - no Java installation required for end users.
              </p>
            </div>
          </div>

          <div className='bg-gray-50 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Technical Specifications</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {techSpecs.map((spec, index) => (
                <div key={index} className='flex items-center justify-between p-4 bg-white rounded-lg shadow-sm'>
                  <span className='font-medium text-gray-700'>{spec.label}</span>
                  <span className='font-semibold text-blue-600'>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id='about' className='py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              Designed for
              <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
                {" "}
                Students
              </span>
            </h2>
            <p className='text-xl text-blue-200 max-w-3xl mx-auto'>
              Every feature is carefully crafted to help students focus on learning while effortlessly tracking their
              progress.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className='text-center space-y-4 group'>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300'>
                    <Icon className='w-8 h-8 text-yellow-400' />
                  </div>
                  <h3 className='text-xl font-semibold'>{goal.title}</h3>
                  <p className='text-blue-200 leading-relaxed'>{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Two Powerful
              <span className='bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'> Modes</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Choose the mode that fits your needs - whether you want to save your progress or just explore the
              features.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='p-4 bg-green-600 rounded-xl'>
                  <CheckCircle2 className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gray-900'>Start Tracking</h3>
              </div>
              <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
                Save your progress permanently with persistent storage. All your internship data, tasks, and progress
                are stored in a local database for future reference.
              </p>
              <div className='space-y-3'>
                {[
                  "Persistent data storage",
                  "SQLite database integration",
                  "Full progress tracking",
                  "Export capabilities",
                ].map((feature, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <CheckCircle2 className='w-5 h-5 text-green-600' />
                    <span className='text-gray-700'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='p-4 bg-blue-600 rounded-xl'>
                  <Play className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gray-900'>Try Without Saving</h3>
              </div>
              <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
                Explore InTrack in sandbox mode without committing any data. Perfect for testing features and getting
                familiar with the interface.
              </p>
              <div className='space-y-3'>
                {["No data persistence", "Full feature access", "Risk-free exploration", "Instant setup"].map(
                  (feature, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                      <Play className='w-5 h-5 text-blue-600' />
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Track Your Success?</h2>
          <p className='text-xl text-blue-100 mb-12 leading-relaxed'>
            Join students worldwide who are taking control of their internship progress with InTrack. Download now and
            start your journey to organized, efficient internship tracking.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <a
              href='/src/app/intrack.exe'
              className='inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-xl'>
              <Download className='w-6 h-6 mr-3' />
              Download InTrack
            </a>
            <a
              href='https://github.com/jinvkyen/InTrack'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm'>
              View Documentation
              <ArrowRight className='w-6 h-6 ml-3' />
            </a>
          </div>

          <div className='mt-12 flex items-center justify-center space-x-8 text-blue-200'>
            <div className='flex items-center space-x-2'>
              <Download className='w-5 h-5' />
              <span>Free Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 md:place-items-center'>
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center gap-2 mb-4'>
                <div className='h-12 w-12 bg-blue-800 rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>@T</span>
                </div>
                <h3 className='text-lg font-bold bg-white bg-clip-text text-transparent'>InTrack</h3>
              </div>
              <p className='text-gray-200 mb-4 text-balance'>
                This site is a personal project made with React and Tailwind CSS, showcasing the capabilities of
                InTrack, a Java Swing application designed to help students track their internship progress efficiently.
              </p>
            </div>

            <div className='mb-4'>
              <h4 className='font-semibold text-gray-200 mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <div className='flex flex-col'>
                  <a href='#home' className='text-gray-300'>
                    Home
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='#features' className='text-gray-300'>
                    Features
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='#tech' className='text-gray-300'>
                    Technologies
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='#about' className='text-gray-300'>
                    About
                  </a>
                </div>
              </ul>
            </div>

            <div className='mb-4'>
              <h4 className='font-semibold text-gray-200 mb-4'>Technology Stack</h4>
              <ul className='space-y-2'>
                <div className='flex flex-col'>
                  <a href='https://react.dev/' className='text-gray-300'>
                    React
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='https://www.typescriptlang.org/docs/' className='text-gray-300'>
                    TypeScript
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='https://tailwindcss.com/' className='text-gray-300'>
                    Tailwind CSS
                  </a>
                </div>
                <div className='flex flex-col'>
                  <a href='https://vercel.com/' className='text-gray-300'>
                    Vercel
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 pt-8'>
            <p className='text-gray-500 text-sm text-center'>
              © Jinvkyen 2025 InTrack. Built with Java Swing, SQLite, and passion for student success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
