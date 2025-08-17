import { cn } from "@/lib/utils";
import {
  
  IconLanguage,
  IconHeadset,
  IconHealthRecognition,
  IconShieldLock,
  IconDevices,
  IconId,
} from "@tabler/icons-react";

function FeaturesSectionDemo() {
  const features = [
    {
      title: "Secure Data Storage",
      description:
        "Your data is encrypted and stored safely with top-tier security protocols.",
      icon: <IconShieldLock size={40} />, // 🔒 security
    },
    {
      title: "MedEase makes healthcare easy",
      description:
        "Book doctors, order medicines, and access reports all in one place.",
      icon: <IconHealthRecognition size={40} />, // 🏥 health
    },
    {
      title: "Access Anywhere",
      description:
        "Retrieve your medical reports from any device, anytime, with ease.",
      icon: <IconDevices size={40} />, // 💻📱 device accessibility
    },
    {
      title: "ABHA ID Integration",
      description:
        "Connect with government-issued healthcare IDs for streamlined access.",
      icon: <IconId size={40} />,  
    },
    {
      title: "Multi-Language Support",
      description:
        "Access the platform in your preferred language for better usability.",
      icon: <IconLanguage size={40} />,  
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available 100% of the time. At least our AI Agents are.",
      icon: <IconHeadset size={40} />, 
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Key Features
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition group hover:shadow-xl hover:-translate-y-2"
      )}
    >
     
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl bg-gradient-to-t from-blue-100/40 dark:from-blue-900/30 to-transparent pointer-events-none" />

      <div className="mb-4 text-blue-600 relative z-10">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-neutral-800 dark:text-neutral-100 relative z-10 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;
