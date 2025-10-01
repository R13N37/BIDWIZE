import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface EventsProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttons: { label: string; variant?: "default" | "secondary" | "outline" }[];
  features: Feature[];
}

export const Events: FC<EventsProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  buttons,
  features,
}) => {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text & Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{subtitle}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                variant={btn.variant || "default"}
                className={
                  btn.variant === "default"
                    ? "bg-black hover:bg-gray-800"
                    : ""
                }
              >
                {btn.label}
              </Button>
            ))}
          </div>
          <p className="text-gray-500 max-w-lg mx-auto md:mx-0">{description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F6F8F3] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-4 text-yellow-500 text-4xl">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;